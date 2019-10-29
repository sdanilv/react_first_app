import React from "react";
import style from "../../common/FormControllers/FormController.module.css";
import { reduxForm, Field } from "redux-form";
import { signIn } from "../../redux/authReduce";
import { connect } from "react-redux";
import { MyInput } from "../../common/FormControllers/FormController";
import { maxSize, required } from "../../utilits/validators/validate";

const maxSize20 = maxSize(20);
const AuthForm = props => {
  const { handleSubmit } = props;
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
        <Field name='rememberMe' component='input' type='checkbox' />
        Remember Me
      </div>
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

  return (
    <center>
      <h2>Authorization</h2>
      <AuthReduxForm onSubmit={onSubmit} />
    </center>
  );
};
const AuthReduxForm = reduxForm({ form: "auth" })(AuthForm);
const mapStateToProps = state => ({
  isSigned: state.Auth.isSignIn
});
export default connect(
  mapStateToProps,
  { signIn }
)(Auth);
