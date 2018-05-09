import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';

const username = 'jenniferwiner';
const repo = 'jenniferwiner.github.io';


const githubSVG = {
  paddingRight: '25px'
}

class DisplayCommits extends Component {
  constructor() {
    super()

    this.state = {
      commits: []
    }
  }

  componentDidMount() {
    this.fetchCommits();
  }

  fetchCommits() {
    const req = new Request(`https://api.github.com/repos/${username}/${repo}/events`);
    fetch(req)
    .then(res => res.json())
    .then(commits => this.setState({ commits }) )
  }

  render() {
    return (
    <CommitsList commits={this.state.commits}/>
  );
  }
}

const CommitsList = ({
  commits
}) => (
   commits.map((commit, index) => {
     if (index < 3 && commit.type === 'PushEvent') {
       return (
         <div key={index}>
           <div>
              <svg style={githubSVG} viewBox="0 0 14 16" version="1.1" width="12" height="14" aria-hidden="true">
                <path fill="#C6CBD1" d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"></path>
              </svg>
             <span>Commits on {moment(commit.created_at).format("MMM DD, YYYY")}</span>
           </div>
           <CommitMessages
             messages={commit.payload.commits}
             createdAt={moment(commit.created_at).startOf('day').fromNow()}
           />
        </div>
      )
    }
   })
);

// Commit Messages w/ Styles
const CommitMessages = ({
  messages,
  createdAt
}) => (
  <CommitsInner>
    { messages &&
      messages.map((message, index) => {
        return (
          <Message key={index}>
            <p>{message.message}</p>
            <p><span>jenniferwiner</span> commited {createdAt}</p>
          </Message>
        )
      })
    }
  </CommitsInner>
);

const CommitsInner = styled.div`
  margin-top: 10px;
  margin-left: 20px;
}
`
const Message = styled.div`
  border: 1px solid #eaecef;
  padding: 8px 10px;
  width: 375px;
  margin-bottom: 10px;
  p:first-child {
    color: #444d56;
    font-size: 14px;
    font-family: "Open-Sans", sans-serif;
    font-weight: 600;
  }
  p:nth-child(2) {
    color: #586069;
    font-size: 12px;
    span {
      font-family: "Open-Sans", sans-serif;
      font-weight: 600;
    }
  }
`

export default DisplayCommits
