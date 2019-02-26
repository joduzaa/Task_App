import React from 'react';
import { Form, Button, FormGroup, FormControl, Col, ControlLabel, Glyphicon } from 'react-bootstrap';

import Header from './Header';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  }

  handleSignIn(event) {
    let username = this.state.username
    let password = this.state.password
    this.props.onSignIn(username, password);
  }
  
  render() {
    return (
      <div>
        <Header />
        <hr/>
        <Form horizontal onSubmit={this.handleSignIn}>

          <FormGroup controlId="formHorizontalUsername">
            <Col componentClass={ControlLabel} sm={2}>Username:</Col>
            <Col sm={3}>
            <FormControl type="text" ref="username" placeholder="enter you username" onChange={this.handleChange('username')}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>Password:</Col>
            <Col sm={3}>
            <FormControl type="password" ref="password" placeholder="enter password" onChange={this.handleChange('password')}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={3}>
            <Button type="submit" bsStyle="primary">Login <Glyphicon glyph="log-in" /></Button>
            </Col>
          </FormGroup>

        </Form>
      </div>
    )
  }
}

export default Login;