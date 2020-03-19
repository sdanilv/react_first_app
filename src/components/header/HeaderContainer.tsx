import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {auth, getMe, logout} from "redux/authReduce/authReduce";
import {getMySmallAvatar} from "redux/profileReducer/profileSelector"
import {getIsSignIn, getMyId, getMyLogin} from "redux/authReduce/authSelector";
import {GlobalState} from "src/redux/storeRedux";
import { compose } from "redux";


export type HeaderProps = {
    isSignIn: boolean, login: string, avaImg: string, myId: number,
    auth: typeof auth, getMe: typeof getMe, logout: typeof logout
}

class HeaderContainer extends React.Component<HeaderProps> {
    render() {
        return <Header {...this.props} />;
    }
}

let mapStateToProps = (state: GlobalState) => ({
    isSignIn: getIsSignIn(state),
    login: getMyLogin(state),
    avaImg: getMySmallAvatar(state),
    myId: getMyId(state)
});

export default compose<HeaderProps>( connect(
    mapStateToProps,
    {auth, getMe, logout}
))(HeaderContainer);
