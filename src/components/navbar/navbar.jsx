import React from "react";
import style from "./navbar.module.css";
console.log(style);
const Navbar = () => {
    return (
        <div className={style.sidebar}>
            <nav>
                <div><a>Profile</a></div>
                <div><a>Message</a></div>
                <div><a>Music</a></div>
                <div><a>News</a></div>
                <div><a>Setting</a></div>
            </nav>
        </div>
    );
}

export default Navbar;