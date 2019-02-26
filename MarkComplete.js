import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

class MarkComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tasks: [], id: '', selected: ''};
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
    var varURL = "/task/complete/" + this.state.id;
    event.preventDefault();
    fetch(varURL, {
      method: 'PUT'
    })
    if (alert('The task was completed')){}
    else this.setState({tasks: [], id: '', selected: ''});
    this.componentDidMount()
  }
  
  componentDidMount() {
    fetch('/task/uncomplete')
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
  } 

  render() {
    return (
      <div>
        <br/>  
        <h4>Choose task to mark as completed</h4>      
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
        <Button bsStyle="success" type="submit" onClick={this.handleSubmit}>Mark as Completed <Glyphicon glyph="check" /></Button>
      </div>
    );
  }
}

export default MarkComplete;