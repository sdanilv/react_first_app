import profileReducer from "./profileReducer";
import navbarReducer from "./navbarReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _callSubscriber() {
        console.log(this);
    },
    _state: {
        DialogsPage: {
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
        ProfilePage: {
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
        },
        Navbar: {}
    },
    getState() {
        return this._state;
    },
    setEvent(observer) {
        this._callSubscriber = observer;
    },

    dispatcher(action) {
        profileReducer(action, this._state.ProfilePage);
        dialogsReducer(action, this._state.DialogsPage);
        navbarReducer(action, this._state.Navbar);
        this._callSubscriber(this._state);
    }
};

export default store;
