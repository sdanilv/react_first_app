import { AuthApi } from "../api/api";

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
export let signOut = data => ({
  type: SIGN_OUT,
  data
});

export const getMe = () => dispatch =>
  AuthApi.getMe().then(response => {
    if (response.resultCode === 0) {
      dispatch(auth(response.data));
    }
  });

export const signIn = formData => {
  const request = {
    ...formData,
    captcha: true
  };
  AuthApi.signIn(request).then(resultCode => {
    if (resultCode === 0) console.log("All Ok");
  });
};

export default authReduce;
