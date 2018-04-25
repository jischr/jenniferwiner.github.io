import React from 'react';
import SlantSection from './SlantSection';

import { NavItems } from '../NavItems.js';

const Slants = () => (
  NavItems.map((navItem, index) => {
    return (
      <SlantSection id={navItem.text} key={index} color={navItem.color}></SlantSection>
    );
  })
);

export default Slants;
