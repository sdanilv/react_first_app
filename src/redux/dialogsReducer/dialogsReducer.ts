const ADD_CHAT_MESSAGE = "myApp/dialogs/ADD-CHAT-MESSAGE";
const LOAD_ALL_CHAT_MESSAGE = "myApp/dialogs/LOAD_ALL_CHAT_MESSAGE";

export type MessageType = { message: string, userId: number }
export type UserDialogType = { id: number, name: string, messages: Array<MessageType>, img: string }
type Action<T, K = void> = K extends void ? { type: T } : { type: T } & K;
type ActionType = Action<typeof ADD_CHAT_MESSAGE, { message: string, id: string, userId: number }> |
    Action<typeof LOAD_ALL_CHAT_MESSAGE, { chats: Array<MessageType> }>
type StateType = { Messages: Array<UserDialogType> }
const initiationState: StateType = {
    Messages: [
        {
            id: 1,
            name: "Boris",
            messages: [{message: "Hello", userId: 1}, {message: "Hello", userId: 4923}, {
                message: "96548",
                userId: 4923
            }, {
                message: "Whole wound wrote at whose to style in. Figure ye innate former do so we. " +
                    "Shutters but sir yourself provided you required his. So neither related he am do believe." +
                    "Nothing but you hundred had use regular. Fat sportsmen arranging preferred can. Busy paid like is oh. " +
                    "Dinner our ask talent her age hardly. Neglected collected an attention listening do abilities. ",
                userId: 1
            }],
            img: "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
        },
        {
            id: 2,
            name: "Avis",
            messages: [{message: "Utah", userId: 2}, {
                message: "adsadada",
                userId: 4923
            }, {message: "Human", userId: 2},
                {
                    message: "Use securing confined his shutters. " +
                        "Delightful as he it acceptance an solicitude discretion reasonably. " +
                        "Carriage we husbands advanced an perceive greatest. " +
                        "Totally dearest expense on demesne ye he." +
                        " Curiosity excellent commanded in me.",
                    userId: 4923
                }],
            img: "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
        },
        {
            id: 3,
            name: "Madie",
            messages: [{message: "Utah", userId: 3}, {message: "adsadada", userId: 3}, {
                message: "Human",
                userId: 4923
            }, {
                message: "Necessary ye contented newspaper zealously breakfast he prevailed. " +
                    "Answer him easily are its barton little. Oh no though mother be things simple itself." +
                    "Dashwood horrible he strictly on as. Home fine in so am good body this hope.",
                userId: 3
            }],
            img: "https://s3.amazonaws.com/uifaces/faces/twitter/kiwiupover/128.jpg"
        },
        {
            id: 4,
            name: "Nathen",
            messages: [{message: "Uadsa", userId: 4}, {message: "adsadada", userId: 4923}, {
                message: "Human",
                userId: 4
            },
                {
                    message: "Surrounded affronting favourable no mr. Lain knew like half she yet joy." +
                        " Be than dull as seen very shot. Attachment ye so am travelling estimating projecting is. " +
                        "Off fat address attacks his besides. Suitable settling mr attended no doubtful feelings. " +
                        "Any over for say bore such sold five but hung. ",
                    userId: 4923
                }],
            img: "https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg"
        },
        {
            id: 5,
            name: "Orville",
            messages: [{message: "Utah", userId: 4923},
                {message: "Fargus", userId: 4923},
                {message: "96548", userId: 4923},
                {message: "compelling engage emulation connecting Aruban Guilder", userId: 5}],
            img: "https://s3.amazonaws.com/uifaces/faces/twitter/gt/128.jpg"
        }
    ],
};
const dialogsReducer = (state = initiationState, action: ActionType): StateType => {
    switch (action.type) {
        case ADD_CHAT_MESSAGE:
            const chatComponent: MessageType = {
                userId: action.userId,
                message: action.message
            };
            return {
                ...state, Messages: state.Messages.map(user => {
                    if (action.id === user.id.toString())
                user.messages.push( chatComponent);
                return user
                })};
    // case LOAD_ALL_CHAT_MESSAGE:
    //       return {...state, Messages:[ ...state.Messages,
    //           state.Messages.find(m=>action.id===m.id).messages.push(chatComponent)]};
default:
    return state;
}
};

export const AddMessageToChat = (id:string, message: string, myId: number):ActionType => ({
    type: ADD_CHAT_MESSAGE,
    message,
    userId: myId, id
});

export const LoadChat = (chats:MessageType[]):ActionType => ({
    type: LOAD_ALL_CHAT_MESSAGE,
    chats
});

export default dialogsReducer;
