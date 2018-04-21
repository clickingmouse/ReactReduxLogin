import React from 'react';
import Navigationbar from './Navigationbar'
import { Route } from 'react-router-dom'
import Greetings from './Greetings'
import SignupPage from './SignupPage'


class App extends React.Component {
  render(){
return (
<div className="container">
<Navigationbar />
{this.props.children}

  </div>
);
}
}

//export default hot(module)App;
export default App;
