import React from "react";
import style from "./TextArea.module.css";
import { Field, reduxForm } from "redux-form";
import { MyTextArea } from "../../../../common/FormControllers/FormController";
import { maxSize, required } from "../../../../utilits/validators/validate";
const maxSize18 = maxSize(18);
const TextArea = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.textarea}>
        <Field
          component={MyTextArea}
          name='post'
          validate={[required, maxSize18]}
        />
        <button>Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "post" })(TextArea);
