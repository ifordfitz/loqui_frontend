import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Nav, Button } from 'react-bootstrap';


class Index extends Component {
    constructor (props) {
        super(props)
        this.state = {
          videoURL: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
        console.log('a click happened');
        fetch('https://loqui-backend.herokuapp.com/')
          .then(response => {
            return response.json()
          }).then(json => {
              const randomVideo = json[Math.floor(Math.random() * json.length)];
              let newURL = '//fast.wistia.net/embed/iframe/' + randomVideo.embedURL
              this.setState({
                  videoURL: newURL
              })
          },
          err => console.log(err))
    }


  render() {
    return(
      <div>
        <body>
          <div className="appPhrase">
            <h5>Practice Your Job Interviews With Loqui's Videos!</h5>
          </div>
          <div className="genIQ">
            <Button onClick={this.handleClick} variant="primary" size="lg">
              Generate Interview Question
            </Button>
          </div>
          <div className="youtubeVideo">
          <iframe src={this.state.videoURL} allowtransparency="true" frameborder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="620" height="349"></iframe>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>
          </div>
        </body>
      </div>
    )
  }
}










export default Index;
