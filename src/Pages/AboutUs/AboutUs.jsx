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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-center">Our Mission</Typography>
                    <Typography variant="body1" className="mb-4">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                    <Typography variant="h5" className="mb-4 text-center">Our Team</Typography>
                    <Typography variant="body1" className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <div className="flex justify-center items-center">
                        {/* Team Icon Here */}
                        <span className="material-icons">group</span>
                        <Typography variant="body1" className="ml-2">Meet our dedicated team</Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AboutUs;
