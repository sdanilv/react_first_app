import React from "react";
import style from "./Navbar.module.css";
import {useSelector} from "react-redux";
import {getNavbarLinks} from "src/redux/navbarReducer/navbarSelectors";


const Navbar:React.FC = () => {
    const links =  useSelector(getNavbarLinks);
    return (
        <div className={style.sidebar}>
            <nav>{links}</nav>
        </div>
    );
};

export default Navbar;