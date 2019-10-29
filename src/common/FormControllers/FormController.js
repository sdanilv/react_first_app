import React from "react";
import style from "./FormController.module.css";

export const MyTextArea = ({
  input,
  label,
  meta: { touched, error, warning }
}) => {
  return (
    <>
      <textarea
        {...input}
        placeholder={label}
        className={touched ? error && style.form_error : ""}
      />
      {touched && <label className={style.error}>{error}</label>}
    </>
  );
};

export const MyInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  return (
    <>
      <input
        {...input}
        type={type}
        placeholder={label}
        className={touched ? error && style.form_error : ""}
      />
      {touched && <label className={style.error}>{error}</label>}
    </>
  );
};
