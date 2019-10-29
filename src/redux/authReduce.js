import { AuthApi } from "../api/api";
import { stopSubmit } from "redux-form";

const AUTHORIZATION = "AUTHORIZATION";
const SIGN_OUT = "SIGN_OUT";
let initiationState = {
  id: null,
  email: null,
  login: null,
  isSignIn: false
};

const authReduce = (state = initiationState, action) => {
  switch (action.type) {
    case AUTHORIZATION:
      return {
        ...state,
        ...action.data,
        isSignIn: true
      };
    case SIGN_OUT:
      return {
        ...state,
        id: null,
        email: null,
        login: null,
        isSignIn: false
      };
    default:
      return state;
  }
};

export let auth = data => ({
  type: AUTHORIZATION,
  data
});

export let signOut = () => ({
  type: SIGN_OUT
});

export const getMe = () => dispatch =>
  AuthApi.getMe().then(response => {
    if (response.resultCode === 0) {
      dispatch(auth(response.data));
    }
  });

export const signIn = formData => dispatch => {
  const request = {
    ...formData,
    captcha: true
  };
  AuthApi.signIn(request).then(data => {
    if (data.resultCode === 0) {
      dispatch(getMe());
    } else dispatch(stopSubmit("auth", { _error: data.messages }));
  });
};
export const logout = () => dispatch => {
  AuthApi.logout().then(resultCode => {
    if (resultCode === 0) dispatch(signOut());
  });
};

export default authReduce;
