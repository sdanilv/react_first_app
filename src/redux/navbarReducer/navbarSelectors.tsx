import style from "../../components/navbar/Navbar.module.css";
import React from "react";
import  {NavLink} from "react-router-dom"
import {getMyId} from "../authReduce/authSelector";
import {GlobalState} from "redux/storeRedux";

export const getNavbarLinks = (state:GlobalState): Array<JSX.Element> => {
    const myId = getMyId(state);
    const profileLink  = <div key={47}> <NavLink
        to={`/profile/${myId || ""}`}
        activeClassName={style.active}>
        <img
            src='https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png'
            alt='navbarIcon'
        />
        &nbsp;Profile
    </NavLink></div>;
    return  [profileLink, ...state.Navbar.links.map((l, index) => (
        <div key={index}>
            <NavLink to={l.adress} activeClassName={style.active}>
                <img src={l.img} alt='navbarIcon'/>
                &nbsp;{l.text}
            </NavLink>
        </div>
    ))];

    };