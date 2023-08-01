import React from "react";
import { movies } from "../data";

function Movies() {

  console.log(movies)
  const genres = movies.genres

  const genre = genres.map((genre)=>{
    <li>{genre}</li>
  });

  return(
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie)=>{
        <div>
          <h4>{movie.title}</h4>
          <h4>{movie.time}</h4>
          <ul>
            {genre}
          </ul>
        </div>
      })}
    </div>);
}

export default Movies;
