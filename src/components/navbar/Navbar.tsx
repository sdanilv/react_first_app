import React from "react";
import style from "./Navbar.module.css";
import {connect} from "react-redux";
import {getNavbarLinks} from "src/redux/navbarReducer/navbarSelectors";
import {GlobalState} from "src/redux/storeRedux";

const Navbar:React.FC<{links:Array<JSX.Element>}> = ({links}) => {
    return (
        <div className={style.sidebar}>
            <nav>{links}</nav>
        </div>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    links: getNavbarLinks(state)
});
export default connect(mapStateToProps)(Navbar);
