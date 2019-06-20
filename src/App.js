// ===================
// DEPENDENCIES
// ===================
// packages
import React, { Component } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import About from './components/About.js';
import Connect from './components/Connect.js';
import Knowledge from './components/Knowledge.js';
import Index from './components/Index.js';



// ===================
// COMPONENT
// ===================
class App extends Component {

  render() {
    return (
      <React.Fragment>
      <Router>
        <div>
          <header className="header">
            <div className="appName">
                <Link to="/"><h1>LOQUI</h1></Link>
            </div>
            <div className="headerLinks">
              <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="link-1" href="/connect/">Connect With A Career Coach</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" href="/knowledge/">Interview Knowledge</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1" href="/about/">About</Nav.Link>
              </Nav.Item>
              </Nav>
            </div>
        </header>

          <Route path="/" exact component={Index} />
          <Route path="/connect/" component={Connect} />
          <Route path="/knowledge/" component={Knowledge} />
          <Route path="/about/" component={About} />
        </div>
      </Router>
      </React.Fragment>
    );
  }
}

// ===================
// EXPORT
// ===================
export default App;
