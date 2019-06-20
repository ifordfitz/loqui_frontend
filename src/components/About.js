import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class About extends Component {
  render() {
    return(
      <React.Fragment>
        <div className="aboutHeader">
          <h2>LOQUI</h2>
          <h6 className="font-italic">Latin v. to speak</h6>
        </div>
        <div className="aboutInfo">
        <br/>
          Loqui's videos allows job seekers to practice answering soft interview questions.<br/><br/>

          80% of millennials admit to being stumped by an interview question. 51% of U.S. adults are actively looking for a new job or watching for openings.
        </div>
      </React.Fragment>
    )
  }
}










export default About;
