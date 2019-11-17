import React, {useEffect} from "react";
import Profile from "./Profile";
import {withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {
    getUserProfile, setMyStatus, getUserStatus
} from "../../redux/profileReducer/profileReducer";
import {loading} from "../../redux/commonReducer/commonReducer";
import {compose} from "redux";
import PageLoader from "../../common/PageLoader/PageLoader";


const ProfileComponent = props => {
    const {getUserStatus, getUserProfile, profile, myId} = props;
    const paramsUserId = props.match.params.userId;
    const userId = paramsUserId || myId;

    useEffect(() => {
        getUserStatus(userId);
        getUserProfile(userId);
    }, [userId, getUserProfile, getUserStatus]);

    if (!userId) return <Redirect to='/users'/>;
    if (!profile) return <PageLoader/>;
    return (
        <Profile
            status={props.status}
            profile={profile}
            setMyStatus={props.setMyStatus}
        />
    );
};

let mapStateToProps = state => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    myId: state.Auth.id
});

export default compose(
    connect(
        mapStateToProps,
        {getUserProfile, setMyStatus, getUserStatus, loading}
    ),
    // withPageLoader,
    // withAuthRedirect,
    withRouter
)(ProfileComponent);
