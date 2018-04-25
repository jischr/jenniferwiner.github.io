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
      </div>
      <div className="column">
        <Info/>
      </div>
    </div>
  </div>
);

export default Footer;
