import {AddMessageToChat} from "redux/dialogsReducer/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "src/hoc/AuthRedirect";
import {compose} from "redux";
import {getLastMessages} from "redux/dialogsReducer/dialogsSelector";
import {destroy} from "redux-form";
import {GlobalState} from "src/redux/storeRedux";

let mapStateToProps = (state: GlobalState) => ({
    Messages: getLastMessages(state, {}),
});

export default compose(
    withAuthRedirect,
    connect(
        mapStateToProps, {AddMessageToChat, destroy})
)(Dialogs);
