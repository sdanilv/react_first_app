import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {auth, getMe, logout} from "redux/authReduce/authReduce";
import {getMySmallAvatar} from "redux/profileReducer/profileSelector"
import {getMyId, getMyLogin, getIsSignIn} from "redux/authReduce/authSelector";
import {GlobalState} from "src/redux/storeRedux";
import {compose} from "redux";

export type HeaderContainerProps = ReturnMapStateToProps & MapDispatchToProps


class HeaderContainer extends React.Component<HeaderContainerProps> {
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state: GlobalState) => ({
    isSignIn: getIsSignIn(state),
    login: getMyLogin(state),
    avaImg: getMySmallAvatar(state),
    myId: getMyId(state)
});
const mapDispatchToProps = {auth, getMe, logout};
type ReturnMapStateToProps = ReturnType<typeof mapStateToProps>
type MapDispatchToProps = typeof mapDispatchToProps


export default compose<HeaderContainerProps>(connect(
    mapStateToProps,
    mapDispatchToProps
))(HeaderContainer);
