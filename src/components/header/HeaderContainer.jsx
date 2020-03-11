import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {auth, getMe, logout} from "../../redux/authReduce/authReduce.ts";
import {getMySmallAvatar} from "../../redux/profileReducer/profileSelector"
import {getMyId, getMyLogin, isSignIn} from "../../redux/authReduce/authSelector";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />;
    }
}

let mapStateToProps = state => ({
    isSignIn: isSignIn(state),
    login: getMyLogin(state),
    avaImg: getMySmallAvatar(state),
    myId: getMyId(state)
});

export default connect(
    mapStateToProps,
    {auth, getMe, logout}
)(HeaderContainer);
