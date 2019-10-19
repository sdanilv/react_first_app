import React from "react";
import { withRouter } from "react-router-dom";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setProfile, getUserProfile } from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/AuthRedirect";


class ProfileComponent extends React.Component {
  componentDidMount() {

    this.props.getUserProfile(this.props.match.params.userId)
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


export default connect(
  mapStateToProps,
  {setProfile, getUserProfile}
)(withRouter(withAuthRedirect(ProfileComponent)));
