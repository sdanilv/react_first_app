import React, {FC} from "react";
import style from "./Header.module.css";
import Ava from "../../common/Ava/Ava";
import {NavLink} from "react-router-dom";
import {HeaderProps} from "src/components/header/HeaderContainer";


const Header: FC<HeaderProps> = ({logout, isSignIn, myId, login, avaImg}) => {
    let onLogout = () => {
        logout();
    };
    return (
        <div className={style.header}>
            <img
                src='https://s1.logaster.com/static/v3/img/products/logo.png'
                alt='abc'
            />
            <div className={style.topic}>Smile:</div>
            {!isSignIn ? (
                <>
                    <NavLink to='/login'>
                        <button> SigIn</button>
                    </NavLink>
                    {/* <button>Register</button> */}
                </>
            ) : (
                <>
                    <NavLink to={`/profile/${myId}`}>
                        <div className={style.ava}>
                            <Ava avaImg={avaImg}/>
                        </div>
                    </NavLink>
                    <div className={style.login}>{login}</div>
                    <NavLink to='/login'>
                        <button onClick={onLogout}>Logout</button>
                    </NavLink>
                </>
            )}
        </div>
    );
};

export default Header;
