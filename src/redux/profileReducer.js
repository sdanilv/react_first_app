const UPDATE_POST_TEXT_AREA = "UPDATE-POST-TEXT-AREA";
const ADD_POST = "ADD-POST";
const initationState = {
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
};

const profileReducer = (state = initationState, action) => {
  let stateCopy = state;

  switch (action.type) {
    case UPDATE_POST_TEXT_AREA:
      return { ...state, textArea: action.text };
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
        posts: [...stateCopy.posts, postComponent],
        textArea: ""
      };

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

export default profileReducer;
