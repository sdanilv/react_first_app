import React from 'react';
import {connect} from 'react-redux';
import Auth from '../components/auth/Auth';

const mapStateToProps = (state)=>({
isSignIn: state.Auth.isSignIn
});

export const withAuthRedirect = (Component)=>{
 const AuthRedirect = (props)=>{
   if(!props.isSignIn) return <Auth />
  return <Component {...props}/>
}
return connect(mapStateToProps)(AuthRedirect)
}

