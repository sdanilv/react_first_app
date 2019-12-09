import React from "react";
import style from "./User.module.css";
import {NavLink} from "react-router-dom";
import Ava from "../../../common/Ava/Ava";

const User = props => {
    return (
        <div className={style.user}>
            <div>
                <NavLink to={`profile/${props.userId}`}>
                    <div className={style.avaImg}>
                        <Ava avaImg={props.avaImg}/>
                    </div>
                </NavLink>
            </div>
            {props.children}
            <div>{props.home}</div>
            <div>{props.name}</div>
            <div>{props.description}</div>
        </div>
    );
};

export default User;
