import React from "react";
import style from "./TextArea.module.css";
import { Field } from "redux-form";

const TextArea = props => {
  let clickEvent = () => {
    // debugger;
    props.clickSubmitEvent();
  };

  let areaKeyEvent = e => {
    // debugger;
    let textAreaBody = e.target.value;
    props.areaKeyEvent(textAreaBody);
  };

  return (
    <div className={style.textarea}>
      <form onSubmit={props.ha}>
        <textarea value={props.textArea} onChange={areaKeyEvent} />
        <button onClick={clickEvent}>Submit</button>
      </form>
    </div>
  );
};

export default TextArea;
