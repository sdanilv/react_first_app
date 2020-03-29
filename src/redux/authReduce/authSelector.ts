import {GlobalState} from "redux/storeRedux";

export const  getMyId = (state:GlobalState):string|null =>  state.Auth.id;
// export const  getMyEmail = (state:GlobalState):string|null => state.Auth.email;
export const  getMyLogin = (state:GlobalState):string|null => state.Auth.login;
export  const  getCaptchaURL = (state:GlobalState):string|null => state.Auth.captchaURL;
export const  getIsSignIn = (state:GlobalState):boolean => state.Auth.isSignIn;
