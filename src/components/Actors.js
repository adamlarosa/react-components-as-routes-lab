import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>
        {/*{code here}*/}
        Actors Page
      </h1>
        {actors.map((actor, index) => {
          // console.log(actor)
          return <div key={index} className={actor.name}>
            <h2>Name: {actor.name}</h2>
            Movies:<ul>
              {actor.movies.map((movie, index) => {
                return <li key={index}>{movie}</li>
              })}
            </ul>
          </div>
        })}
    </div>
  );
};

export default Actors;
