import dialogsReducer, { AddMessageToChat, LoadChat } from "./dialogsReducer";
const initiationState = {
  lastMessages: [
    {
      id: 1,
      name: "Boris",
      lastMessage: "Utah",
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
    },
    {
      id: 2,
      name: "Avis",
      lastMessage: "96548",
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
    },
    {
      id: 3,
      name: "Madie",
      lastMessage: "Somalia instruction set Interactions",
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/kiwiupover/128.jpg"
    },
    {
      id: 4,
      name: "Nathen",
      lastMessage: "Marketing",
      img: "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
    },
    {
      id: 5,
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
  ]
};

it(`chats should be increased`, () => {
  const newState = dialogsReducer(initiationState, AddMessageToChat());
  expect(newState.chats.length).toBe(5);
});
it(`chats last message should contain "Hello"`, () => {
  const newState = dialogsReducer(
    initiationState,
    AddMessageToChat(4, "Hello")
  );
  expect(newState.chats[4].messages).toBe("Hello");
});
it(`chats should not be null`, () => {
  const iniState = { chats: null };
  const nChats = [
    {
      id: 2,
      messages: ["Uadsa", "adsadada", "Human"]
    },
    {
      id: 3,
      messages: ["Utah", "Fargus", "96548"]
    }
  ];
  const nState = dialogsReducer(iniState, LoadChat(nChats));
  expect(nState.chats).not.toBe(null);
});
