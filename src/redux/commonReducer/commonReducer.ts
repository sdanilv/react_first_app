const SET_TOGGLE_LOADER = "SET_TOGGLE_LOADER";
// enum actionType {SET_TOGGLE_LOADER = "SET_TOGGLE_LOADER"}

type Action<K, V = void> = V extends void ? { type: K } : { type: K } & V
export type ActionType = Action<typeof SET_TOGGLE_LOADER, { toggle: boolean }>


let initiationState = {
    loaded: false
};
type StateType = typeof  initiationState

let commonReducer = (state = initiationState, action: ActionType):StateType => {
    switch (action.type) {
        case SET_TOGGLE_LOADER:
            return {...state,  loaded: action.toggle};
        default:
            return state;
    }
};

export let loading = (toggle:boolean):ActionType => ({
    type: SET_TOGGLE_LOADER,
    toggle
});

// export let  pageLoaderWraper = func =>dispatch=>{
//   debugger;
// dispatch(loading (true));
//   func.apply(this, this.arguments)
//   dispatch(loading(false));
//   }

export default commonReducer;
