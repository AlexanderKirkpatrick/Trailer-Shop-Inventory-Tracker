import React from "react";
import trailerImage from "./../img/trailer.png";

function Header(){
  return (
    <React.Fragment>
      <h1>Sail Trailers</h1>
      <img src={trailerImage} alt="An image of a sailboat on a trailer" />
    </React.Fragment>
  );
}

export default Header;