import style from "../../components/navbar/Navbar.module.css";
import React from "react";
import  {NavLink} from "react-router-dom"
import {getMyId} from "../authReduce/authSelector";

export const getNavbarLinks = state => {
    const myId = getMyId(state);
    const profileLink = <div> <NavLink
        to={`/profile/${myId || ""}`}
        activeClassName={style.active}>
        <img
            src='https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png'
            alt='navbarIcon'
        />
        &nbsp;Profile
    </NavLink></div>;
    let links = [profileLink];
     links.push(state.Navbar.links.map((l, index) => (
        <div key={index}>
            <NavLink to={l.adress} activeClassName={style.active}>
                <img src={l.img} alt='navbarIcon'/>
                &nbsp;{l.text}
            </NavLink>
        </div>
    )));
    return links;
    };