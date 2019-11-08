import React from "react";
import Users from "./Users";
import PageLoader from "../../common/PageLoader/PageLoader";
import {connect} from "react-redux";
import {
    subscribe,
    unsubscribe,
    setCurrentPage,
    addInBlockButtons,
    getUsers,
    removeFromBlockButtons, setKit
} from "../../redux/usersReducer/usersReducer";
import {setProfile} from "../../redux/profileReducer/profileReducer";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.countUsersInPage);
        this.props.setProfile(null);
    }


    render() {
        return (
            <>
                {this.props.loaded ? (
                    <PageLoader/>
                ) : (
                    <Users
                        {...this.props}
                        // allUsersCount={this.props.allUsersCount}
                        // countUsersInPage={this.props.countUsersInPage}
                        // currentPage={this.props.currentPage}
                        // setCurrentPage={this.props.setCurrentPage}
                        // users={this.props.users}
                        // subs={this.props.subscribe}
                        // unsubs={this.props.unsubscribe}
                        // blockedSubButtons={this.props.blockedSubButtons}
                    />
                )}
            </>
        );
    }
}

let mapStateProper = state => {
    return {
        signIn: state.Auth.isSignIn,
        users: state.Users.users,
        allUsersCount: state.Users.allUsersCount,
        countUsersInPage: state.Users.countUsersInPage,
        currentPage: state.Users.currentPage,
        blockedSubButtons: state.Users.blockedSubButtons,
        loaded: state.Users.loaded,
        kit: state.Users.kit
    };
};

export default compose(
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
