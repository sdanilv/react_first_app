import React from "react";
import Profile from "./Profile";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getUserProfile, setMyStatus } from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { withPageLoader } from "../../hoc/PageLoaderRedirect";
import { loading } from "../../redux/commonReducer";
import { compose } from "redux";

class ProfileComponent extends React.Component {
  componentDidMount() {
    // debugger;
    this.props.getUserProfile(this.props.match.params.userId || 4923);
    this.props.getUserStatus(this.props.match.params.userId || 4923);
  }
  render() {
    return (
      <Profile
        status={this.props.status}
        profile={this.props.profile}
        myprofile={this.props.myprofile}
        setMyStatus={this.props.setMyStatus}
      />
    );
  }
}

let mapStateToProps = state => ({
  profile: state.ProfilePage.profile,
  myprofile: state.ProfilePage.myprofile,
  status: state.ProfilePage.status
});

export default compose(
  withPageLoader,
  withAuthRedirect,
  withRouter,
  connect(
    mapStateToProps,
    { getUserProfile, setMyStatus, loading }
  )
)(ProfileComponent);
