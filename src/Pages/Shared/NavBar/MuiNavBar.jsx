import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import logo from "../../../../src/assets/lg.png";
import { Link } from "react-scroll";

const MuiNavBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="navbar bg-gradient-to-r from-purple-500 to-pink-300 shadow-lg fixed top-0 w-full z-50 max-w-screen-xl mx-auto">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Site Name */}
                <Link to="/" className="flex items-center">
                    <span className="ml-2 text-xl md:text-3xl text-white font-bold">Recursive Partitioning & Title Interaction</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-4">
                    <Link to="partitioning" smooth={true} duration={500} offset={-170} className="btn btn-ghost bg-purple-500 text-white normal-case text-lg">
                        Partitioning
                    </Link>
                    <Link to="alphabet"  smooth={true} duration={500} offset={-170} className="btn btn-ghost bg-purple-500 text-white normal-case text-lg">
                        Alphabet
                    </Link>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button
                        className="btn btn-ghost"
                        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isDrawerOpen && (
                <div className="md:hidden bg-base-100 p-4 absolute top-16 left-0 w-full shadow-lg">
                    <ul className="menu p-2 shadow bg-base-100 rounded-box w-full">
                        <li>
                            <Link
                                className="btn btn-ghost bg-purple-500 text-white normal-case text-lg"
                                to="partitioning"
                                smooth={true} duration={500} offset={-140} 
                                onClick={() => setIsDrawerOpen(false)}
                            >
                                Partitioning
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="btn btn-ghost bg-purple-500 text-white normal-case text-lg mt-4"
                                to="alphabet"
                                smooth={true} duration={500} offset={-140} 
                                onClick={() => setIsDrawerOpen(false)}
                            >
                                Alphabet
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MuiNavBar;
