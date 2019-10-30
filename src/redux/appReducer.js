const UNLOCK_PAGE = "BLOCK_PAGE";
const intiationState = {
  isLock: true
};
const appReduce = (state = intiationState, action) => {
  switch (action.type) {
    case UNLOCK_PAGE:
      return { ...state, isLock: false };
    default:
      return state;
  }
};

export const unlockPage = () => ({
  type: UNLOCK_PAGE
});

export default appReduce;
