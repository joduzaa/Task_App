import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavItem, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";

import Display from './DisplayTask'
import AddTask from './AddTask'
import RemoveTask from './RemoveTask'
import EditTask from './EditTask'
import MarkComplete from './MarkComplete'
import CompleteTask from './CompleteTask'
import UnCompleteTask from './UnCompleteTask'
import OverdueTask from './OverdueTask'
import DeadLineTask from './DeadLineTask'

class Menu extends React.Component{
  render(){
    return (
      <Router>
        <div>
          <Navbar fluid>
            <Nav>
              
              <Navbar.Header>
                <Navbar.Brand>Task App</Navbar.Brand>
              </Navbar.Header>

              <IndexLinkContainer to="/">
                <NavItem eventKey={1}>All Tasks</NavItem>
              </IndexLinkContainer>
              <LinkContainer to="/add">
                <NavItem eventKey={2}>Add Task</NavItem>
              </LinkContainer>
              <LinkContainer to="/remove">
                <NavItem eventKey={3}>Remove Task</NavItem>
              </LinkContainer>
              <LinkContainer to="/edit">
                <NavItem eventKey={4}>Edit Task</NavItem>
              </LinkContainer>
              <LinkContainer to="/mark">
                <NavItem eventKey={5}>Mark as Complete</NavItem>
              </LinkContainer>
            
              <NavDropdown eventKey={6} title="Query" id="basic-nav-dropdown">
                <LinkContainer to="/complete">
                 <NavItem eventKey={6.1}>Completed Tasks</NavItem>
                </LinkContainer>
                <LinkContainer to="/uncomplete">
                  <NavItem eventKey={6.2}>UnCompleted Tasks</NavItem>
                </LinkContainer>
                <LinkContainer to="/overdue">
                  <NavItem eventKey={6.3}>Overdue Tasks</NavItem>
                </LinkContainer>
                  <LinkContainer to="/deadline">
                <NavItem eventKey={6.4}>Task by Deadline</NavItem>
                </LinkContainer>
              </NavDropdown>
              
            </Nav>
          </Navbar>

          <Route exact path="/" component={All} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/remove" component={Remove} />
          <Route exact path="/edit" component={Edit} />
          <Route exact path="/mark" component={Mark} />
          <Route exact path="/complete" component={Complete} />
          <Route exact path="/uncomplete" component={UnComplete} />
          <Route exact path="/overdue" component={Overdue} />
          <Route exact path="/deadline" component={DeadLine} />

        </div>
      </Router>
    );
  }
}

const All = () => (
  <div>
    <h3>All Tasks</h3>
    <Display />
  </div>
);

const Add = () => (
  <div>
    <h3>Add Task</h3>
    <AddTask />
  </div>
);

const Remove = () => (
  <div>
    <h3>Remove Task</h3>
    <RemoveTask />
  </div>
);

const Edit = () => (
  <div>
    <h3>Edit Task</h3>
    <EditTask />
  </div>
);

const Mark = () => (
  <div>
    <h3>Mark Task as Complete</h3>
    <MarkComplete />
  </div>
);

const Complete = () => (
  <div>
    <h3>Completed Tasks</h3>
    <CompleteTask />
  </div>
);

const UnComplete = () => (
  <div>
    <h3>Uncompleted Tasks</h3>
    <UnCompleteTask />
  </div>
);

const Overdue = () => (
  <div>
    <h3>Overdue Tasks</h3>
    <OverdueTask />
  </div>
);

const DeadLine = () => (
  <div>
    <h3>Tasks by Deadline</h3>
    <DeadLineTask />
  </div>
);

export default Menu;