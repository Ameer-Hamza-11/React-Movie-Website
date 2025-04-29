import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Card } from '../Components/UI/Card';
import '../Components/UI/Card.css'

export const Movie = () => {
  const movieData = useLoaderData();

  return (
    <section className="movie-section ">
      <div className="container">
        <ul className="movie-list">
          {movieData && movieData.Search.map((movie) => {
            return <Card key={movie.imdbID} movie={movie} />;
          })}
        </ul>
      </div>
    </section>
  );
};
