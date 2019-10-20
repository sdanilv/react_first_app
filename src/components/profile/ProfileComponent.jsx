import React from "react";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setProfile, getUserProfile } from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { withPageLoader } from "../../hoc/PageLoaderRedirect";
import { loading } from "../../redux/commonReducer";
import { compose } from "redux";

class ProfileComponent extends React.Component {
  componentDidMount() {
    // debugger;
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


export default compose(withPageLoader,
  withAuthRedirect,
  withRouter,
  connect(
    mapStateToProps,
    { setProfile, getUserProfile, loading })
)(ProfileComponent);
