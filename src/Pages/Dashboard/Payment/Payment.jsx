import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import CheckOut from "../../CheckOut/CheckOut";
import { useLoaderData } from "react-router-dom";

// TODO: add publishable key
// const stripePromise  = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const stripePromise  = loadStripe('');

const Payment = () => {
    const biodata = useLoaderData();
    console.log(biodata);
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
            <div>
                {/* <Elements stripe={stripePromise}> */}
                <Elements stripe={stripePromise}>
                    {/* <CheckoutForm></CheckoutForm> */}
                    {/* <CheckOut></CheckOut> */}
                </Elements>
            </div>
        </div>
    );
};

export default Payment;