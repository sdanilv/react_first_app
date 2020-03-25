import React, {FC} from "react";
import style from "./FormController.module.css";
import { WrappedFieldProps } from "redux-form";

type MyTextAreaType = {label:string}
export const MyTextArea:FC<MyTextAreaType&WrappedFieldProps> = ({input, label, meta: {touched, error}}) => {
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

type MyInputType = {label:string, type:string}
export const MyInput:FC<WrappedFieldProps&MyInputType> = ({input, label, type, meta: {touched, error}}) => {
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
// @ts-ignore