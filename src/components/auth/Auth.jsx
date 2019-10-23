import React from "react";
import {} from "redux-form";
const Auth = props => {
  return (
    <center>
      <h2>Authorization</h2>
      <form action='auth' method='post'>
        <div>
          <input placeholder='Login' type='text' name='' id='' />
        </div>
        <div>
          <input placeholder='Password' type='password' />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </center>
  );
};

export default Auth;
