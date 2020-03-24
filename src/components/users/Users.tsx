import React, {FC} from "react";
import User from "./user/User";
// import style from "./Users.module.css";
import Pagination from "../../common/Pagination/Pagination";
import SubsButton from "./SubsButton/SubsButton";
import {UsersContainerProps} from "src/components/users/UsersContainer";

const Users:FC<UsersContainerProps> = props => {
    let numbersPage = Math.ceil(props.allUsersCount / props.countUsersInPage);
    const onPageClick = (page:number):void => {
        props.setCurrentPage(page);
        props.getUsers(page, props.countUsersInPage);
    };

    let users = props.users.map(u => (
        <React.Fragment key={u.id}>
            <User
                userId={u.id}
                avaImg={u.photos.small}
                name={u.name}
                description={u.status}
            >
                {props.isSignIn && <SubsButton
                    userId={u.id}
                    followed={u.followed}
                    blockedSubButtons={props.blockedSubButtons}
                    subscribe={props.subscribe}
                    unsubscribe={props.unsubscribe}
                />}
            </User>
        </React.Fragment>
    ));

    return (
        <div>
            <Pagination
                currentPage={props.currentPage}
                numbersPage={numbersPage}
                onPageClick={onPageClick}
                setKit={props.setKit}
                kit={props.kit}
            />
            <div>{users}</div>
        </div>
    );
};
export default Users;
