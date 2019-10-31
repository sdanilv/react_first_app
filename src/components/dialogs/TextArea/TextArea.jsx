import React from "react";
import style from "./TextArea.module.css";
import { reduxForm, Field } from "redux-form";
import { maxSize, required } from "../../../utilits/validators/validate";
import { MyTextArea } from "./../../../common/FormControllers/FormController";
const maxSize15 = maxSize(15);
const TextArea = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.textarea}>
        <Field
          type='textarea'
          component={MyTextArea}
          name='message'
          validate={[required, maxSize15]}
        />
        <button>Submit</button>
      </div>
    </form>
  );
};


export default reduxForm({ form: "dialogs" })(TextArea);
