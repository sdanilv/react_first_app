import React, {FC} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {GlobalState} from "redux/storeRedux";
// import Auth from "../components/auth/Auth";

const mapStateToProps = (state:GlobalState) => ({
    isSignIn: state.Auth.isSignIn
});

export const withAuthRedirect = (Component:FC) => {
    class AuthRedirect extends React.Component<{isSignIn:boolean}> {
        render() {
            if (!this.props.isSignIn) {
                //
                console.log(!this.props.isSignIn);
                return <Redirect to='/login'/>;
            }
            return <Component {...this.props} />;
        }
    }

    return connect(mapStateToProps)(AuthRedirect);
};
