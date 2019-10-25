import React from "react";
import style from "./TextArea.module.css";
import { Field, reduxForm } from "redux-form";

const TextArea = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.textarea}>
        <Field component='textarea' name='post' />
        <button>Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "post" })(TextArea);
