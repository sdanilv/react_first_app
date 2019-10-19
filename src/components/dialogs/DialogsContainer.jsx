// import React from "react";
import {
  AddChatAction,
  UpdateChatTextAreaAction
} from "../../redux/dialogsReducer";
// import TextArea from "./TextArea";
// import StoreContext from "../../../StoreContext";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/AuthRedirect";

let mapStateToProps = state => ({
  textArea: state.DialogsPage.textArea,
  lastMessages: state.DialogsPage.lastMessages,
  chats: state.DialogsPage.chats
});
let mapDispatchToProps = dispatch => ({
  clickEvent: () => {
    // debugger;
    const action = AddChatAction();
    dispatch(action);
  },

  areaKeyEvent: text => {
    // debugger;
    const action = UpdateChatTextAreaAction(text);
    dispatch(action);
  }
});


let TextAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthRedirect(Dialogs));
export default TextAreaContainer;
