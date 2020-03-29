import {AddMessageToChat} from "redux/dialogsReducer/dialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "src/hoc/AuthRedirect";
import {compose} from "redux";
import {getLastMessage} from "redux/dialogsReducer/dialogsSelector";
import {destroy} from "redux-form";
import {GlobalState} from "src/redux/storeRedux";


const mapStateToProps = (state: GlobalState) => ({
    Messages: getLastMessage(state),
});
const mapDispatchToProps  = {AddMessageToChat, destroy};

type  ReturnMapStateToProps = ReturnType<typeof mapStateToProps>
type MapDispatchToProps = typeof  mapDispatchToProps
export type DialogsProps = ReturnMapStateToProps & MapDispatchToProps

export default compose<DialogsProps>(
    withAuthRedirect,
    connect(
        mapStateToProps, mapDispatchToProps)
)(Dialogs);
