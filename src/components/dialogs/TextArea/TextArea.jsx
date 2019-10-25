import React from "react";
import style from "./TextArea.module.css";
import { reduxForm, Field } from "redux-form";
const TextArea = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.textarea}>
        {/* <textarea value={props.textArea} ref={areaRef} onKeyDown={areaKeyEvent}/> */}
        {/* <textarea value={props.textArea} onChange={areaKeyEvent} /> */}
        <Field component='textarea' name='message' />
        <button>Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "dialogs" })(TextArea);
