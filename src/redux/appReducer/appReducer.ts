const UNLOCK_PAGE = "BLOCK_PAGE";

type Action<T, K = {}> = { type: T } & K
type ActionType = Action<typeof UNLOCK_PAGE, {}>
type appState = {isLock:boolean}
const initiationState : appState = {
    isLock: true
};
const appReduce = (state = initiationState, action:ActionType) => {
    switch (action.type) {
        case UNLOCK_PAGE:
            return {...state, isLock: false};
        default:
            return state;
    }
};

export const unlockPage = ():ActionType => ({
    type: UNLOCK_PAGE
});

export default appReduce;
