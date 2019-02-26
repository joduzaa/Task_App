import React from 'react';
import { Table, thead, tbody } from 'react-bootstrap';

class Display extends React.Component {

  state = {tasks: []}
  
  componentDidMount() {
    fetch('/task')
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
	}	

 render() {
    return (
      <div>
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

export default Display;
