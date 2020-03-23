import {createSelector} from "reselect";
import {GlobalState} from "redux/storeRedux";
import {DialogType} from "redux/dialogsReducer/dialogsReducer";
import { Selector } from "react-redux";

// import React from "react";

export type LastMessageType = {id:number, name:string, lastMessage: string, ava:string}

export const getDialogsMessages:Selector<GlobalState, Array<DialogType>> = (state)  => {
    return state.DialogsPage.Messages;
};
export const getLastMessage = createSelector<GlobalState, Array<DialogType>,  Array<LastMessageType |null>>([getDialogsMessages],
        mes => {
    return mes.map(m => {
            if (m.messages !== undefined)
                return {
                    id: m.id,
                    name: m.name,
                    lastMessage: m.messages.slice(-1)[0].message,
                    ava: m.img
                };
            return null;
        }
    )
});

