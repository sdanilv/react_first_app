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

const ProfileComponent = props => {
    const {getUserStatus, getUserProfile, profile, myProfile} = props;
    const paramsUserId = props.match.params.userId;
    // const userId = paramsUserId || myId;
const isMyProfile = myProfile? paramsUserId === myProfile.userId : false;

    useEffect(() => {
        if(!isMyProfile)
        getUserProfile(paramsUserId);
        getUserStatus(paramsUserId);
    }, [paramsUserId, getUserProfile, getUserStatus, isMyProfile]);

    if (!paramsUserId) return <Redirect to='/users'/>;
    if (!profile) return <PageLoader/>;
    return (
        <Profile
            changePhoto={props.changePhoto}
            status={props.status}
            profile={isMyProfile?myProfile:profile}
            setMyStatus={props.setMyStatus}
            changeMyProfileInfo={props.changeMyProfileInfo}
            // isMe={myId ? paramsUserId === myId.toString() : false}
        />
    );
};

let mapStateToProps = state => ({
    profile: state.ProfilePage.profile,
    myProfile: state.ProfilePage.myProfile,
    status: state.ProfilePage.status,
    myId: state.Auth.id

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
