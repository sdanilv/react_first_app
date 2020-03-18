import React, {useEffect} from "react";
import Profile from "./Profile";
import {withRouter, Redirect, RouteComponentProps} from "react-router-dom";
import {connect} from "react-redux";
import {
    getUserProfile, setMyStatus, getUserStatus, changePhoto, changeMyProfileInfo, ProfileType
} from "src/redux/profileReducer/profileReducer";
import {loading} from "src/redux/commonReducer/commonReducer";
import {compose} from "redux";
import PageLoader from "src/common/PageLoader/PageLoader";
import {getMyId} from "src/redux/authReduce/authSelector";
import {getProfile, getProfileStatus} from "src/redux/profileReducer/profileSelector";
import {GlobalState} from "src/redux/storeRedux";

//TODO change profile to my profile if paramsUserId null

type MatchProps = { userId: string | undefined }
type Props = { getUserStatus: typeof getUserStatus, getUserProfile: typeof getUserProfile,
    profile: ProfileType, myId: string }
type ProfileProps = { changePhoto: typeof changePhoto, status: string,
    setMyStatus: typeof setMyStatus, changeMyProfileInfo: typeof changeMyProfileInfo }
const ProfileComponent = (props: Props &ProfileProps& RouteComponentProps<MatchProps>) => {
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

let mapStateToProps = (state: GlobalState) => ({
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
