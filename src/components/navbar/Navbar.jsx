import React from "react";
import style from "./Navbar.module.css";
import {connect} from "react-redux";
import {getNavbarLinks} from "../../redux/navbarReducer/navbarSelectors";

const Navbar = ({links}) => {
    return (
        <div className={style.sidebar}>
            <nav>{links}</nav>
        </div>
    );
};

const mapStateToProps = (state) => ({
    links: getNavbarLinks(state)
});
export default connect(mapStateToProps)(Navbar);
