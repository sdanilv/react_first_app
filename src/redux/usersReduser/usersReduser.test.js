import usersReduser, {
  setUsers,
  setCurrentPage,
  setAllUsersCount,
  setCountUsersInPage,
  addInBlockButtons,
  removeFromBlockButtons
} from "./usersReduser";

let initiationState = {
  users: [],
  allUsersCount: 0,
  countUsersInPage: 6,
  currentPage: 3,
  blockedSubButtons: [],
  loaded: false
};

it(`users length should be 0`, () => {
  const action = setUsers([{}, {}, {}]);
  const nState = usersReduser(initiationState, action);
  expect(nState.users.length).toBe(3);
});

it(`users currentPage should be 1`, () => {
  const action = setCurrentPage(1);
  const nState = usersReduser(initiationState, action);
  expect(nState.currentPage).toBe(1);
});

it(`users allUsersCount should be 1`, () => {
  const action = setAllUsersCount(1);
  const nState = usersReduser(initiationState, action);
  expect(nState.allUsersCount).toBe(1);
});

it(`users countUsersInPage should be 1`, () => {
  const action = setCountUsersInPage(1);
  const nState = usersReduser(initiationState, action);
  expect(nState.countUsersInPage).toBe(1);
});

it(`users blockedSubButtons length should be 1`, () => {
  const action = addInBlockButtons(1);
  const nState = usersReduser(initiationState, action);
  expect(nState.blockedSubButtons.length).toBe(1);
});
it(`users blockedSubButtons length should be 0`, () => {
  const action = addInBlockButtons(1);
  let nState = usersReduser(initiationState, action);
  nState = usersReduser(nState, removeFromBlockButtons(1));
  expect(nState.blockedSubButtons.length).toBe(0);
});
