import React from 'react';
import SignupForm from './SignupForm';


class SignupPage extends React.Component {
render (){
return (
  <div className="row">
<div className="col-md-4 col-md-offset-4">
<SignupForm />
  </div>
  <h1>Sign up page </h1>
  </div>
);

}


}

export default SignupPage;
