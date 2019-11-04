import appReduce, { unlockPage } from "./appReducer";

const state = {
  isLock: true
};

it(`isLock should be false`, () => {
  //data
  let action = unlockPage();
  //action
  let newState = appReduce(state, action);
  //expectetion
  expect(newState.isLock).toBe(false);
});
