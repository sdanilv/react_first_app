import React from "react";
import {
  AddPostAction,
  UpdatePostTextAreaAction
} from "../../../../redux/profileReducer";
import TextArea from "./TextArea";
import StoreContext from "../../../../StoreContext";

const TextAreaContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const state = store.getState();
        let textArea = state.ProfilePage.textArea;
        const dispatch = store.dispatch;
        // debugger;
        let clickEvent = () => {
          dispatch(AddPostAction());
        };

        let areaKeyEvent = textAreaBody => {
          const action = UpdatePostTextAreaAction(textAreaBody);
          dispatch(action);
        };

        return (
          <TextArea
            textArea={textArea}
            areaKeyEvent={areaKeyEvent}
            clickEvent={clickEvent}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default TextAreaContainer;
