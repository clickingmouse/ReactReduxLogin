import React from 'react';
import timezones from '../data/timezones';
import map from 'lodash/map';
//import axios from 'axios';
import PropTypes from 'prop-types'


class SignupForm extends React.Component {
  constructor(props){
super(props);
this.state ={
  username: '',
  email:'',
  password:'',
  passwordConfirmation:'',
  timezone:''
}
this.onChange=this.onChange.bind(this);
this.onSubmit=this.onSubmit.bind(this);

  }

onSubmit(e){
e.preventDefault();
//console.log(this.state);
//axios.post('/api/users', {user:this.state});
this.props.userSignupRequest(this.state);

}

onChange(e){
  this.setState({[e.target.name]:e.target.value})
}

render(){
const options = map(timezones,(val,key)=>{
return(  <option key={val} value={val}>{key}</option>)
})


return (
<form onSubmit={this.onSubmit}>
<h1>Join our community!</h1>

<div className="form-group">
<label className ="control-label">Username</label>
<input
value={this.state.username}
onChange={this.onChange}
type="text"
name="username"
className="form-control"
/>

<label className ="control-label">E-mail</label>
<input
value={this.state.email}
onChange={this.onChange}
type="text"
name="email"
className="form-control"
/>


<label className ="control-label">Password </label>
<input
value={this.state.password}
onChange={this.onChange}
type="password"
name="password"
className="form-control"
/>
<label className ="control-label">Password Confirmation</label>
<input
value={this.state.passwordConfirmation}
onChange={this.onChange}
type="password"
name="passwordConfirmation"
className="form-control"
/>

<label className ="control-label">Time Zone</label>
<select
value={this.state.timezone}
onChange={this.onChange}
type="text"
name="timezone"
className="form-control"
>
<option value="disabled"> Choose your time zone </option>
{options}
</select>



</div>
<div className="form-group">
<button className="btn btn-primary btn-lg">
Sign up
</button>
</div>



</form>
)
}

}

SignupForm.propTypes={
userSignupRequest: PropTypes.func.isRequired

}



export default SignupForm
