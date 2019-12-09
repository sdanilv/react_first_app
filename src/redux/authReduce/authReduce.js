import {AuthApi} from "../../api/api";
import {stopSubmit} from "redux-form";

const AUTHORIZATION = "AUTHORIZATION";
const SIGN_OUT = "SIGN_OUT";
const SET_CAPTCHA = "AUTH_SET_CAPTCHA";
let initiationState = {
    id: null,
    email: null,
    login: null,
    isSignIn: false,
    captchaURL: null
};

const authReduce = (state = initiationState, action) => {
    switch (action.type) {
        case AUTHORIZATION:
            return {
                ...state,
                ...action.data,
                isSignIn: true
            };
        case SET_CAPTCHA:
            return {
                ...state,
                ...action.data,
                captchaURL: action.captchaURL
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
const setCaptchaURL = captchaURL => ({
    type: SET_CAPTCHA,
    captchaURL: captchaURL
});

const getCaptchaURL = () => async dispatch => {
    const captchaURL = await AuthApi.getCaptcha();
    if (captchaURL) {
        dispatch(setCaptchaURL(captchaURL));
    }
    return captchaURL;
};

export const getMe = () => async dispatch => {
    const response = await AuthApi.getMe();
    if (response.resultCode === 0) {
        dispatch(auth(response.data));
    }
    return response.data;
};


export const signIn = formData => async dispatch => {
    const request = {
        ...formData
    };
    const data = await AuthApi.signIn(request);
    switch (data.resultCode) {
        case 0 :
            dispatch(getMe());
            break;
        case 10:
            dispatch(stopSubmit("auth", {_error: data.messages}));
            dispatch(getCaptchaURL());
            break;
        default:
            dispatch(stopSubmit("auth", {_error: data.messages}));
            return data;
    }
};
export const logout = () => async dispatch => {
    const resultCode = await AuthApi.logout();
    if (resultCode === 0) dispatch(signOut());
};

export default authReduce;
