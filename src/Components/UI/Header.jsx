import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  const getNavlinkStyle = ({ isActive }) => ({
    backgroundColor: isActive ? '#ff4c29' : '',

  });

  return (
    <header className="section-navbar">
      <section className="top_txt">
        <div className="head container">
          <div className="head_txt">
            <p>Free shipping, 30-day return or refund guarantee.</p>
          </div>
          <div className="sign_in_up">
            <NavLink to="/">SIGN IN</NavLink>
            <NavLink to="/">SIGN UP</NavLink>
          </div>
        </div>
      </section>

      <div className="container nav-container">
        <div className="navbar-brand">
          <NavLink to="/">
            <img src="/images/logo.png" alt="MovieSphere Logo" className="logo-img" />
          </NavLink>
        </div>

        <nav className="navbar">
          <ul>
            <li className="nav-item">
              <NavLink to="/" className="nav-link" style={getNavlinkStyle}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" style={getNavlinkStyle}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movie" className="nav-link" style={getNavlinkStyle}>Movie</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" style={getNavlinkStyle}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
