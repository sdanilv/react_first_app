import authReduce, {auth, signOut} from "./authReduce";

describe(`authReduce`, () => {
    it(`isSIgnIn should be true`, () => {
      let initiationState = {
        isSignIn: false
      };
        const newState = authReduce(initiationState, auth());
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
            login: "Da",
        };
        const newState = authReduce(initiationState, signOut());
        expect(newState.login).toBeNull();
    });
});