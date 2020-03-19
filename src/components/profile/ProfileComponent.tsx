import React, {useEffect} from "react";
import Profile from "./Profile";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {
    changeMyProfileInfo,
    changePhoto,
    getUserProfile,
    getUserStatus,
    ProfileType,
    setMyStatus,
} from "src/redux/profileReducer/profileReducer";
import {loading} from "src/redux/commonReducer/commonReducer";
import {compose} from "redux";
import PageLoader from "src/common/PageLoader/PageLoader";
import {getMyId} from "redux/authReduce/authSelector.ts";
import {getProfile, getProfileStatus} from "redux/profileReducer/profileSelector.ts";
import {GlobalState} from "src/redux/storeRedux";

//TODO change profile to my profile if paramsUserId null

type MatchProps = { userId: string | undefined }
type ComponentProps = {
    getUserStatus: typeof getUserStatus, getUserProfile: typeof getUserProfile,
    profile: ProfileType, myId: string
}
type ProfileProps = {
    changePhoto: typeof changePhoto, status: string,
    setMyStatus: typeof setMyStatus, changeMyProfileInfo: typeof changeMyProfileInfo
}
type Props = ComponentProps & ProfileProps & RouteComponentProps<MatchProps>
const ProfileComponent: React.FC<Props> = (props) => {
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

export default compose<Props>(
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
