import {ProfileApi} from "../../api/api";
import MyAva from "../../img/MyAva.jpg";
import {stopSubmit} from "redux-form";

const UPDATE_POST_TEXT_AREA = "UPDATE-POST-TEXT-AREA";
const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";
const SET_MY_PROFILE = "SET_MY_PROFILE";

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
    myProfile: null,
    profile: null,
    status: null
};

const profileReducer = (state = initState, action) => {

    switch (action.type) {
        case UPDATE_POST_TEXT_AREA:
            return {
                ...state,
                myOldProfile: {
                    ...state.myOldProfile,
                    textArea: action.text
                }
            };
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

export const AddPost = (id, post) => ({
    type: ADD_POST,
    post,
    id
});
export const setProfile = profile => ({
    type: SET_PROFILE,
    profile: profile
});
const setMyProfileAC = profile => ({
    type: SET_MY_PROFILE,
    profile: profile
});

export const setStatus = status => ({
    type: SET_STATUS,
    status
});


export let getUserProfile = userId => dispatch => {
    ProfileApi.getUserProfile(userId).then(result => {
        dispatch(setProfile(result.data));
    });
};
export let setMyProfile = () => (dispatch, getState) => {
    const userId = getState().Auth.id;
    return ProfileApi.getUserProfile(userId).then(result => {
        dispatch(setMyProfileAC(result.data));
    });
};
export let getUserStatus = userId => dispatch => {
    ProfileApi.getUserStatus(userId).then(result => {
        dispatch(setStatus(result.data));
    });
};
export let setMyStatus = status => dispatch => {
    ProfileApi.setMyStatus(status).then(() => {
        dispatch(setStatus(status));
    });
};

export const changePhoto = (img) => async (dispatch, getState) => {
    ProfileApi.uploadPhoto(img).then(result => {
        if (result.data.resultCode === 0) {
            const userId = getState().ProfilePage.myProfile.userId;
            dispatch(getUserProfile(userId));
            dispatch(setMyProfile(userId))
        }
    });
};

export const changeMyProfileInfo = profile => async (dispatch, getState) => {
    const userId = getState().ProfilePage.myProfile.userId;
    return ProfileApi.setMyProfileInfo(profile).then(result => {
        if (result.data.resultCode === 0) {
            dispatch(getUserProfile(userId));
            return true;
        } else {
            let messages = result.data.messages[0];
            const indexOfBracers = messages.lastIndexOf("(");
            let brokenField = messages.substring(indexOfBracers + 1, messages.length - 1);
            const indexOfArray = brokenField.search("-");
            messages = messages.substring(0, indexOfBracers - 1);
            let error = {};
            if (indexOfArray === -1) {
                brokenField = brokenField.charAt(0).toLowerCase() + brokenField.slice(1);
                error[brokenField] = messages;
            } else {
                brokenField = brokenField.slice(indexOfArray + 2);
                brokenField = brokenField.charAt(0).toLowerCase() + brokenField.slice(1);
                let contacts = {};
                contacts[brokenField] = messages;
                error["contacts"] = contacts;
            }
            dispatch(stopSubmit("editMore", error));
            return false;
        }
    });
};
export default profileReducer;
