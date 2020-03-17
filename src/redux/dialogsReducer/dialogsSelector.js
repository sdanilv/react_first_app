import {createSelector} from "reselect";

// import React from "react";


export const getDialogsMessages = state => {
    return state.DialogsPage.Messages;
};
export const getLastMessages = createSelector([getDialogsMessages], mes => {
    return mes.map(m => {
        if(m.messages!==undefined)
            return {
                id: m.id,
                name: m.name,
                lastMessages: m.messages.slice(-1)[0].message,
                ava: m.img
            };
        return null;
        }
    )
});

