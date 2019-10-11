import React from "react";
import {
  AddChatAction,
  UpdateChatTextAreaAction
} from "../../../redux/dialogsReducer";
import TextArea from "./TextArea";

const TextAreaContainer = props => {
  let clickEvent = () => {
    const action = AddChatAction();
    props.dispatch(action);
  };

  let areaKeyEvent = text => {
    const action = UpdateChatTextAreaAction(text);
    props.dispatch(action);
  };

  return (
    <TextArea
      clickEvent={clickEvent}
      areaKeyEvent={areaKeyEvent}
      textArea={props.textArea}></TextArea>
  );
};

export default TextArea;
