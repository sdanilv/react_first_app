import {AuthApi} from "src/api/api";
import {stopSubmit} from "redux-form";
import { ThunkAction } from "redux-thunk";

const AUTHORIZATION = "AUTHORIZATION";
const SIGN_OUT = "SIGN_OUT";
const SET_CAPTCHA = "AUTH_SET_CAPTCHA";

type Action<T, K = {}> = { type: T } & K
type dataType = {id: number, email:string, login: string}
type ActionType = | Action<typeof AUTHORIZATION, {data:dataType}>
    | Action<typeof SIGN_OUT>
    | Action<typeof SET_CAPTCHA, { captchaURL:string }>
// type ThunkResult<R> = ThunkAction<R, authStateType, undefined, ActionType>;

let initiationState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isSignIn: false ,
    captchaURL: null as string | null
};

type authStateType = typeof initiationState

const authReduce = (state = initiationState, action:ActionType): authStateType => {
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

type authData = { id: number, email: string, login: string }
export let auth = (data: authData): ActionType=> ({
    type: AUTHORIZATION,
    data
});
export let signOut = (): ActionType => ({
    type: SIGN_OUT
});

type captchaURL = string | null
const setCaptchaURL = (captchaURL: string): ActionType => ({
    type: SET_CAPTCHA,
    captchaURL: captchaURL
});

const getCaptchaURL = () => async (dispatch:Function) => {
    const captchaURL: captchaURL = await AuthApi.getCaptcha();
    if (captchaURL) {
        dispatch(setCaptchaURL(captchaURL));
    }
    return captchaURL;
};

export const getMe = () => async (dispatch:Function) => {
    const response:{resultCode:number, data:any} = await AuthApi.getMe();
    if (response.resultCode === 0) {
        dispatch(auth(response.data));
    }
    return response.data;
};


export const signIn = (formData:dataType) => async (dispatch:Function) => {
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
export const logout = () => async (dispatch:Function) => {
    const resultCode = await AuthApi.logout();
    if (resultCode === 0) dispatch(signOut());
};

export default authReduce;
