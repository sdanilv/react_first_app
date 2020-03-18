import React from "react";
import Users from "./Users";
import PageLoader from "src/common/PageLoader/PageLoader";
import {connect} from "react-redux";
import {
    addInBlockButtons,
    getUsers,
    removeFromBlockButtons,
    setCurrentPage,
    setKit,
    subscribe,
    unsubscribe
} from "src/redux/usersReducer/usersReducer";
import {setProfile} from "src/redux/profileReducer/profileReducer";
import {compose} from "redux";
import {getIsSignIn} from "src/redux/authReduce/authSelector";
import {GlobalState} from "src/redux/storeRedux";

type Props = { currentPage: number, countUsersInPage: number, loaded: boolean,
    getUsers: typeof getUsers, setProfile: typeof setProfile }

class UsersContainer extends React.Component <Props> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.countUsersInPage);
        this.props.setProfile(null);
    }

    render() {
        return (<>
            {this.props.loaded ? <PageLoader/> :
                <Users{...this.props} />}
        </>);
    }
}

let mapStateProper = (state: GlobalState) => {
    return {
        isSignIn: getIsSignIn(state),
        users: state.Users.users,
        allUsersCount: state.Users.allUsersCount,
        countUsersInPage: state.Users.countUsersInPage,
        currentPage: state.Users.currentPage,
        blockedSubButtons: state.Users.blockedSubButtons,
        loaded: state.Users.loaded,
        kit: state.Users.kit
    };
};

export default compose<Props>(
    connect(
        mapStateProper,
        {
            subscribe,
            unsubscribe,
            setCurrentPage,
            addInBlockButtons,
            removeFromBlockButtons,
            getUsers,
            setProfile,
            setKit
        }
    )
)(UsersContainer);
