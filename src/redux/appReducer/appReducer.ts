// const UNLOCK_PAGE = "BLOCK_PAGE";
enum actionTypes  {UNLOCK_PAGE="BLOCK_PAGE" }
type appState = {isLock:boolean}
const intiationState : appState = {
    isLock: true
};
const appReduce = (state = intiationState, action) => {
    switch (action.type) {
        case actionTypes.UNLOCK_PAGE:
            return {...state, isLock: false};
        default:
            return state;
    }
};

export const unlockPage = ():{type:actionTypes} => ({
    type: actionTypes.UNLOCK_PAGE
});

export default appReduce;
