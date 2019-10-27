import React from "react";
import { reduxForm, Field } from "redux-form";
import { signIn } from "../../redux/authReduce";
import { connect } from "react-redux";

const AuthForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form action='auth' method='post' onSubmit={handleSubmit}>
      <div>
        <Field
          name='email'
          component='input'
          type='email'
          placeholder='email@mail.com'
        />
      </div>
      <div>
        <Field
          name='password'
          component='input'
          type='password'
          placeholder='Password'
        />
      </div>
      <div>
        <Field name='rememberMe' component='input' type='checkbox' />
        Remember Me
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

const Auth = (props) => {
  const onSubmit = (formData) => {
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
const mapStateToProps = (state) => ({
  isSigned: state.Auth.isSignIn
});
export default connect(
  mapStateToProps,
  { signIn }
)(Auth);
