import commonReducer, { loading } from "./commonReducer";

it(`loaded should be true`, () => {
  const state = { loaded: false };
  const newState = commonReducer(state, loading(true));
  expect(newState.loaded).toBe(true);
});
