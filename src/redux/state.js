import { render } from "./render";

let state = {
  Dilogs: {
    dialogs: [
      {
        name: "Boris",
        lastMessage: "Utah",
        img: "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
      },
      {
        name: "Avis",
        lastMessage: "96548",
        img: "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
      },
      {
        name: "Madie",
        lastMessage: "Somalia instruction set Interactions",
        img: "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg",
        img: "https://s3.amazonaws.com/uifaces/faces/twitter/kiwiupover/128.jpg"
      },
      {
        name: "Nathen",
        lastMessage: "Marketing",
        img: "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
      },
      {
        name: "Orville",
        lastMessage: "compelling engage emulation connecting Aruban Guilder",
        img: "https://s3.amazonaws.com/uifaces/faces/twitter/gt/128.jpg"
      }
    ]
  },

  Profile: {
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
  }
};

export let addLetter = letter => {
  state.Profile.textArea = letter;
  render();
};

export let addPost = () => {
  // debugger;
  let postComponent = {
    name: "My",
    age: 26,
    message: state.Profile.textArea,
    likeCount: 0,
    ava: "https://2krota.ru/wp-content/uploads/2019/02/0_i-1-1024x1547.jpg"
  };
  state.Profile.posts.push(postComponent);
  state.Profile.textArea = "";
  render();
};

export default state;
