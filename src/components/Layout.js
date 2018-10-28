import React from 'react';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="FC United  | Probably the best floorball team in Victoria">
      <meta
        name="description"
        content="FC United, Probably the best floorball team in Victoria"
      />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Helmet>
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
