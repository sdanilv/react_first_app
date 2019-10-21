import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

let links = [
  {
    id: 1,
    adress: "/profile",
    img:
      "https://cdn2.iconfinder.com/data/icons/business-management-52/96/Artboard_20-512.png",
    text: "Profile"
  },
  {
    id: 2,
    adress: "/dialogs",
    img:
      "https://media.istockphoto.com/vectors/cartoon-dialogs-cloud-line-icon-vector-id1094490216",
    text: "Message"
  },
  {
    id: 3,
    adress: "/music",
    img:
      "https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519586-083_Music-512.png",
    text: "Music"
  },
  {
    id: 4,
    adress: "/news",
    img:
      "https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/news-256.png",
    text: "News"
  },
  {
    id: 5,
    adress: "/setting",
    img:
      "https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-75-256.png",
    text: "Settings"
  },
  {
    id: 6,
    adress: "/users",
    img: "https://static.thenounproject.com/png/2526006-84.png",
    text: "Search"
  }
];
let linksMap = links.map((l, index) => (
  <div key={index}>
    <NavLink to={l.adress} activeClassName={style.active}>
      <img src={l.img} alt='navbarIcon' />
      &nbsp;{l.text}
    </NavLink>
  </div>
));

const Navbar = () => {
  return (
    <div className={style.sidebar}>
      <nav>{linksMap}</nav>
    </div>
  );
};

export default Navbar;