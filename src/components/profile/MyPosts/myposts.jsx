import React from "react";
import style from "./myposts.module.css";
import Post from "./Post/post";

const Myposts = props => {
  let textarea = React.createRef();
  let submit = () => {
    let text = textarea.current.value;
    alert(text);
  };

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
      <div className={style.textarea}>
        <textarea ref={textarea}></textarea>

        <button onClick={submit}>Submit</button>
      </div>
      <div>{postElements}</div>
    </div>
  );
};
export default Myposts;
