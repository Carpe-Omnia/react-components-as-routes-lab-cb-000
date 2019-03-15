import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(function(director){
        return (
          <h3>{director.name}</h3>
          <ul>
          {director.movies.map(function(movie){
            return(
              <li>{movie}</li>
            )
          })}
          </ul>
        )
      })}
    </div>
  );
}

export default Directors
