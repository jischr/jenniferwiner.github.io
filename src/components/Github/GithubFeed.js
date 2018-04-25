import React from 'react';
import styled from 'styled-components';

import DisplayCommits from './DisplayCommits'

const username = 'jenniferwiner';
const repo = 'jenniferwiner.github.io';

const GithubFeed = () => (
  <div>
    <GithubUserInfo/>
    <DisplayCommits/>
  </div>
);


// Github User Info w/ Styles
const GithubUserInfo = () => (
  <HeaderGithub>
    <CommitIcon><i className="fas fa-code-branch"></i></CommitIcon>
    <a href="https://github.com/jenniferwiner">{username}</a>&nbsp;
     / <a href="https://github.com/jenniferwiner/jenniferwiner.github.io">{repo}</a>
   </HeaderGithub>
);

const HeaderGithub = styled.h1`
  margin-bottom: 25px
`

const CommitIcon = styled.span`
  color: #C6CBD1;
  padding-right: 5px;
`

export default GithubFeed;
