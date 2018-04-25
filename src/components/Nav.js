import React from 'react';
import styled from 'styled-components';
import { NavItems } from '../NavItems';

const NavSquare = styled.div`
  background-color: ${props => props.color};
  font-size: 20px;
  width: 60px;
  height: 60px;
  position: relative;
  transition: top ease 0.5s;
  left: 0;
  @media (max-width: 800px) {
    width: 45px;
    height: 45px;
  }
`
const Wrapper = styled.div`
  transition-duration: 0.2s;
  position: relative;
  width: 120px;
  margin-bottom: 15px;
  &:hover ${NavSquare}, &:active ${NavSquare} {
    background-color: white;
  }
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: inline-block;
  }
`

const Text = styled.p`
  padding-top: 15px;
  margin-left: 25px;
`

const Nav = ({
  onNavClick
}) => (
  <div className="Nav">
    {  NavItems.map((navItem, index) => {
      return (
        <Wrapper key={index} hovcolor={navItem.hovcolor} onClick={() => onNavClick(index)}>
          <NavSquare color={navItem.color}>
            <Text>{navItem.text}</Text>
          </NavSquare>
        </Wrapper>
        )
      })
    }
  </div>
);

export default Nav;
