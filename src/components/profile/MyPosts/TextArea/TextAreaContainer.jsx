import React from "react";
import {
  AddPostAction,
  UpdatePostTextAreaAction
} from "../../../../redux/profileReducer";
import TextArea from "./TextArea";

const TextArea = props => {
  let clickEvent = () => {
    // debugger;
    props.dispatch(AddPostAction());
  };

  let areaKeyEvent = textAreaBody => {
    const action = UpdatePostTextAreaAction(textAreaBody);
    props.dispatch(action);
  };

  return (
    <TextArea
      textArea={props.textArea}
      areaKeyEvent={areaKeyEvent}
      clickEvent={clickEvent}
    />
  );
};

export default TextArea;
