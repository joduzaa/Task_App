import React, { Component } from 'react';
import { Glyphicon } from 'react-bootstrap';

import Header from './components/Header';
import Menu from './components/Menu';
import Login from './components/Login';

const Welcome = ({user, onSignOut})=> {
  return (
    <div>
    	<Header/>
    	<br/>
   		<p>{"Hello " + user.username + " --- " }<a onClick={onSignOut}>Sign out <Glyphicon glyph="log-out" /></a></p>
    	<br/>    	
    	<Menu />
    </div>
  )
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {user: null}
  }

  signIn(username, password) {
  	(username === 'JohnZ' && password === 'Welcome1!') ?
    	this.setState({ user: {	username, password }})
      	:
      	alert("Please try again")
  }
  
  signOut() {
    this.setState({user: null})
  }

render() {
	return (
	    <div className="App">
		    <div>
			    { 
			    (this.state.user) ? 
			    <Welcome 
			    user={this.state.user} 
			    onSignOut={this.signOut.bind(this)}/>
			    :
			    <Login 
			    onSignIn={this.signIn.bind(this)}/>
			    }
		    </div>
	    </div>
    );
  }
}

export default App;
