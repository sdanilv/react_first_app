import React from "react";
import { createSelector } from "reselect";
import Dialog from "../components/dialogs/dialog/Dialog";

const getLastMessagesSelector = state => {
  return state.DialogsPage.lastMessages;
};
export const getChats = state => {
  return state.DialogsPage.chats;
};

export const getLastMessages = createSelector(
  getLastMessagesSelector,
  lastMessages => {
    return lastMessages.map((d, index) => (
      <Dialog
        key={index}
        name={d.name}
        lastMessage={d.lastMessage}
        ava={d.img}
      />
    ));
  }
);
