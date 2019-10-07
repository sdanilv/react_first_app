import React from "react";
import style from "./myposts.module.css";
import Post from "./Post/post";
// import { addLetter } from "../../../redux/state";


const Myposts = props => {
  let areaRef = React.createRef();
  let clickEvent = () => {
    // debugger;
    props.addPost(areaRef.current.value);
  };

  let areaKeyEvent=(e)=>{
    // debugger;
    props.addLetter(areaRef.current.value)
   
  }


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
        {/* <textarea value={props.textArea} ref={areaRef} onKeyDown={areaKeyEvent}/> */}
        <textarea value={props.textArea} ref={areaRef} onChange={areaKeyEvent} />
        <button onClick={clickEvent}>Submit</button>
      </div>
      <div>{postElements}</div>
    </div>
  );
};
export default Myposts;
