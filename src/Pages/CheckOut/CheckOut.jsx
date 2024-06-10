import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { useLoaderData, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../Dashboard/Payment/CheckoutForm";
import { useEffect } from "react";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const CheckOut = () => {
    const biodata = useLoaderData();
    // console.log(biodata);
    // const { _id, BiodataId, name, BiodataType, ProfileImage, PermanentDivision, Age, Occupation } = biodata;


    return (
        <div>
            <div className="mt-20">
                <SectionTitle heading="Check Out" subHeading="Please pay to request contact info"></SectionTitle>
            </div>
            <div>
                <h2 className="text-center text-3xl">Contact Information Request</h2>
                <Elements stripe={stripePromise}>
                    <CheckoutForm key={biodata._id} biodata={biodata}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default CheckOut;