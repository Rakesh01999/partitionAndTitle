import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import MuiNavBar from "../Pages/Shared/NavBar/MuiNavBar";
import MyFooter from "../Pages/Shared/Footer/MyFooter";

const Main = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register') ;
    return (
        <div>
            {/* {noHeaderFooter || <NavBar></NavBar>} */}
            {noHeaderFooter || <MuiNavBar></MuiNavBar>}
            {/* <MuiNavBar></MuiNavBar> */}
            <Outlet></Outlet>
            {/* {noHeaderFooter || <Footer></Footer>} */}
            {noHeaderFooter || <MyFooter></MyFooter>}
            {/* <MyFooter></MyFooter> */}
        </div>
    );
};

export default Main;