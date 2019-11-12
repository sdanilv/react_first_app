import React from "react";
import style from "./Chat.module.css";
import {co } from "redux"
import {connect} from "react-redux";
import Chat from "./Chat";

const mapsStateToProps = state =>({
  Messages: state.DialogsPage.Messages
});
export default connect(mapsStateToProps, )(Chat)
