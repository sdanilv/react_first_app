import React from "react";
import style from "./TextArea.module.css";

const TextArea = props => {
  let clickEvent = () => {
    props.clickEvent();
  };

  let areaKeyEvent = e => {
    let textAreaBody = e.target.value;
    // debugger;
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
