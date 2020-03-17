import style from "./More.module.css"
import React, {Fragment} from "react";
import {MyInput, MyTextArea} from "../../../../common/FormControllers/FormController";
import {Field, reduxForm} from "redux-form"

const EditableMore = props => {
    const {profile} = props;
    const contactsKeys = Object.keys(profile.contacts);
    const contacts = contactsKeys.map(key => {
        return (<Fragment key={key}>
            <div className={style.contact}>{key} :
                <Field name={"contacts." + key} placeholder={"http://" + key + ".com"} component={MyInput} type="text"/>
            </div>
        </Fragment>);
    });

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.aboutMe}><b>About Me:</b>
                <Field name={"aboutMe"} placeholder={"About Me"} component={MyTextArea}
                       type="text" reg={profile.aboutMe}/>
            </div>
            <div className={style.lookingForAJobDescription}>
                I search job: <Field name="lookingForAJob" type="checkbox" component={MyInput}/>
                <div className={style.lookingForAJobDescription}>
                    lookingForAJobDescription: <Field name="lookingForAJobDescription" component={MyInput}/>
                </div>
            </div>
            <div>{contacts}</div>
            <div className={style.error}>{props.error}</div>
            <div className={style.saveButton}>
                <button type="submit">
                    Save
                </button>
            </div>
        </form>
    )
};
export default reduxForm({form: "editMore"})(EditableMore);