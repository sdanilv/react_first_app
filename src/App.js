import React, {useEffect} from "react";
import {Route, BrowserRouter, Redirect} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import Navbar from "./components/navbar/Navbar";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileComponent from "./components/profile/ProfileComponent" ;
import HeaderContainer from "./components/header/HeaderContainer";
import Auth from "./components/auth/Auth";
import PageLoader from "./common/PageLoader/PageLoader";
import {getMe} from "./redux/authReduce/authReduce";
import {unlockPage} from "./redux/appReducer/appReducer";
import Chat from "./components/Chat/ChatContainer";
import {setMyProfile} from "./redux/profileReducer/profileReducer";
const style = require("./App.module.css");


const App = (props) => {
console.log(props);
    useEffect(() => {
        props.getMe()
            .then((data) => {
                if (data.id) {
                    props.setMyProfile()
                        .then(props.unlockPage());
                } else props.unlockPage()
            })
    });


    if (props.isLocked) return <PageLoader/>;
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={style.appGrid}>
                <div className={style.header}>
                    <HeaderContainer/>
                </div>
                <div className={style.sidebar}>
                    <Navbar/>
                </div>
                <div className={style.content}>
                    <Route key='user' path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route key='profile' path='/profile/:userId?'
                           render={() => <ProfileComponent/>}/>
                    <Route key='dialogs' exact path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route key='root' exact path='/'
                           render={() => <Redirect to='/users'/>}/>
                    <Route key='chat' exact path='/dialogs/:userId'
                           render={() => <Chat/>}/>
                    <Route key='auth' path='/login' render={() => <Auth/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};


const mapStateToProps = (state )  => ({
    isLocked: state.App.isLock,
    myId: state.Auth.id
});
export default compose(
    connect(
        mapStateToProps,
        {getMe, unlockPage, setMyProfile}
    )
)(App);
