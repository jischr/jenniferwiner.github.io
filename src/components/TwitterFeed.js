import React, { Component } from 'react';
import styled from 'styled-components';
import { Timeline } from 'react-twitter-widgets'

const Wrapper = styled.div`
  margin-left: 25px;
`

class TwitterFeed extends Component {
  render() {
    return (
      <Wrapper>
        <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'jenniferwiner'
        }}
        options={{
          username: 'JenniferWiner',
          height: '450',
          width: '300'
        }}
        />
      </Wrapper>
    );
  }
}

export default TwitterFeed;
