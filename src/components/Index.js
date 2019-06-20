import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Button } from 'react-bootstrap';


class Index extends Component {
  render() {
    return(
      <div>
        <body>
          <div className="appPhrase">
            <h5>Practice Your Job Interviews With Loqui's Videos!</h5>
          </div>
          <div className="genIQ">
            <Button variant="primary" size="lg">
              Generate Interview Question
            </Button>
          </div>
          <div className="youtubeVideo">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pWJjh99gO8M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </body>
      </div>
    )
  }
}










export default Index;
