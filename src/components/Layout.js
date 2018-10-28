import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="FC United  | Probably the best floorball team in Victoria" />
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
