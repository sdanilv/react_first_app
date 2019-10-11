const UPDATE_POST_TEXT_AREA = "UPDATE-POST-TEXT-AREA";
const ADD_POST = "ADD-POST";
const initationState = {
  posts: [
    {
      name: "Boris",
      age: 19,
      message: "Customer-focused Keyboard Identity",
      likeCount: 9,
      ava: "https://s3.amazonaws.com/uifaces/faces/twitter/dhooyenga/128.jpg"
    },
    {
      name: "Rahsaan",
      age: 36,
      message: "Customer-focused Keyboard Identity",
      likeCount: 2,
      ava: "https://s3.amazonaws.com/uifaces/faces/twitter/sprayaga/128.jpg"
    },
    {
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
    if (action.type === UPDATE_POST_TEXT_AREA) {
      debugger;
    state.textArea = action.text;
  }

  if (action.type === ADD_POST) {
   
    let postComponent = {
      name: "My",
      age: 26,
      message: state.textArea,
      likeCount: 0,
      ava: "https://2krota.ru/wp-content/uploads/2019/02/0_i-1-1024x1547.jpg"
    };
    state.posts.push(postComponent);
    state.textArea = "";
  }
  return state;
};

export const UpdatePostTextAreaAction = enterText => ({
  type: UPDATE_POST_TEXT_AREA,
  text: enterText
});

export const AddPostAction = () => ({
  type: ADD_POST
});

export default profileReducer;
