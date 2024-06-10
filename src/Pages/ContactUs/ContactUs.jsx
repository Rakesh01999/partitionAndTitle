// import { Typography } from '@mui/material';
import React from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { FaPhoneVolume } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const ContactUs = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
            <Typography variant="h4" className="mb-6 text-center">Contact Us</Typography>
            <Card className="max-w-lg w-full">
                <CardContent>
                    <Typography variant="h5" className="mb-8 text-center">Get in Touch</Typography>
                    <div className="flex items-center mb-2">
                        {/* Phone Icon Here */}
                        <FaPhoneVolume />
                        <span className="material-icons">phone</span>
                        <Typography variant="body1" className="ml-2">+880 19996 47103</Typography>
                    </div>
                    <div className="flex items-center mb-2">
                        {/* Email Icon Here */}
                        <MdAttachEmail />
                        <span className="material-icons">Email: </span>
                        <Typography variant="body1" className="ml-2"> rbiswas01999@gmail.com</Typography>
                    </div>
                    <div className="flex items-center mb-4">
                        {/* Location Icon Here */}
                        <FaLocationDot />
                        <span className="material-icons">Location_on</span>
                        <Typography variant="body1" className="ml-2">123 Main Street, City, Country</Typography>
                    </div>
                    <form className="flex flex-col space-y-4">
                        <TextField label="Name" variant="outlined" fullWidth required />
                        <TextField label="Email" variant="outlined" fullWidth required />
                        <TextField label="Message" variant="outlined" multiline rows={4} fullWidth required />
                        <Button variant="contained" color="primary">Send Message</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default ContactUs;
