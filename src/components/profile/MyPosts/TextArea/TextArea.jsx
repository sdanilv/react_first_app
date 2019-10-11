import React from "react";
import style from "./textarea.module.css";

const TextArea = props => {
  let clickEvent = () => {
    // debugger;
    props.clickEvent();
  };

  let areaKeyEvent = e => {
    // debugger;
    let textAreaBody = e.target.value;
    props.areaKeyEvent(textAreaBody);
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
