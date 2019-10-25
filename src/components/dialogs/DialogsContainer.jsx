// import React from "react";
import { AddMessageToChat, LoadChat } from "../../redux/dialogsReducer";
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

export default compose(
  withAuthRedirect,
  connect(
    mapStateToProps,
    { LoadChat, AddMessageToChat }
  )
)(Dialogs);
