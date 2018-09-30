import React from 'react';

import TwitterFeed from '../components/TwitterFeed';
import GithubFeed from '../components/Github/GithubFeed';
import Info from '../components/Info';

const Footer = () => (
  <div className="footer">
    <div className="columns">
      <div className="column">
        <TwitterFeed/>
      </div>
      <div className="column">
        <GithubFeed/>
        <h1>&#60;&#60;&#60; Where to find me &#62;&#62;&#62;</h1>
        <br/>
        <h1>Meetup Host:</h1>
        <ul>
          <li>Women Who Code JavaScript Study Group<br/>// 1st Monday at 6 PM</li>
          <li>Boulder React Coding Night<br/>3rd Thursday at 6 PM</li>
        </ul>
      </div>
      <div className="column">
        <Info/>
      </div>
    </div>
  </div>
);

export default Footer;
