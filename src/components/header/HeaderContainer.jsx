import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { auth } from "../../redux/authReduce";
import { AuthApi } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    AuthApi.signIn().then(response => {
      // debugger;
      if (response.data.resultCode === 0) {
        this.props.auth(response.data.data);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = state => ({
  isSignIn: state.Auth.isSignIn
});

let mapDispatchToProps = dispatch => ({
  auth: data => dispatch(auth(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
