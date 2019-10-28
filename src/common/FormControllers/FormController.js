import React from "react";
import style from "./FormController.module.css";

export const MyTextArea = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  return (
    <>
      <textarea
        {...input}
        placeholder={label}
        type={type}
        className={touched ? error && style.form_error : ""}
      />
      {touched && <label className={style.error}>{error}</label>}
    </>
  );
};
