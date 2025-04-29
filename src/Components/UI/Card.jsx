import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css'

export const Card = ({ movie }) => {
  const { Poster, imdbID, Title, Year } = movie;

  return (
    <li className="movie-card">
      <div className="card-content">
        <div className="card-image">
          <img src={Poster} alt={Title} />
        </div>
        <div className="card-details">
          <h2 className="movie-title">
            {Title} <span className="movie-year">({Year})</span>
          </h2>
        </div>
        <div className="card-actions">
          <NavLink to={`/movie/${imdbID}`}>
            <button className="watch-btn">Watch Now</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
