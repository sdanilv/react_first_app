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
        {/* <textarea value={props.textArea} ref={areaRef} onKeyDown={areaKeyEvent}/> */}
        {/* <textarea value={props.textArea} onChange={areaKeyEvent} /> */}
        <Field
          component={MyTextArea}
          name='message'
          validate={[required, maxSize15]}
        />
        <button>Submit</button>
      </div>
    </form>
  );
};

// const MyTextAreaComponent = ({
//   input,
//   label,
//   type,
//   meta: { touched, error, warning }
// }) => {
//   return (
//     <>
//       <textarea {...input} placeholder={label} type={type} />

//       {touched && <label className={style.error}>error</label>}
//     </>
//   );
// };

export default reduxForm({ form: "dialogs" })(TextArea);
