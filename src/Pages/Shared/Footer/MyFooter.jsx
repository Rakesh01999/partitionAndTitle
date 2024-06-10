import React from "react";
import { Typography, IconButton, Grid, Link } from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-9">
            <div className="container mx-auto">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2" className="mb-4">
                            Matrimony Mate is dedicated to helping individuals find their ideal life partner. Our platform connects people who share similar values and aspirations, making the journey of finding your soulmate a seamless experience.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body2" className="mb-2">
                            123 Street, City, Country
                        </Typography>
                        <Typography variant="body2" className="mb-2">
                            Email: info@example.com
                        </Typography>
                        <Typography variant="body2">Phone: +1 234 567 890</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography variant="h6" gutterBottom>
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
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <div className="flex space-x-4">
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
                <Typography variant="body2" className="text-center mt-8">
                    <div className="mt-8">
                        &copy; {new Date().getFullYear()} Matrymony Mate. All rights reserved.
                    </div>
                </Typography>
            </div>
        </footer>
    );
};

export default Footer;