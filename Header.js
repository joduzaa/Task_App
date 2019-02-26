import React from 'react';
import logo from './187849.jpg';
import { Image, Row, Col } from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
    	<div>
    		<Row>
	    		<Col sm={2}>
	      			<Image src={logo} width="130" height="auto" alt="logo"/>
	    		</Col>
    			<Col sm={3}>
		    		<br/>
		    		<br/>
			  		<h1>John's Task App</h1>
		    	</Col>
	  		</Row>
    	</div>
    );
  }
}

export default Header;
