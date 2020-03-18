import React from "react";
import * as style from "./Auth.module.css";
import {Field, reduxForm} from "redux-form";
import {signIn} from "redux/authReduce/authReduce";
import {connect} from "react-redux";
import {MyInput} from "src/common/FormControllers/FormController";
import {maxSize, required} from "src/utilits/validators/validate";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {getCaptchaURL, getIsSignIn} from "src/redux/authReduce/authSelector";
import {GlobalState} from "redux/storeRedux";

const maxSize20 = maxSize(20);
const AuthForm = (props:any) => {
    const {handleSubmit, captchaURL} = props;

    return (
        <form  method='post' onSubmit={handleSubmit}>
            <div>
                <Field
                    name='email'
                    component={MyInput}
                    type='email'
                    label='email@mail.com'
                    validate={[maxSize20, required]}
                />
            </div>
            <div>
                <Field
                    name='password'
                    component={MyInput}
                    type='password'
                    label='Password'
                    validate={[maxSize20, required]}
                />
            </div>
            <div>
                <Field name='rememberMe' component='input' type='checkbox'/>
                Remember Me
            </div>

            {captchaURL && <>
                <div>
                    <img src={captchaURL} alt="captcha" className={style.captcha}/>
                </div>
                <div>
                    <Field name='captcha' component='input' type='text'/></div>
            </>}
            <div className={style.error}>{props.error}</div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
};

const Auth = (props:any) => {
    const onSubmit = (formData:any) => {
        props.signIn(formData);
    };

    if (props.isSigned) {
        return <Redirect to='/profile'/>;
        // props.history.goBack();
    }
    return (
<div  className={style.form}>
            <h2>Authorization</h2>
            <AuthReduxForm onSubmit={onSubmit}/>
 </div>
    );
};

const AuthReduxForm = reduxForm({form: "auth"})(AuthForm);
const mapStateToProps = (state: GlobalState) => ({
    isSigned: getIsSignIn(state),
    captchaURL: getCaptchaURL(state)

});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        {signIn}
    )
)(Auth);
