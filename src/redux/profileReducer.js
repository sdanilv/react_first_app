const UPDATE_POST_TEXT_AREA = "UPDATE-POST-TEXT-AREA";
const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET_PROFILE";

const initationState = {
  myprofile: {
    aboutMe: "EEEhaaa",
    lookingForAJob: true,
    lookingForAJobDescription: "need a good job",
    fullName: "Danil S",
    userId: 0,
    photos: {
      small: "https://2krota.ru/wp-content/uploads/2019/02/0_i-1-1024x1547.jpg",
      large: "https://2krota.ru/wp-content/uploads/2019/02/0_i-1-1024x1547.jpg"
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
    ],
    textArea: ""
  },
  profile: null
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
        id: 4,
        name: "My",
        age: 26,
        message: state.textArea,
        likeCount: 0,
        ava: "https://2krota.ru/wp-content/uploads/2019/02/0_i-1-1024x1547.jpg"
      };
      return {
        ...state,
        myprofile: {
          ...state.myprofile,
          posts: [...stateCopy.posts, postComponent],
          textArea: ""
        }
      };
    case SET_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return stateCopy;
  }
};

export const UpdatePostTextAreaAction = enterText => ({
  type: UPDATE_POST_TEXT_AREA,
  text: enterText
});
export const AddPostAction = () => ({
  type: ADD_POST
});
export const setProfile = profile => ({
  type: SET_PROFILE,
  profile: profile
});
export default profileReducer;
