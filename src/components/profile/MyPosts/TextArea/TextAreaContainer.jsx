// import React from "react";
import {
  AddPostAction,
  UpdatePostTextAreaAction
} from "../../../../redux/profileReducer";
import TextArea from "./TextArea";
// import StoreContext from "../../../../StoreContext";
import { connect } from "react-redux";

// const TextAreaContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {store => {
//         const state = store.getState();
//         let textArea =
//         const dispatch = store.dispatch;
//         // debugger;
//         let clickEvent = () => {
//           dispatch(AddPostAction());
//         };

//         let areaKeyEvent = textAreaBody => {
//           const action = UpdatePostTextAreaAction(textAreaBody);
//           dispatch(action);
//         };

//         return (
//           <TextArea
//             textArea={textArea}
//             areaKeyEvent={areaKeyEvent}
//             clickEvent={clickEvent}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = state => {
  return {
    textArea: state.ProfilePage.textArea
  };
};

let mapDispatchToProps = dispatch => {
  return {
    areaKeyEvent: textAreaBody => {
      const action = UpdatePostTextAreaAction(textAreaBody);
      dispatch(action);
    },
    clickSubmitEvent: () => {
      dispatch(AddPostAction());
    }
  };
};

let PostContainer = connect(mapStateToProps, mapDispatchToProps)(TextArea);
// debugger;
export default PostContainer;
