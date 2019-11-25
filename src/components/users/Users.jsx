import React from "react";
import User from "./user/User";
// import style from "./Users.module.css";
import Pagination from "../../common/Pagination/Pagination";
import SubsButton from "./SubsButton/SubsButton";

const Users = props => {
    let numbersPage = Math.ceil(props.allUsersCount / props.countUsersInPage);
    const onPageClick = page => {
        props.setCurrentPage(page);
        props.getUsers(page, props.countUsersInPage);
    };

    let users = props.users.map(u => (
        <React.Fragment key={u.id}>
            <User
                userId={u.id}
                avaImg={u.photos.small}
                name={u.name}
                status={u.status}
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
