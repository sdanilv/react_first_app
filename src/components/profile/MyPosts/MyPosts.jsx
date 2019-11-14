import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import TextForm from "../../../common/TextForm/TextForm";

const MyPosts = props => {
  let postElements = props.posts
    .map((p, index) => (
      <Post
        key={index}
        name={p.name}
        age={p.age}
        message={p.message}
        likeCount={p.likeCount}
        ava={p.ava}
      />
    ))
    .reverse();
  let onSubmitPost = formData => {
    let id = props.posts.length;
    props.AddPost(id, formData.post);
    props.destroy("post");
  };
  return (
    <div className={style.posts}>
      <TextForm  form={"post"} onSubmit={onSubmitPost} />
      <div>{postElements}</div>
    </div>
  );
};
export default MyPosts;
