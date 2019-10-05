import React from "react";
import style from "./myposts.module.css";
import Post from "./Post/post";

let posts =  [{name : "Boris", age : 19, message : "Customer-focused Keyboard Identity", likeCount : 9, ava : "https://s3.amazonaws.com/uifaces/faces/twitter/dhooyenga/128.jpg"},
{name : "Rahsaan", age : 36, message : "Customer-focused Keyboard Identity", likeCount : 2, ava : "https://s3.amazonaws.com/uifaces/faces/twitter/sprayaga/128.jpg"},
{name : "Christopher", age : 55, message : "Customer-focused Keyboard Identity", likeCount : 13, ava : "https://s3.amazonaws.com/uifaces/faces/twitter/ratbus/128.jpg"}];

let postElements  = posts.map(p=> <Post name={p.name} age={p.age} message={p.message} likeCount={p.likeCount} ava={p.ava} />);

const Myposts = () => {
  return (
    <div className={style.posts}>
      <div className={style.textarea}>
        <textarea></textarea>
      
     
        <button>Submit</button>
      
      </div>
      <div>
      {postElements}
      </div>
    </div>
  );
};
export default Myposts;
