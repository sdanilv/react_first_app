import React from "react";
import style from "@/common/FormControllers/FormController.module.css";
import {Field, reduxForm} from "redux-form";
import {signIn} from "@/redux/authReduce/authReduce";
import {connect} from "react-redux";
import {MyInput} from "@/common/FormControllers/FormController";
import {maxSize, required} from "@/utilits/validators/validate";
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import {getCaptchaURL, isSignIn} from "@/redux/authReduce/authSelector";

const maxSize20 = maxSize(20);
const AuthForm = props => {
    const {handleSubmit, captchaURL} = props;

    return (
        <form action='auth' method='post' onSubmit={handleSubmit}>
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

const Auth = props => {
    const onSubmit = formData => {
        props.signIn(formData);
    };

    if (props.isSigned) {
        return <Redirect to='/profile'/>;
        // props.history.goBack();
    }
    return (
        <center>
            <h2>Authorization</h2>
            <AuthReduxForm captchaURL={props.captchaURL} onSubmit={onSubmit}/>
        </center>
    );
};

const AuthReduxForm = reduxForm({form: "auth"})(AuthForm);
const mapStateToProps = state => ({
    isSigned: isSignIn(state),
    captchaURL: getCaptchaURL(state)

});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        {signIn}
    )
)(Auth);
