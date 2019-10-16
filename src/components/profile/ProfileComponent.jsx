import React from "react";
import * as axios from "axios";

import Profile from "./Profile";
import { connect } from "react-redux";
// import profileReducer from "../../redux/profileReducer";
import { setProfile } from "../../redux/profileReducer";

class ProfileComponent extends React.Component {
  componentDidMount() {
    // debugger;
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/2")
      .then(result => {
        // debugger;
        this.props.setProfile(result.data);
      });
  }
  render() {
    return (
      <Profile profile={this.props.profile} myprofile={this.props.myprofile} />
    );
  }
}

let mapStateToProps = state => ({
  profile: state.ProfilePage.profile,
  myprofile: state.ProfilePage.myprofile
});

let mapDispatchToProps = dispatch => ({
  setProfile: profile => {
    dispatch(setProfile(profile));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);
