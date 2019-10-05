import React from "react";
import style from "./navbar.module.css";
import {NavLink} from "react-router-dom";

let links = [{adress : "/profile", img : "https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png", text : "Profile"},
{adress : "/dialogs", img : "https://media.istockphoto.com/vectors/cartoon-dialogs-cloud-line-icon-vector-id1094490216", text : "Message"},
{adress : "/music", img : "https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519586-083_Music-512.png", text : "Music"},
{adress : "/news", img : "https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/news-256.png", text : "News"},
{adress : "/setting", img : "https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-75-256.png", text : "Settings"}


];
let linksMap = links.map(l=><div><NavLink to={l.adress} activeClassName={style.active}><img src={l.img}/>&nbsp;{l.text}</NavLink></div>);

const Navbar = () => {
    return (
        <div className={style.sidebar}>
            <nav>
                {linksMap}
                {/* <div><NavLink to="/dialogs" activeClassName={style.active}>Message</NavLink></div>
                <div><NavLink to="/music" activeClassName={style.active}>Music</NavLink></div>
                <div><NavLink to="/news" activeClassName={style.active}>News</NavLink></div>
                <div><NavLink to="/setting" activeClassName={style.active}>Setting</NavLink></div> */}
            </nav>
        </div>
    );
}

export default Navbar;