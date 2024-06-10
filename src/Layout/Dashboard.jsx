import { BiFoodMenu, BiSolidFoodMenu } from "react-icons/bi";
import { FaAd, FaBook, FaCalendar, FaEdit, FaEnvelope, FaFileContract, FaHome, FaList, FaPaypal, FaPlug, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FaClover, FaHouse } from "react-icons/fa6";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import useCart from "../hooks/useCart";
import { FcContacts } from "react-icons/fc";
import useAdmin from "../hooks/useAdmin";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../Pages/providers/AuthProvider";
import { TbLogout } from "react-icons/tb";
import { RiAdminFill } from "react-icons/ri";

const Dashboard = () => {
    // const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const [isAdmin] = useAdmin();
    // const isAdmin = true;
    // console.log(isAdmin);

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOutClick = () => {
        logOut()
            .then(() => {
                navigate('/');
            })
            .catch(error => console.log(error))
    };

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-blue-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <RiAdminFill />
                                    Admin Home
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items
                                </NavLink>
                            </li> */}
                            {/* <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList />
                                    Manage Items
                                </NavLink>
                            </li> */}
                            {/* <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook />
                                    Manage Bookings
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers />
                                    Manage Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/approvedPremium">
                                    <FaUsers />
                                    Approved Premium
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/approvedContactRequest">
                                    <FaUsers />
                                    Approved Contact Request
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/successStory">
                                    <FaUsers />
                                    Success Story
                                </NavLink>
                            </li>
                            <li>
                                <Typography
                                    className="text-center mt-3"
                                    variant="body1"
                                    component="div"
                                    onClick={handleLogOutClick}
                                    style={{ cursor: "pointer", color: "inherit" }}
                                >
                                    <span className="flex items-center gap-2">
                                        <TbLogout />
                                        Log Out
                                    </span>
                                </Typography>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaShoppingCart></FaShoppingCart>
                                        User Home
                                    </NavLink>
                                </li>
                                {/* <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaHome></FaHome>
                                        My Cart ({cart.length})
                                    </NavLink>
                                </li> */}
                                {/* <li>
                                    <NavLink to="/dashboard/history">
                                        <FaCalendar></FaCalendar>
                                        Not History
                                    </NavLink>
                                </li> */}
                                
                                <li>
                                    <NavLink to="/dashboard/editBiodata">
                                        <FaEdit />
                                        Edit Biodata
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/viewBiodata">
                                        <FaList />
                                        View Biodata
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaPaypal></FaPaypal>
                                        Payment History
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myContactRequest">
                                        <FaFileContract />
                                        My Contact Request
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/favouriteBiodata">
                                        <FaClover />
                                        Favourite Biodata
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/gotMarried">
                                        <FaClover />
                                        Got Married
                                    </NavLink>
                                </li>
                                <li>
                                    <Typography
                                        className="text-center mt-3"
                                        variant="body1"
                                        component="div"
                                        onClick={handleLogOutClick}
                                        style={{ cursor: "pointer", color: "inherit" }}
                                    >
                                        <span className="flex items-center gap-2">
                                            <TbLogout />
                                            Log Out
                                        </span>
                                    </Typography>
                                </li>
                            </>
                    }

                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHouse></FaHouse>
                            Home
                        </NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/order/salad">
                            <BiSolidFoodMenu />
                            All Biodata
                        </NavLink>
                    </li> */}
                    <li>
                        {/* <NavLink to="/order/contactUs"> */}
                        <NavLink to="/contactUs">
                            <FaEnvelope />
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;