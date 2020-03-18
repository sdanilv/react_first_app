import {compose } from "redux"
import {connect} from "react-redux";
import Chat from "./Chat";
import {destroy} from "redux-form";
import {getDialogsMessages} from "redux/dialogsReducer/dialogsSelector";
import {AddMessageToChat} from "redux/dialogsReducer/dialogsReducer";
import {withRouter } from "react-router-dom"
import {getMyId} from "redux/authReduce/authSelector";
import {GlobalState} from "redux/storeRedux";

const mapsStateToProps = (state: GlobalState) =>({
  Messages: getDialogsMessages(state),
  myId: getMyId(state),
});
export default compose(withRouter, connect(mapsStateToProps,  {AddMessageToChat, destroy}))(Chat)
