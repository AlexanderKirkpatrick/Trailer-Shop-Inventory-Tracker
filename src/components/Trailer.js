import React from "react";
import PropTypes from "prop-types";

function Trailer(props){
  return (
    <React.Fragment>
      <div onCLick = {() => props.whenTrailerClicked(props.id)}>
        <img src={props.imgURL} alt="Trailer" style={{width:250, height:140}} />
        <h3>{props.name}</h3>
        <p>${props.price}</p>
        <p>Remaining: {props.quantity}</p>
        <p>Number Ordered: {props.numberOrdered}</p>
        <p><em>{props.description}</em></p>
        <hr/>
      </div>  
    </React.Fragment>
  );
}

Trailer.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.string,
  decription: PropTypes.string,
  imgURL: PropTypes.string,
  id: PropTypes.string,
  whenTrailerClicked: PropTypes.func
};

export default Trailer;