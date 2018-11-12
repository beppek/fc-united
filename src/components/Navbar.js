import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/united-logo.svg';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="FC United" style={{ width: '28px' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        {/* <Link className="navbar-item" to="/team">
          The Team
        </Link>
        <Link className="navbar-item" to="/stats">
          Stats
        </Link> */}
        <Link className="navbar-item" to="/news">
          News
        </Link>
      </div>
      <div className="navbar-end">{/* Top right of navbar */}</div>
    </div>
  </nav>
);

export default Navbar;
