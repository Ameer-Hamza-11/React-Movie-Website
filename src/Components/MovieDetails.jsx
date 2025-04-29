import React from 'react'
import { useLoaderData } from 'react-router-dom'
import './MovieDetails.css'


export const MovieDetails = () => {


    const movieData = useLoaderData()
    console.log(movieData);

    return (
<section className='movie-section'>
  <div className="movie-cards">
    <div className="posters">
      <img src={movieData.Poster} alt={movieData.Title} />
    </div>
    <div className="detailss">
      <h2>
        {movieData.Title} <span>({movieData.Year})</span>
      </h2>
      <p>{movieData.Plot}</p>

      <div className="extra-info">
        <p><strong>⭐ Rating:</strong> {movieData.imdbRating} / 10</p>
        <p><strong>🎬 Genre:</strong> {movieData.Genre}</p>
        <p><strong>⏳ Runtime:</strong> {movieData.Runtime}</p>
        <p><strong>🎥 Director:</strong> {movieData.Director}</p>
        <p><strong>💰 Box Office:</strong> {movieData.BoxOffice || 'N/A'}</p>
        <p><strong>🏆 Awards:</strong> {movieData.Awards}</p>
        <p><strong>🎭 Actors:</strong> {movieData.Actors}</p>
      </div>
    </div>
  </div>
</section>
            )
}
