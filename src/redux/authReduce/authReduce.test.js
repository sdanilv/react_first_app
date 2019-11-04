import authReduce, { auth, signOut } from "./authReduce";

let initiationState = {
  id: 1,
  email: null,
  login: null,
  isSignIn: false
};

it(`isSIgnIn should be true`, () => {
  const action = auth();
  const newState = authReduce(initiationState, action);
  expect(newState.isSignIn).toBe(true);
});

it(`isSIgnIn should be false`, () => {
  let initiationState = {
    isSignIn: true
  };
  const newState = authReduce(initiationState, signOut());
  expect(newState.isSignIn).toBe(false);
});

it(`login should be null`, () => {
  let initiationState = {
    id: 1,
    email: "s@m.com",
    login: "Da",
    isSignIn: true
  };
  const newState = authReduce(initiationState, signOut());
  expect(newState.login).toBe(null);
});
