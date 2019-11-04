import { ProfileApi } from "../../api/api";
import MyAva from "../../img/MyAva.jpg";

const UPDATE_POST_TEXT_AREA = "UPDATE-POST-TEXT-AREA";
const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET_PROFILE";
const SET_STATUS = "SET_STATUS";

const initationState = {
  myprofile: {
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
  profile: null,
  status: null
};

const profileReducer = (state = initationState, action) => {
  let stateCopy = state;

  switch (action.type) {
    case UPDATE_POST_TEXT_AREA:
      return {
        ...state,
        myprofile: {
          ...state.myprofile,
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
        myprofile: {
          ...state.myprofile,
          posts: [...state.myprofile.posts, postComponent]
        }
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return stateCopy;
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
export const setStatus = status => ({
  type: SET_STATUS,
  status
});

export let getUserProfile = userId => dispatch => {
  ProfileApi.getUserProfile(userId).then(result => {
    dispatch(setProfile(result.data));
  });
};
export let getUserStatus = userId => dispatch => {
  ProfileApi.getUserStatus(userId).then(result => {
    dispatch(setStatus(result.data));
  });
};
export let setMyStatus = status => dispatch => {
  ProfileApi.setMyStatus(status).then(result => {
    dispatch(setStatus(status));
  });
};

export default profileReducer;