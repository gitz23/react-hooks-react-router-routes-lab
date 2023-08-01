import React from "react";
import { directors } from "../data";

function Directors() {

  const movies = directors.movie;

  console.log(directors)
  
  console.log(movies)
  
  const liMovies = movies.map((movie)=>{
    <li>{movie}</li>
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director)=>{
        <div>
          {director.name}
          <ul>
            {liMovies}
          </ul>
        </div>
      })}
    </div>);
}

export default Directors;
