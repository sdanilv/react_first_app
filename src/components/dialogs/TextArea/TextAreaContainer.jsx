// import React from "react";
import {
  AddChatAction,
  UpdateChatTextAreaAction
} from "../../../redux/dialogsReducer";
import TextArea from "./TextArea";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux"

// const TextAreaContainer = props => {
//   return (
  //   // <StoreContext.Consumer>
  //     {store => {
  //       let dispatch = store.dispatch;
  //       let textArea = store.getState().DialogsPage.textArea;

  //       
  //       return (
          // <TextArea
  //           clickEvent={clickEvent}
  //           areaKeyEvent={areaKeyEvent}
  //           textArea={textArea}
  // ></TextArea>
  //       );
  //     }}
  //   {/* </StoreContext.Consumer>/ */}
//   )
// };

let mapStateToProps = state => ({
  textArea : state.DialogsPage.textArea
});
let mapDispatchToProps = dispatch =>({
 clickEvent : () => {
            const action = AddChatAction();
            dispatch(action);
          },
  
         areaKeyEvent : text => {
            const action = UpdateChatTextAreaAction(text);
            dispatch(action);
          }
});
let TextAreaContainer = connect(mapStateToProps, mapDispatchToProps )(TextArea);
export default TextAreaContainer;
