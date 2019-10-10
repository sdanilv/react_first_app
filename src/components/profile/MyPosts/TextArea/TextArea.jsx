import React from "react";
import style from "./textarea.module.css";
import {
  AddPostAction,
  UpdatePostTextAreaAction
} from "../../../../redux/states";

const TextArea = props => {
  let areaRef = React.createRef();
  let clickEvent = () => {
    // debugger;
    props.dispatcher(AddPostAction());
  };

  let areaKeyEvent = e => {
    // debugger;
    props.dispatcher(UpdatePostTextAreaAction(areaRef.current.value));
  };

  return (
    <div className={style.textarea}>
      {/* <textarea value={props.textArea} ref={areaRef} onKeyDown={areaKeyEvent}/> */}
      <textarea value={props.textArea} ref={areaRef} onChange={areaKeyEvent} />
      <button onClick={clickEvent}>Submit</button>
    </div>
  );
};

export default TextArea;
