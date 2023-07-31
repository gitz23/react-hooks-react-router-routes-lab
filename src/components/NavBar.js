import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  const linkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

  return (
     <div className="navbar">
      <NavLink exact to="/" style={linkStyles}>Home</NavLink>
      <NavLink exact to="/directors" style={linkStyles}>Directors</NavLink>
      <NavLink exact to="/actors" style={linkStyles}>Actors</NavLink>
      <NavLink exact to="/movies" style={linkStyles}>Movies</NavLink>
    </div>
    )
}

export default NavBar;
