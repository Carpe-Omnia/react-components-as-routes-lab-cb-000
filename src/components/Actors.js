import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(function(actor){
        return(
          <div>
            <h3>Name: {actor.name}</h3>
            Movies: <ul>
              {actor.movies.map(function(movie){
                return(<li>{movie}</li>)
              })}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
