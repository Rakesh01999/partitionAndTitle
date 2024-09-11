import React from 'react';
import { FaGithub, FaEnvelope, FaFacebook, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-700 text-neutral-content">
                <div className="container mx-auto flex flex-col items-center">
                    <nav className="flex flex-col items-center gap-4">
                        <a className="text-xl md:text-2xl text-purple-300 font-bold text-center">Get in Touch</a>
                        <div className="flex flex-col items-center gap-4">
                            
                            <a href="mailto:rbiswas01999@gmail.com" className="link link-hover md:text-xl text-white flex items-center">
                                <FaEnvelope className="mr-2" /> Gmail
                            </a>
                            <a href="https://www.linkedin.com/in/rakeshbiswas0199/" target="_blank" rel="noopener noreferrer" className="link link-hover md:text-xl text-white flex items-center">
                                <FaLinkedin className="mr-2" /> Linked In
                            </a>
                            <a href="https://www.facebook.com/rakeshbiswas.biswas.9843/" target="_blank" rel="noopener noreferrer" className="link link-hover md:text-xl text-white flex items-center">
                                <FaFacebook className="mr-2" /> Facebook
                            </a>
                        </div>
                    </nav>
                    <nav className="text-white mt-6 md:text-lg text-center">
                        <p>Copyright © 2024 <span className='text-purple-300'>Rakesh Biswas</span> - All rights reserved</p>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;