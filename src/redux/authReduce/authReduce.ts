import {AuthApi} from "../../api/api";
import {stopSubmit} from "redux-form";

// const AUTHORIZATION = "AUTHORIZATION";
// const SIGN_OUT = "SIGN_OUT";
// const SET_CAPTCHA = "AUTH_SET_CAPTCHA";

enum actionTypes {
    AUTHORIZATION = "AUTHORIZATION",
     SIGN_OUT = "SIGN_OUT",
    SET_CAPTCHA = "AUTH_SET_CAPTCHA"}


let initiationState = {
    id: null as string|null,
    email: null  as string|null,
    login: null  as string|null,
    isSignIn: false  as boolean|null,
    captchaURL: null  as string|null
};

type authStateType = typeof initiationState

const authReduce = (state = initiationState, action) : authStateType => {
    switch (action.type) {
        case actionTypes.AUTHORIZATION:
            return {
                ...state,
                ...action.data,
                isSignIn: true
            };
        case actionTypes.SET_CAPTCHA:
            return {
                ...state,
                ...action.data,
                captchaURL: action.captchaURL
            };
        case actionTypes.SIGN_OUT:
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

type authData = {id:string, email:string, login: string}
export let auth = (data:authData):{type:actionTypes, data:authData} => ({
    type: actionTypes.AUTHORIZATION,
    data
});
export let signOut = ():{type:actionTypes} => ({
    type: actionTypes.SIGN_OUT
});

type captchaURL = string | null
const setCaptchaURL = (captchaURL:string):{type:actionTypes, captchaURL:captchaURL} => ({
    type: actionTypes.SET_CAPTCHA,
    captchaURL: captchaURL
});

const getCaptchaURL = ()=> async (dispatch)  => {
    const captchaURL : captchaURL = await AuthApi.getCaptcha();
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
