import React from 'react';
import { Table, thead, tbody } from 'react-bootstrap';
import { Form, Button, FormGroup, FormControl, Col, ControlLabel, Glyphicon } from 'react-bootstrap';

class DeadLineTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tasks: [], end_date: ''};
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
    var varURL = "/task/" + this.state.end_date;
    event.preventDefault();
    fetch(varURL)
    .then(res => res.json())
    .then(tasks => this.setState({ tasks }));
  }
  
  render() {
    return (
      <div>
        <br/>
        <h4>Enter completion date</h4>
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="formHorizontalComplete">
            <Col componentClass={ControlLabel} sm={2}>Date :</Col>
            <Col sm={3}>
            <FormControl type="date" onChange={this.handleChange('end_date')}/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={3}>
            <Button type="submit" bsStyle="primary">Search <Glyphicon glyph="search" /></Button>
            </Col>
          </FormGroup>
        </Form>

        <h3>Tasks as per Query</h3>
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Completion Date</th>
            <th>Completed</th>
          </tr>
          </thead>
          <tbody>
            {this.state.tasks.map(task =>
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.end_date.split('T')[0]}</td>
              <td>{"" + task.complete}</td>
            </tr>  
            )}
          </tbody>
        </Table>

      </div>
    );
  }
}

export default DeadLineTask;
