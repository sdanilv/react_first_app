import React, {FC} from "react";
import style from "./User.module.css";
import {NavLink} from "react-router-dom";
import Ava from "../../../common/Ava/Ava";

type Props = { description: string, name: string, avaImg: string, userId: number }
const User: FC<Props> = props => {
    return (
        <div className={style.user}>
            <div>
                <NavLink to={`profile/${props.userId}`}>
                    <div className={style.avaImg}>
                        <Ava avaImg={props.avaImg}/>
                        {props.children}
                    </div>
                </NavLink>
            </div>
            <div className={style.description}>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
            </div>
        </div>
    );
};

export default User;
