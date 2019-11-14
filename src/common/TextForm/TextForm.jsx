import React from "react";
import style from "./TextForm.module.css";
import {Field, reduxForm} from "redux-form";
import {MyTextArea} from "../FormControllers/FormController";
import {maxSize, required} from "../../utilits/validators/validate";

const maxSize1000 = maxSize(1000);

const TextForm = props => {
    let {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className={style.textarea}>
                <Field
                    component={MyTextArea}
                    name={props.form}
                    validate={[required, maxSize1000]}
                />
                <button>Submit</button>
            </div>
        </form>
    );
};

export default reduxForm()(TextForm);
