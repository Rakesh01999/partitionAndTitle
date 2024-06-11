import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

const CheckoutForm = ({ biodata }) => {
    const [error, setError] = useState();
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    // const [cart, refetch] = useCart();
    const navigate = useNavigate();
    // const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const price = 5;
    // console.log(totalPrice);

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: price })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })

    }, [axiosSecure, price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            // console.log('[error]', error);
            console.log('payment error', error);
            setError(error.message);
        }
        else {
            // console.log('[PaymentMethod]', paymentMethod);
            console.log('PaymentMethod', paymentMethod);
            setError('');
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
            // console.log('paymentIntent', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database 
                const payment = {
                    email: user.email,
                    userName: user.displayName,
                    BiodataId: biodata.BiodataId,
                    name: biodata.name,
                    price,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    biodata,
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment);
                // console.log('payment saved', res.data);
                // refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for your request",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    //   navigate('/dashboard/paymentHistory');
                }
            }
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '400px', margin: '0 auto' }}>
            <Typography variant="h5" component="h2" gutterBottom>
                {/* <span className="text-center">Contact Information Request</span> */}
            </Typography>

            <TextField
                label="Email"
                value={user?.email}
                fullWidth
                margin="normal"
                InputProps={{
                    readOnly: true,
                }}
            />

            <TextField
                label="Biodata ID"
                value={biodata?.BiodataId}
                // onChange={handleBiodataIdChange}
                fullWidth
                margin="normal"
                InputProps={{
                    readOnly: true,
                }}
            />
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {error && (
                <Typography variant="body2" color="error" gutterBottom>
                    {error}
                </Typography>
            )}
            {transactionId && (
                <Typography variant="body2" color="green" gutterBottom>
                    Transaction Id: {transactionId}
                </Typography>
            )}
            <div className="my-4">
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Submit Request
                </Button>
            </div>
        </Box>
    );
};

export default CheckoutForm;