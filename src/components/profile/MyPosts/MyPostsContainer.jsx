import React from "react";
import {
  AddPostAction,
  UpdatePostTextAreaAction
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    textArea: state.ProfilePage.textArea,
    posts: state.ProfilePage.posts
  };
};

let mapDispatchToProps = dispatch => {
  return {
    areaKeyEvent: textAreaBody => {
      const action = UpdatePostTextAreaAction(textAreaBody);
      dispatch(action);
    },
    clickSubmitEvent: () => {
      dispatch(AddPostAction());
    }
  };
};

let PostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
// debugger;
export default PostContainer;
