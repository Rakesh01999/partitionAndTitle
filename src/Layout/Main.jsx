import { Outlet, useLocation } from "react-router-dom";
import MuiNavBar from "../Pages/Shared/NavBar/MuiNavBar";
import MyFooter from "../Pages/Shared/Footer/MyFooter";

const Main = () => {
    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            {/* {noHeaderFooter || <MuiNavBar></MuiNavBar>} */}
            <Outlet></Outlet>
            {/* {noHeaderFooter || <MyFooter></MyFooter>} */}
        </div>
    );
};

export default Main;
