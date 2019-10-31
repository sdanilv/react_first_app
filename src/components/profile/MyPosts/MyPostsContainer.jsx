// import React from "react";
import {
  AddPost,
  UpdatePostTextAreaAction
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { destroy } from "redux-form";

let mapStateToProps = state => {
  return {
    textArea: state.ProfilePage.myprofile.textArea,
    posts: state.ProfilePage.myprofile.posts
  };
};

let PostContainer = connect(
  mapStateToProps,
  { UpdatePostTextAreaAction, AddPost, destroy }
)(MyPosts);
export default PostContainer;
