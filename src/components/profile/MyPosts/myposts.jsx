import React from "react";
import style from "./myposts.module.css";
import Post from "./Post/post";
import TextArea from "./TextArea/TextArea";

const Myposts = props => {
  // debugger;
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
      <TextArea dispatcher={props.dispatcher} textArea={props.textArea} />
      <div>{postElements}</div>
    </div>
  );
};
export default Myposts;
