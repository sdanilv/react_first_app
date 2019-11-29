import style from "./More.module.css"
import React, {Fragment} from "react";
import {MyInput} from "../../../../common/FormControllers/FormController";
import {Field, reduxForm} from "redux-form"

const EditableMore = props => {
    const {profile} = props;
    const contactsKeys = Object.keys(profile.contacts);
    const contacts = contactsKeys.map(key => {
        let link = profile.contacts[key];
        return (<Fragment key={key}><div className={style.contact}>{key} :
            <Field  name={"contacts."+key} placeholder={"http://"+key+".com"} component="input"  type="text" /></div></Fragment>);
    });

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.aboutMe}><b>About Me:</b>
                <Field name={"aboutMe"} placeholder={"About Me"} component="textarea"
                      type="text" reg={profile.aboutMe} />
            </div>
            <div className={style.lookingForAJob}>
                I search job: <Field name="lookingForAJob" type="checkbox" component="input"/>
                <div className={style.lookingForAJobDescription}>
                    lookingForAJobDescription: <Field name="lookingForAJobDescription" component="input"/>
                </div>
            </div>

            <div>{contacts}</div>
            <button type="submit" >
                Save
            </button>

        </form>

)
};
export default reduxForm({form: "editMore"})(EditableMore);