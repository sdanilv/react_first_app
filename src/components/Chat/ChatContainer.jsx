import {compose } from "redux"
import {connect} from "react-redux";
import Chat from "./Chat";
import {destroy} from "redux-form";
import {getMessages} from "../../redux/dialogsReducer/dialogsSelector";
import {AddMessageToChat} from "../../redux/dialogsReducer/dialogsReducer";
import {withRouter } from "react-router-dom"
import {myId} from "../../redux/authReduce/authSelector";

const mapsStateToProps = state =>({
  Messages: getMessages(state),
  myId: myId(state),
});
export default compose(withRouter, connect(mapsStateToProps,  {AddMessageToChat, destroy}))(Chat)
