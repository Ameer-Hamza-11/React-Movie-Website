import React from 'react';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer-container container">
        <div className="content_1">
          <img src="/images/logo.png" alt="MovieSphere Logo" className="footer-logo" />
          <p>
            Welcome to MovieSphere, <br />
            your ultimate destination for <br />
            the latest blockbuster movies and shows!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="Payment Methods" className="payment-cards" />
        </div>

        {/* Movie Categories */}
        <div className="content_2">
          <h4>Movie Categories</h4>
          <NavLink to="/">Action</NavLink>
          <NavLink to="/">Drama</NavLink>
          <NavLink to="/">Comedy</NavLink>
          <NavLink to="/">Thriller</NavLink>
          <NavLink to="/">Romance</NavLink>
        </div>

        {/* Movie Experience */}
        <div className="content_3">
          <h4>Movie Experience</h4>
          <NavLink to="/locations">Cinema Locations</NavLink>
          <NavLink to="/screening">Screening Times</NavLink>
          <NavLink to="/book-tickets">Book Tickets</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>

        {/* Newsletter */}
        <div className="content_4">
          <h4>NEWSLETTER</h4>
          <p>
            Be the first to know about new <br />
            movie releases, events & offers!
          </p>
          <div className="f-mail">
            <input type="email" placeholder="Your Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>

      {/* Footer credit */}
      <div className="f-design">
        <div className="f-design-txt">
          <p>Design and Code by Ameer Hamza</p>
        </div>
      </div>
    </footer>
  );
};
