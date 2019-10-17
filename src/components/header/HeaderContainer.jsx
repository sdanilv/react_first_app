import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import Axios from "axios";
import { auth } from "../../redux/authReduce";

class HeaderContainer extends React.Component {
  componentDidMount() {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    }).then(response => {
      debugger;
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
