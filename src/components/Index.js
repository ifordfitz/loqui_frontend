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
          <iframe src="//fast.wistia.net/embed/iframe/gx2i8iv702" allowtransparency="true" frameborder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>
          </div>
        </body>
      </div>
    )
  }
}










export default Index;
