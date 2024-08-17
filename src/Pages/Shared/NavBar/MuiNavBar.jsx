import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import logo from "../../../../src/assets/lg.png";

const MuiNavBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();

    const handleLogOutClick = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    };

    return (
        <div className="navbar bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg fixed top-0 w-full z-50 max-w-screen-xl mx-auto">
            {/* <div className="navbar bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg fixed top-0 w-full z-50"> */}
            <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
                <img src={logo} alt="Logo" className="bg-yellow-400 rounded-3xl h-16" />
                <span className="ml-2 text-xl md:text-3xl text-white font-bold">Shop Ease</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
                <Link to="/" className="btn btn-ghost bg-orange-500 text-white normal-case text-lg">Home</Link>
                {/* Add other menu items here */}
                {
                    user ? (
                        <button onClick={handleLogOutClick} className="btn btn-ghost bg-orange-500 text-white normal-case text-lg">
                            Log Out
                        </button>
                    ) : (
                        <button onClick={() => navigate("/login")} className="btn btn-ghost normal-case text-lg">
                            Login
                        </button>
                    )
                }
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <button
                    className="btn btn-ghost"
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        </div>

            {/* Mobile Drawer */ }
    {
        isDrawerOpen && (
            <div className="md:hidden bg-base-100 p-4 absolute top-16 left-0 w-full shadow-lg">
                <ul className="menu p-2 shadow bg-base-100 rounded-box w-full">
                    <li><Link to="/" onClick={() => setIsDrawerOpen(false)}>Home</Link></li>
                    {/* Add other menu items here */}
                    {
                        user ? (
                            <li>
                                <button onClick={handleLogOutClick} className="btn btn-ghost normal-case text-lg">
                                    Log Out
                                </button>
                            </li>
                        ) : (
                            <li>
                                <button onClick={() => navigate("/login")} className="btn btn-ghost normal-case text-lg">
                                    Login
                                </button>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
        </div >
    );
};

// export default DaisyNavBar;
export default MuiNavBar;
