import React from "react";
import * as axios from "axios";
import { withRouter } from "react-router-dom";
import Profile from "./Profile";
import { connect } from "react-redux";
// import profileReducer from "../../redux/profileReducer";
import { setProfile } from "../../redux/profileReducer";

class ProfileComponent extends React.Component {
  componentDidMount() {
    // debugger;
    axios
      .get(
        "https://social-network.samuraijs.com/api/1.0/profile/" +
          this.props.match.params.userId
      )
      .then(result => {
        this.props.setProfile(result.data);
        // debugger;
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

let profileWithRouter = withRouter(ProfileComponent);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(profileWithRouter);

// export default withRouter(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(ProfileComponent)
// );
