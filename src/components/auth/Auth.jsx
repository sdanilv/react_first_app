import React from 'react';
const Auth = (props) => {
  return (
    <center>
      <h2>Authorization</h2>
      <form action="auth" method="post">
        <div>Login</div>
        <div><input type="text" name="" id="" /></div>
        <div>Password</div>
        <div><input type="password" /></div>
      </form>
    </center>
  )
}

export default Auth;