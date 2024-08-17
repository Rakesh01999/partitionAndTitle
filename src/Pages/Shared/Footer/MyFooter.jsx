import React from "react";
import { Typography, IconButton, Grid, Link } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-9">
            <div className="container mx-auto">
                <Grid container spacing={4} className="">
                    <Grid item xs={12} sm={6} md={3} >
                        <Typography variant="h6"  gutterBottom className="text-orange-200">
                            About Us
                        </Typography>
                        <Typography variant="body2" className="mb-4">
                            Welcome to Shop Ease! Discover a seamless shopping experience with our curated selection of quality products. Shop with ease and confidence!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom className="text-orange-200">
                            Contact
                        </Typography>

                        <Typography variant="body2" className="mb-2">
                            Email: rbiswas01999@gmail.com
                        </Typography>
                        
                        <Typography variant="body2">Phone: +880 1999647103</Typography>
                        <Typography variant="body2" className="mb-2">
                             City:Khulna, Country:Bangladesh
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom className="text-orange-200">
                            Quick Links
                        </Typography>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" color="inherit" underline="hover">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/aboutUs" color="inherit" underline="hover">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" color="inherit" underline="hover">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contactUs" color="inherit" underline="hover">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom className="text-orange-200">
                            Follow Us
                        </Typography>
                        {/* <div className="flex space-x-4 "> */}
                        <div className="space-x-4 ">
                            <IconButton color="inherit" aria-label="Facebook">
                                <Facebook />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Twitter">
                                <Twitter />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Instagram">
                                <Instagram />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
                <Typography variant="body2" className="text-center mt-8 text-orange-200">
                    <div className="mt-10">
                        &copy; {new Date().getFullYear()} Shop Ease. All rights reserved.
                    </div>
                </Typography>
            </div>
        </footer>
    );
};

export default Footer;