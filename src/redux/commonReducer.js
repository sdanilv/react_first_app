
const SET_TOGGLE_LAODER = "SET_TOGGLE_LAODER";

let initiationState = {
  loaded: false
};

let commonReduser = (state = initiationState, action) => {
  // debugger;
  switch (action.type) {
case SET_TOGGLE_LAODER:
  return{...state, loaded:action.toggle
  }
  default: return state;
}
}

export let loading = toggle =>({
  type: SET_TOGGLE_LAODER,
  toggle
})

// export let  pageLoaderWraper = func =>dispatch=>{
//   debugger;
// dispatch(loading (true));
//   func.apply(this, this.arguments)
//   dispatch(loading(false));
//   }

export default commonReduser;