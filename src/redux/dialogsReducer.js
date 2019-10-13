const UPDATE_CHAT_TEXT_AREA = "UPDATE-CHAT-TEXT-AREA";
const ADD_CHAT_MESSAGE = "ADD-CHAT-MESSAGE";
const initiationState = {
  lastMessages: [
    {
      id: 1,
      name: "Boris",
      lastMessage: "Utah",
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
    },
    {
      id:2,
      name: "Avis",
      lastMessage: "96548",
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
    },
    {
      id:3,
      name: "Madie",
      lastMessage: "Somalia instruction set Interactions",
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/kiwiupover/128.jpg"
    },
    {
      id:4,
      name: "Nathen",
      lastMessage: "Marketing",
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
    },
    {
      id:5,
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
};
const dialogsReducer = (state = initiationState, action) => {
  switch (action.type) {
    case UPDATE_CHAT_TEXT_AREA:
      return { ...state, textArea: action.text };
    case ADD_CHAT_MESSAGE:
      let chatComponent = {
        id: 5,
        messages: state.textArea
      };
      return { ...state, chats: [...state.chats, chatComponent], textArea: "" };
    default:
      return state;
  }
};

export const UpdateChatTextAreaAction = enterText => ({
  type: UPDATE_CHAT_TEXT_AREA,
  text: enterText
});
export const AddChatAction = () => ({
  type: ADD_CHAT_MESSAGE
});

export default dialogsReducer;
