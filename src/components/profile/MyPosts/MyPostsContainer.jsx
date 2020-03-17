import { AddPost } from "../../../redux/profileReducer/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { destroy } from "redux-form";
import {getProfilePosts} from "../../../redux/profileReducer/profileSelector";

let mapStateToProps = state => {
  return {
    posts: getProfilePosts(state)
  };
};

let PostContainer = connect(
  mapStateToProps,
  { AddPost, destroy }
)(MyPosts);
export default PostContainer;
