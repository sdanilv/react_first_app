// import React from "react";
import {
  AddPostAction,
  UpdatePostTextAreaAction
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => {
  // debugger;
  return {
    textArea: state.ProfilePage.myprofile.textArea,
    posts: state.ProfilePage.myprofile.posts
  };
};

// let mapDispatchToProps = dispatch => {
//   return {
//     areaKeyEvent: textAreaBody => {
//       const action = UpdatePostTextAreaAction(textAreaBody);
//       dispatch(action);
//     },
//     clickSubmitEvent: () => {
//       dispatch(AddPostAction());
//     }
//   };
// };

let PostContainer = connect(
  mapStateToProps,
  {UpdatePostTextAreaAction, AddPostAction}
)(MyPosts);
// debugger;
export default PostContainer;
