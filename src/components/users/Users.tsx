import React, { FC, Fragment, useEffect } from "react";
import User from "./user/User";
// import style from "./Users.module.css";
import Pagination from "../../common/Pagination/Pagination";
import SubsButton from "./SubsButton/SubsButton";

import { getAllUserParams } from "redux/usersReducer/usersSelector";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  setCurrentPage,
  setKit,
} from "redux/usersReducer/usersReducer";
import { setProfile } from "redux/profileReducer/profileReducer";
import { getIsSignIn } from "redux/authReduce/authSelector";
import PageLoader from "src/common/PageLoader/PageLoader";

const Users: FC = () => {
  const dispatch = useDispatch();
  const {
    users,
    allUsersCount,
    countUsersInPage,
    currentPage,

    loaded,
    kit,
  } = useSelector(getAllUserParams);
  const isSignIn = useSelector(getIsSignIn);
  const numbersPage = Math.ceil(allUsersCount / countUsersInPage);

  const onPageClick = (page: number): void => {
    dispatch(setCurrentPage(page));
    getUsers(page, countUsersInPage);
  };
  useEffect(() => {
    dispatch(getUsers(currentPage, countUsersInPage));
    dispatch(setProfile(null));
  }, []);
  const usersMap = users.map((u) => (
    <Fragment key={u.id}>
      <User
        userId={u.id}
        avaImg={u.photos.small}
        name={u.name}
        description={u.status}
      >
        {isSignIn && <SubsButton userId={u.id} followed={u.followed} />}
      </User>
    </Fragment>
  ));
  if (loaded) return <PageLoader />;
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        numbersPage={numbersPage}
        onPageClick={() => onPageClick}
        setKit={(kit) => dispatch(setKit(kit))}
        kit={kit}
      />
      <div>{usersMap}</div>
    </div>
  );
};
export default Users;
