// import React from "react";
import {AddPost} from "../../../redux/profileReducer/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {destroy} from "redux-form";

let mapStateToProps = state => {
    return {
        textArea: state.ProfilePage.myOldProfile.textArea,
        posts: state.ProfilePage.myOldProfile.posts
    };
};

let PostContainer = connect(
    mapStateToProps,
    {AddPost, destroy}
)(MyPosts);
export default PostContainer;
