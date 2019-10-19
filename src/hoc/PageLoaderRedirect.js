import React from 'react';
import {connect} from 'react-redux';
import Auth from '../components/auth/Auth';
import PageLoader from '../common/PageLoader/PageLoader';

const mapStateToProps = (state)=>({
isSignIn: state.Auth.isSignIn
});

export const withPageLoader = (Component)=>{
 const AuthRedirect = (props)=>{
   if(!props.isSignIn) return <PageLoader />
  return <Component {...props}/>
}
return connect(mapStateToProps)(AuthRedirect)
}

