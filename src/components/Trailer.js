import React from "react";
import PropTypes from "prop-types";

function Trailer(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTrailerClicked(props.id)}>
        <img src={props.imgURL} alt="Trailer" style={{width:250, height:140}} />
        <h3>{props.name}</h3>
        <p><em>{props.description}</em></p>
        <p>Price: ${props.price}</p>
        <p>Number Ordered: {props.numberOrdered}</p>
        <p>Remaining: {props.quantity}</p>
        <hr/>
      </div>  
    </React.Fragment>
  );
}

Trailer.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  decription: PropTypes.string,
  imgURL: PropTypes.string,
  numberOrdered: PropTypes.number,
  whenTrailerClicked: PropTypes.func
};

export default Trailer;