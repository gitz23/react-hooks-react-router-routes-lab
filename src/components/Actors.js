import React from "react";
import { actors } from "../data";

function Actors() {

  const actors = actors.movies;

  console.log(actors);
  
  const liActors = actors.map((actor)=>{
    <li>{actor}</li>
  })

  return(
  <div>
    <h1>Directors Page</h1>
    {actors.map((actor)=>{
      <div>
        {actor.name}
        <ul>
          {liActors}
        </ul>
      </div>
    })}
  </div>);
}

export default Actors;
