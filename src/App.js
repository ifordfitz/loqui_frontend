// ===================
// DEPENDENCIES
// ===================
// packages
import React, { Component } from 'react';
import { Nav, Button } from 'react-bootstrap';

// ===================
// COMPONENT
// ===================
class App extends Component {
  render() {
    return (
      <React.Fragment>
      <header className="header">
        <div className="appName">
            <h1>LOQUI</h1>
        </div>
        <div>
          <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1">Interview Knowledge</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">About</Nav.Link>
          </Nav.Item>
          </Nav>
        </div>
      </header>
      <body>
        <div className="appPhrase">
          <h5>Practice Your Job Interviews With Loqui's Videos!</h5>
        </div>
        <div className="genIQ">
          <Button variant="primary" size="lg">
            Generate Interview Question
          </Button>
        </div>
      </body>
      </React.Fragment>
    );
  }
}

// ===================
// EXPORT
// ===================
export default App;
