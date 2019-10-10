const UPDATE_POST_TEXT_AREA = "UPDATE-POST-TEXT-AREA";
const ADD_POST = "ADD-POST";
const UPDATE_CHAT_TEXT_AREA = "UPDATE-CHAT-TEXT-AREA";
const ADD_CHAT_MESSAGE = "ADD-CHAT-MESSAGE";
let id = 0;
let store = {
  _callSubscriber() {
    console.log(this);
  },
  _state: {
    Dialogs: {
      dialogs: [
        {
          name: "Boris",
          lastMessage: "Utah",
          img:
            "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
        },
        {
          name: "Avis",
          lastMessage: "96548",
          img:
            "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
        },
        {
          name: "Madie",
          lastMessage: "Somalia instruction set Interactions",
          img:
            "https://s3.amazonaws.com/uifaces/faces/twitter/kiwiupover/128.jpg"
        },
        {
          name: "Nathen",
          lastMessage: "Marketing",
          img:
            "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
        },
        {
          name: "Orville",
          lastMessage: "compelling engage emulation connecting Aruban Guilder",
          img: "https://s3.amazonaws.com/uifaces/faces/twitter/gt/128.jpg"
        }
      ],
      chats: [
        {
          id: 0,
          messages: ["Utah", "Fargus", "96548"]
        },
        {
          id: 1,
          messages: ["Utah", "adsadada", "Human"]
        },
        {
          id: 2,
          messages: ["Uadsa", "adsadada", "Human"]
        },
        {
          id: 3,
          messages: ["Utah", "Fargus", "96548"]
        }
      ],
      textArea: ""
    },

    Profile: {
      posts: [
        {
          name: "Boris",
          age: 19,
          message: "Customer-focused Keyboard Identity",
          likeCount: 9,
          ava:
            "https://s3.amazonaws.com/uifaces/faces/twitter/dhooyenga/128.jpg"
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
    }
  },
  getState() {
    return this._state;
  },
  setEvent(observer) {
    this._callSubscriber = observer;
  },

  dispatcher(action) {
    if (action.type === UPDATE_POST_TEXT_AREA) {

      this._state.Profile.textArea = action.text;

      this._callSubscriber(this._state);
    }

    if (action.type === ADD_POST) {
      // debugger;
      let postComponent = {
        name: "My",
        age: 26,
        message: this._state.Profile.textArea,
        likeCount: 0,
        ava: "https://2krota.ru/wp-content/uploads/2019/02/0_i-1-1024x1547.jpg"
      };
      this._state.Profile.posts.push(postComponent);
      this._state.Profile.textArea = "";
      this._callSubscriber(this._state);
    }

    if (action.type === UPDATE_CHAT_TEXT_AREA) {
      
      this._state.Dialogs.textArea = action.text;

      this._callSubscriber(this._state);
    }

    if (action.type === ADD_CHAT_MESSAGE) {
      // debugger;
      let chatComponent = {
        id: id++,
        messages: this._state.Dialogs.textArea,
        // name: "My",
        // age: 26,
        // message: this._state.Profile.textArea,
        // likeCount: 0,
        // ava: "https://2krota.ru/wp-content/uploads/2019/02/0_i-1-1024x1547.jpg"
      };
      this._state.Dialogs.chats.push(chatComponent);
      this._state.Dialogs.textArea = "";
      this._callSubscriber(this._state);
    }
  }
};

export const AddPostAction = () => ({
  type: ADD_POST
});

export const UpdatePostTextAreaAction = enterText => (
  
  {
  
  type: UPDATE_POST_TEXT_AREA,
  text: enterText
});

export const AddChatAction = () => ({
  type: ADD_CHAT_MESSAGE
});

export const UpdateChatTextAreaAction = enterText => ({
  type: UPDATE_CHAT_TEXT_AREA,
  text: enterText
});

export default store;
