// import React from 'react';
import '../App.css'
import styled from 'styled-components';
import Logo from '../assets/JW_logo.png';

const Name = styled.div`
  height: 300px;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 25px;
  margin-top: 25px;
  @media (max-width: 1100px) {
    height: 200px;
  }
  @media (max-width: 800px) {
    height: 125px;
  }
`


export default Name;
