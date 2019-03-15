import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
          {movies.map (function(movie){
            return(
              <div>
                <strong> Name: {movie.title} </strong>
                <p>Time: {movie.time}</p><br></br>
                <ul>
                  {movie.genres.map((genre) {
                    return <li>{genre}</li> 
                  })}
                </ul>   
                  })}
              </div>  
            )
          })}
    </div>
  );
};

export default Movies;
