import React, {FC} from "react";
import {connect} from "react-redux";

import PageLoader from "../common/PageLoader/PageLoader";
import {GlobalState} from "redux/storeRedux";

const mapStateToProps = (state:GlobalState) => ({
    loaded: false
});

export const withPageLoader = (Component:FC) => {
    const AuthRedirect:FC<{loaded:boolean}> = props => {
        if (props.loaded) return <PageLoader/>;
        return <Component {...props} />;
    };

    return connect(mapStateToProps)(AuthRedirect);
};
