import React  from "react"
import style from "./header.module.css"

const Header = () =>{
    return(
<div className={style.header}>
    <img src = 'https://s1.logaster.com/static/v3/img/products/logo.png' alt='abc' />
    <div className={style.topic}>Smile:</div>
    <button>SigIn</button>
    <button>Register</button>
</div>
    );
}

export default Header;