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

const array = ['pWJjh99gO8M','Otu_fzjFgjg', 'I7SLWWxn0PU', 'BjXi2M4X4FE', 'ETxN9jlSCvI', 'br8obCDqKXE', 'HZFm1wN1z2c', 'YS3hAgYjqMs', 'qqXO9aGib5I', 'NFv9mcJEWdY', 'XglY0zryHRE', '_F4DPsZCLNo']
const randomVideo = array[Math.floor(Math.random() * array.length)];

// ===================
// COMPONENT
// ===================
class App extends Component {
  constructor (props) {
  super(props)
  this.state = {
    baseURL: 'https://www.youtube.com/embed/',
    videoURL: {randomVideo}
  }
  // this.handleSubmit = this.handleSubmit.bind(this)
}
// handleSubmit (event) {
//   event.preventDefault()
//   this.setState({
//     searchURL: this.state.baseURL + this.state.videoURL
//   }, () => {
//     fetch(this.state.searchURL)
//       .then(response => {
//         return response.json()
//       }).then(json => this.setState({
//
//       }),
//       err => console.log(err))
//   })
// }
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
