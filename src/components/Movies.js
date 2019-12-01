import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map((movie, index) => {
          return <div key={index}><h2>Name: {movie.title}</h2>
            <p>Time: {movie.time}</p>
            Genres:
            <ul>
              {movie.genres.map((genre, index) => { 
                return <li key={index}>{genre}</li>})}
            </ul>
          </div>
        })}
    </div>
  );
};

export default Movies;
