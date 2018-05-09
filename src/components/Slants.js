import React from 'react';
import SlantSection from './SlantSection';

import { NavItems } from '../NavItems.js';

const Slants = () => (
  NavItems.map((navItem, index) => {
    return (
      <SlantSection id={navItem.text} key={index} color={navItem.color} width={navItem.width}></SlantSection>
    );
  })
);

export default Slants;
