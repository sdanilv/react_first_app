// import React from "react";
// import { createSelector } from "reselect";
// import Dialog from "../../components/dialogs/dialog/Dialog";

export const getLastMessages = state => {
  return state.DialogsPage.lastMessages;
};
export const getChats = state => {
  return state.DialogsPage.chats;
};
