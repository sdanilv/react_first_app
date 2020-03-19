import {ProfileApi} from "src/api/api";
import MyAva from "src/img/MyAva.jpg";
import {stopSubmit} from "redux-form";

const ADD_POST = "myApp/profile/ADD-POST";
const SET_PROFILE = "myApp/profile/SET_PROFILE";
const SET_STATUS = "myApp/profile/SET_STATUS";
const SET_MY_PROFILE = "myApp/profile/SET_MY_PROFILE";
export type ProfileType = {
    isMe?:boolean,
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}
type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V
type ActionType = Action<typeof ADD_POST, { post: string, id: number }> |
    Action<typeof SET_PROFILE, { profile: ProfileType|null }> |
    Action<typeof SET_STATUS, { status: string }> |
    Action<typeof SET_MY_PROFILE, { profile: ProfileType }> ;

const initState = {
    myOldProfile: {
        aboutMe: "About me. I`m I",
        lookingForAJob: true,
        lookingForAJobDescription: "Need a good job",
        fullName: "Danil S",
        userId: 0,
        photos: {
            small: MyAva,
            large: MyAva
        },
        posts: [
            {
                id: 1,
                name: "Boris",
                age: 19,
                message: "Customer-focused Keyboard Identity",
                likeCount: 9,
                ava: "https://s3.amazonaws.com/uifaces/faces/twitter/dhooyenga/128.jpg"
            },
            {
                id: 2,
                name: "Rahsaan",
                age: 36,
                message: "Customer-focused Keyboard Identity",
                likeCount: 2,
                ava: "https://s3.amazonaws.com/uifaces/faces/twitter/sprayaga/128.jpg"
            },
            {
                id: 3,
                name: "Christopher",
                age: 55,
                message: "Customer-focused Keyboard Identity",
                likeCount: 13,
                ava: "https://s3.amazonaws.com/uifaces/faces/twitter/ratbus/128.jpg"
            }
        ]
    },
    myProfile  : null as ProfileType| null,
    profile: null as ProfileType| null,
    status: null as string|null
};
type InitState = typeof initState
export type MyOldProfilePostsType = typeof initState.myOldProfile.posts
const profileReducer = (state = initState, action:ActionType):InitState => {

    switch (action.type) {
        case ADD_POST:
            let postComponent = {
                id: action.id,
                name: "My",
                age: 26,
                message: action.post,
                likeCount: 0,
                ava: "https://2krota.ru/wp-content/uploads/2019/02/0_i-1-1024x1547.jpg"
            };
            return {
                ...state,
                myOldProfile: {
                    ...state.myOldProfile,
                    posts: [...state.myOldProfile.posts, postComponent]
                }
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_MY_PROFILE:
            return {
                ...state,
                myProfile: {isMe: true, ...action.profile}
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export const AddPost = (id: number, post: string): ActionType => ({
    type: ADD_POST,
    post,
    id
});
export const setProfile = (profile:ProfileType|null ):ActionType => ({
    type: SET_PROFILE,
    profile: profile
});
const setMyProfileAC = (profile:ProfileType):ActionType => ({
    type: SET_MY_PROFILE,
    profile: profile
});

export const setStatus = (status:string):ActionType => ({
    type: SET_STATUS,
    status
});


export let getUserProfile = (userId:string) => (dispatch: Function) => {
    ProfileApi.getUserProfile(userId).then(result => {
        dispatch(setProfile(result.data));
    });
};
export let setMyProfile = () => (dispatch: Function, getState: Function) => {
    const userId = getState().Auth.id;
    return ProfileApi.getUserProfile(userId).then(result => {
        dispatch(setMyProfileAC(result.data));
    });
};
export let getUserStatus = (userId:string) => (dispatch: Function) => {
    ProfileApi.getUserStatus(userId).then(result => {
        dispatch(setStatus(result.data));
    });
};
export let setMyStatus = (status:string) => (dispatch: Function) => {
    ProfileApi.setMyStatus(status).then(() => {
        dispatch(setStatus(status));
    });
};

export const changePhoto = (img:string) => async (dispatch: Function, getState: Function) => {
    ProfileApi.uploadPhoto(img).then(result => {
        if (result.data.resultCode === 0) {
            const userId = getState().ProfilePage.myProfile.userId;
            dispatch(getUserProfile(userId));
            dispatch(setMyProfile())
        }
    });
};

export const changeMyProfileInfo = ( profile: ProfileType) => async(dispatch: Function, getState: Function) => {
    const userId = getState().ProfilePage.myProfile.userId;
    return ProfileApi.setMyProfileInfo(profile).then(result => {
        if (result.data.resultCode === 0) {
            dispatch(getUserProfile(userId));
            return true;
        } else {
            let messages: string = result.data.messages[0];
            const indexOfBracers :number = messages.lastIndexOf("(");
            let brokenField :string = messages.substring(indexOfBracers + 1, messages.length - 1);
            const indexOfArray: number = brokenField.search("-");
            messages = messages.substring(0, indexOfBracers - 1);
            let error: {[brokenField: string]: string| Object} = {};
            if (indexOfArray === -1) {
                brokenField = brokenField.charAt(0).toLowerCase() + brokenField.slice(1);
                error[brokenField] = messages;
            } else {
                brokenField = brokenField.slice(indexOfArray + 2);
                brokenField = brokenField.charAt(0).toLowerCase() + brokenField.slice(1);
                let contacts: {[brokenField: string]: string} = {};
                contacts[brokenField] = messages;
                error["contacts"] = contacts;
            }
            dispatch(stopSubmit("editMore", error));
            return false;
        }
    });
};
export default profileReducer;
