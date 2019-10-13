import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/post";
import TextArea from "./TextArea/TextArea";

const Myposts = props => {
  let postElements = props.posts.map(p => (
    <Post
      name={p.name}
      age={p.age}
      message={p.message}
      likeCount={p.likeCount}
      ava={p.ava}
    />
  ));

  return (
    <div className={style.posts}>
      <TextArea  textArea={props.textArea}  areaKeyEvent={props.areaKeyEvent} clickSubmitEvent={props.clickSubmitEvent}/>
      <div>{postElements}</div>
    </div>
  );
};
export default Myposts;
