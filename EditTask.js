import React from 'react';
import { Form, Button, FormGroup, FormControl, Col, ControlLabel, Glyphicon } from 'react-bootstrap';

class EditTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tasks: [], edit:[], id: '', selected: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  }

  handleSubmit(event) {
    var varURL = "/task/show/" + this.state.id;
    event.preventDefault();
    fetch(varURL)
    .then(res => res.json())
    .then(edit => this.setState({ edit }));
  }
    
  componentDidMount() {
      fetch('/task')
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
  } 
  
  handleUpdate(event) {
    var data = {
        title: this.state.title,
        description: this.state.description,
        complete: this.state.complete, 
        end_date: this.state.end_date
    }
    var varURL = "/task/" + this.state.id;
    event.preventDefault();
    fetch(varURL, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers:{'Content-Type': 'application/json'}
    })
    if (alert('The task was updated')){}
    else this.setState({ edit:[], id: '', selected: ''});  
  }

  render() {
    return (
      <div>
        <br/>  
        <h4>Choose task to edit</h4>
        {this.state.tasks.map(task =>
          <div key={task._id}>
            <input
              type="radio" value={task._id} 
              onChange={(e) => this.setState({ selected: e.target.value, id: task._id })}
              checked={this.state.selected === task._id}
              />
            {" " + task.title}
          </div>
        )}      
      
        <br/>
        <Button bsStyle="primary" type="submit" onClick={this.handleSubmit}>Fetch Task <Glyphicon glyph="search" /></Button>
        <br/>
        <br/>

      {this.state.edit.map(edit =>
        <Form horizontal key={edit._id} onSubmit={this.handleUpdate}>
          
          <h3>Task as per Query</h3>
          <br/>
          
            <FormGroup controlId="formHorizontalTitle">
              <Col componentClass={ControlLabel} sm={2}>Title:</Col>
              <Col sm={3}>
              <FormControl type="text" defaultValue={edit.title} onChange={this.handleChange('title')}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalDescription">
              <Col componentClass={ControlLabel} sm={2}>Description:</Col>
              <Col sm={3}>
              <FormControl type="text" defaultValue={edit.description} onChange={this.handleChange('description')}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalDone">
              <Col componentClass={ControlLabel} sm={2}>Done:</Col>
              <Col sm={3}>
              <FormControl type="Boolean" defaultValue={edit.complete} onChange={this.handleChange('complete')}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalComplete">
              <Col componentClass={ControlLabel} sm={2}>Complete by:</Col>
              <Col sm={3}>
              <FormControl type="date" defaultValue={edit.end_date.split('T')[0]} onChange={this.handleChange('end_date')}/>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={3}>
              <Button type="submit" bsStyle="success">Update <Glyphicon glyph="refresh" /></Button>
              </Col>
            </FormGroup>
      
        </Form>
      )}
      </div> 
    );
  }
}

export default EditTask;
