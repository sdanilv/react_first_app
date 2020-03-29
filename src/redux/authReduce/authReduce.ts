import {APIType, AuthApi, MyDataType} from "src/api/api.ts";
import {stopSubmit} from "redux-form";
import {GlobalState} from "redux/storeRedux";
import { ThunkAction } from "redux-thunk";


const AUTHORIZATION = "AUTHORIZATION";
const SIGN_OUT = "SIGN_OUT";
const SET_CAPTCHA = "AUTH_SET_CAPTCHA";

type Action<T, K = {}> = { type: T } & K
type dataType = {id: string, email:string, login: string}
type ActionType = | Action<typeof AUTHORIZATION, {data:dataType}>
    | Action<typeof SIGN_OUT>
    | Action<typeof SET_CAPTCHA, { captchaURL:string }>


// type ThunkResult<R> = ThunkAction<R, authStateType, undefined, ActionType>;
type  ThunkActionType <R> = ThunkAction<R, GlobalState,{}, ActionType>
const  initiationState = {
    id: null as string | null,
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

type authData = { id: string, email: string, login: string }
export const  auth = (data: authData): ActionType=> ({
    type: AUTHORIZATION,
    data
});
export const  signOut = (): ActionType => ({
    type: SIGN_OUT
});

type captchaURL = string | null
const setCaptchaURL = (captchaURL: string): ActionType => ({
    type: SET_CAPTCHA,
    captchaURL: captchaURL
});

const getCaptchaURL = ():ThunkActionType<Promise<string|null>> => async (dispatch) => {
    const captchaURL: captchaURL = await AuthApi.getCaptcha();
    if (captchaURL) {
        dispatch(setCaptchaURL(captchaURL));
    }
    return captchaURL;
};

export const getMe = ():ThunkActionType<Promise<MyDataType>> => async (dispatch) => {
    const response = await AuthApi.getMe();
    if (response.resultCode === 0) {
        dispatch(auth(response.data));
    }
    return response.data;
};


export const signIn = (formData:dataType): ThunkActionType<APIType<{userId:string}>> => async (dispatch) => {
    const request = {
        ...formData
    };
    const data = await AuthApi.signIn(request);
    switch (data.resultCode) {
        case 0 :
            await  dispatch(getMe());
            return data;
        case 10:
            dispatch(stopSubmit("auth", {_error: data.messages}));
            await  dispatch(getCaptchaURL());
            return data;
        default:
            dispatch(stopSubmit("auth", {_error: data.messages}));
            return data;
    }
};
export const logout = ():ThunkActionType<void> => async (dispatch) => {
    const resultCode = await AuthApi.logout();
    if (resultCode === 0) dispatch(signOut());
};

export default authReduce;
