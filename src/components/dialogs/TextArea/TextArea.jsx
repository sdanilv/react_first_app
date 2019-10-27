import React from "react";
import style from "./TextArea.module.css";
import { reduxForm, Field } from "redux-form";
const TextArea = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.textarea}>
        {/* <textarea value={props.textArea} ref={areaRef} onKeyDown={areaKeyEvent}/> */}
        {/* <textarea value={props.textArea} onChange={areaKeyEvent} /> */}
        <Field
          component={MyTextAreaComponent}
          name='message'
          validate={[isEmpty, maxSize15]}
        />
        <button>Submit</button>
      </div>
    </form>
  );
};

const MyTextAreaComponent = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  return (
    <>
      <textarea {...input} placeholder={label} type={type} />

      {touched && <label className={style.error}>error</label>}
    </>
  );
};

const maxSize15 = (val) => val.length > 15 && "You text is over length";
const isEmpty = (val) => !val && "Please write something";

export default reduxForm({ form: "dialogs" })(TextArea);
