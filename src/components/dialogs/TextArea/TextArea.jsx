import React from "react";
import style from "./textarea.module.css";
import { AddChatAction, UpdateChatTextAreaAction } from "../../../redux/dialogsReducer";

const TextArea = props => {
  // debugger;
  // let areaRef = React.createRef();
  let clickEvent = () => {
    // debugger;
    props.dispatch(AddChatAction());
  };

  let areaKeyEvent = e => {
    let textAreaBody= e.target.value;
    // debugger;
    props.dispatch(UpdateChatTextAreaAction(textAreaBody));
  };

  return (
    <div className={style.textarea}>
      {/* <textarea value={props.textArea} ref={areaRef} onKeyDown={areaKeyEvent}/> */}
      <textarea value={props.textArea} onChange={areaKeyEvent} />
      <button onClick={clickEvent}>Submit</button>
    </div>
  );
};

export default TextArea;
