import React from "react";
import style from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileComponent from "./components/profile/ProfileComponent";
import HeaderContainer from "./components/header/HeaderContainer";
import Auth from "./components/auth/Auth";
import PageLoader from "./common/PageLoader/PageLoader";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { getMe } from "./redux/authReduce/authReduce";
import { unlockPage } from "./redux/appReducer/appReducer";
import Chat from "./components/Chat/ChatContainer";

class App extends React.Component {
  componentDidMount() {
    this.props.getMe().then(this.props.unlockPage);
  }

  render() {
    if (this.props.isLocked) return <PageLoader />;
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className={style.appGrid}>
          <div className={style.header}>
            <HeaderContainer />
          </div>
          <div className={style.sidebar}>
            <Navbar />
          </div>
          <div className={style.content}>
            <Route key='user' path='/users' render={() => <UsersContainer />} />
            <Route
              key='profile'
              path='/profile/:userId?'
              render={() => <ProfileComponent />}
            />
            <Route
              key='dialogs'
              exact
              path='/dialogs'
              render={() => <DialogsContainer />}
            />
            <Route
              key='root'
              exact
              path='/'
              render={() => <Redirect to='/users' />}
            />
            <Route
                key='chat'
                exact
                path='/dialogs/:userId'
                render={() => <Chat />}
            />

            <Route key='auth' path='/login' render={() => <Auth />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isLocked: state.App.isLock,
  myId: state.Auth.id
});
export default compose(
  connect(
    mapStateToProps,
    { getMe, unlockPage }
  )
)(App);
