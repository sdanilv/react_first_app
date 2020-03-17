import React, {useEffect} from "react";
import Profile from "./Profile";
import {withRouter, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {
    getUserProfile, setMyStatus, getUserStatus, changePhoto, changeMyProfileInfo
} from "../../redux/profileReducer/profileReducer";
import {loading} from "../../redux/commonReducer/commonReducer";
import {compose} from "redux";
import PageLoader from "../../common/PageLoader/PageLoader";
import {getMyId} from "../../redux/authReduce/authSelector";
import {getProfile, getProfileStatus} from "../../redux/profileReducer/profileSelector";

//TODO change profile to my profile if paramsUserId null
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
            changePhoto={props.changePhoto}
            status={props.status}
            profile={profile}
            setMyStatus={props.setMyStatus}
            changeMyProfileInfo={props.changeMyProfileInfo}
            isMe={myId ? paramsUserId === myId.toString() : false}
        />
    );
};

let mapStateToProps = state => ({
    profile: getProfile(state),
    status: getProfileStatus(state),
    myId: getMyId(state)

});

export default compose(
    connect(
        mapStateToProps,
        {
            getUserProfile, setMyStatus,
            getUserStatus, loading,
            changePhoto, changeMyProfileInfo
        }
    ),
    withRouter
)(ProfileComponent);
