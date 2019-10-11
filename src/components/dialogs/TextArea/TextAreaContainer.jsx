import React from "react";
import {
  AddChatAction,
  UpdateChatTextAreaAction
} from "../../../redux/dialogsReducer";
import TextArea from "./TextArea";
import StoreContext from "../../../StoreContext";

const TextAreaContainer = props => {
  return (
    <StoreContext.Consumer>
      {store => {
        let dispatch = store.dispatch;
        let textArea = store.getState().DialogsPage.textArea;

        let clickEvent = () => {
          const action = AddChatAction();
          dispatch(action);
        };

        let areaKeyEvent = text => {
          const action = UpdateChatTextAreaAction(text);
          dispatch(action);
        };
        return (
          <TextArea
            clickEvent={clickEvent}
            areaKeyEvent={areaKeyEvent}
            textArea={textArea}></TextArea>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default TextAreaContainer;
