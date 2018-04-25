import React from 'react';
import Bulma from '../bulma.png'

const reactLink = {
  color: '#61dafb',
  fontSize: '35px'
}
const bulmaLogo = {
  maxWidth: '70%'
}

const Info = () => (
  <div>
    <h1>Social:</h1>
    <p><a href="https://www.linkedin.com/in/jenniferwiner/"><i className="fab fa-linkedin"></i> /jenniferwiner</a></p>
    <p><a href="https://github.com/jenniferwiner"><i className="fab fa-github"></i> /jenniferwiner</a></p>
    <p><a href="https://twitter.com/JenniferWiner"><i className="fab fa-twitter"></i> @jenniferwiner</a></p>
    <br/>
    <h1>Many Thanks To:</h1>
    <p>
      <a style={reactLink} href="https://reactjs.org/">
        <i className="fab fa-react"></i>&nbsp;React
      </a>
    </p>
    <a href="https://bulma.io">
      <img style={bulmaLogo} src={Bulma} alt="Made with Bulma"/>
    </a>
    <br/>
    <p>Jennifer Winer &copy; 2018 All Rights Reserved.</p>
  </div>
);

export default Info;
