import {createSelector} from "reselect";
import {GlobalState} from "src/redux/storeRedux";
import {UserDialogType} from "redux/dialogsReducer/dialogsReducer";

export const getDialogsMessages = (state: GlobalState): Array<UserDialogType> => {
    return state.DialogsPage.Messages;
};
type LastMessage = {
    id: number,
    name: string,
    lastMessages: string,
    ava: string
} | null
export const getLastMessages = createSelector<GlobalState, {}, Array<UserDialogType>, Array<LastMessage>>
([getDialogsMessages], (mes: Array<UserDialogType>) => {
    return mes.map(m => {
            if (m.messages !== undefined)
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

