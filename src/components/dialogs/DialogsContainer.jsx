// import React from "react";
import { AddMessageToChat, LoadChat } from "../../redux/dialogsReducer";
// import TextArea from "./TextArea";
// import StoreContext from "../../../StoreContext";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";
import { getChats, getLastMessages } from "../../redux/dialogsSelector";
import { destroy } from "redux-form";

let mapStateToProps = state => ({
  lastMessages: getLastMessages(state),
  chats: getChats(state)
});

export default compose(
  withAuthRedirect,
  connect(
    mapStateToProps,
    { LoadChat, AddMessageToChat, destroy }
  )
)(Dialogs);
