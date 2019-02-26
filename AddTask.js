import React from 'react';
import { Form, Button, FormGroup, FormControl, Col, ControlLabel, Glyphicon } from 'react-bootstrap';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', description: '', end_date: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  }

  handleSubmit(event) {
    var data = {
        title: this.state.title,
        description: this.state.description,
        end_date: this.state.end_date
    }
    event.preventDefault();
    fetch('/task', {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{'Content-Type': 'application/json'}
    })
    if (alert('The following was added: ' + data.title)){}
    else this.setState({title: '', description: '', end_date: ''});
  }
  
  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        
        <FormGroup controlId="formHorizontalTitle">
          <Col componentClass={ControlLabel} sm={2}>Title:</Col>
          <Col sm={3}>
          <FormControl type="text" placeholder="Enter new title >>>" value={this.state.title} onChange={this.handleChange('title')} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalDescription">
          <Col componentClass={ControlLabel} sm={2}>Description:</Col>
          <Col sm={3}>
          <FormControl type="text" placeholder="Enter new description >>>" value={this.state.description} onChange={this.handleChange('description')} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalComplete">
          <Col componentClass={ControlLabel} sm={2}>Complete by:</Col>
          <Col sm={3}>
          <FormControl type="date" value={this.state.end_date} onChange={this.handleChange('end_date')} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={3}>
          <Button type="submit" bsStyle="success">Add <Glyphicon glyph="ok" /></Button>
          </Col>
        </FormGroup>

      </Form>
    );
  }
}

export default AddTask;
