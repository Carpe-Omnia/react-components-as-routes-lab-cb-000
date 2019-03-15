import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map (function(movie){
          return(
            <div>
              <h3> Name: {movie.title} </h3>
              <p>Time: {movie.time}</p>
              Genres: <ul>
                {movie.genres.map(function(genre) {
                  return (
                    <li>{genre}</li>
                  )
                })}
              </ul>
            </div>
          )
        })}
    </div>
  )
};

export default Movies;
