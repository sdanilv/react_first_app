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
import { compose } from "redux";

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



export default compose (withAuthRedirect, connect(
  mapStateToProps,
  mapDispatchToProps
))(Dialogs)
