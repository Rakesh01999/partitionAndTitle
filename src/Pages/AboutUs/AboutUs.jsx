import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
            <Typography variant="h4" className="mb-6 text-center">About Us</Typography>
            <Card className="max-w-lg w-full">
                <CardContent>
                    <Typography variant="h5" className="mb-4 text-center">Who We Are</Typography>
                    <Typography variant="body1" className="mb-4">
                        We are a dedicated team of professionals passionate about bringing people together. With years of experience in the matchmaking industry, we strive to provide a trusted platform where individuals can find meaningful connections and lifelong partners.
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-center">Our Mission</Typography>
                    <Typography variant="body1" className="mb-4">
                        Our mission is to create a secure and user-friendly environment where individuals can explore potential matches and build meaningful relationships. We aim to facilitate connections that lead to happy and successful marriages. Our commitment is to help you find your perfect match with ease and confidence.
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-center">Our Team</Typography>
                    <Typography variant="body1" className="mb-4">
                        Our team consists of experienced professionals who are dedicated to providing exceptional service and support. We work tirelessly to ensure that your experience on our platform is positive and successful. From customer service representatives to matchmakers, each member of our team plays a vital role in helping you find your perfect partner.
                    </Typography>
                    <div className="flex justify-center items-center">
                        <span className="material-icons">group</span>
                        <Typography variant="body1" className="ml-2">Meet our dedicated team</Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AboutUs;
