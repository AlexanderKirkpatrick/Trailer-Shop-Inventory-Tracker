import React from "react";
import PropTypes from "prop-types";

function TrailerDetail(props) {
  const { trailer } = props

  return(
    <React.Fragment>
      <h3>{trailer.name} Details</h3>
      <hr />
      <p>{trailer.description}</p>
      <p>${trailer.price}</p>
      <p>Number Ordered: {trailer.numberOrdered}</p>
      <p>Remaining: {trailer.quantity}</p>
      <button className="btn btn-primary" onClick={() => props.onOrderingTrailer(trailer.id)}>Order</button>
      <button className="btn btn-info" onClick={props.onClickingEdit}>Update Entry</button>
      <button className="btn btn-success" onClick={() => props.onClickingRestock(trailer.id)}>Restock</button>
      <button className="btn btn-danger" onClick={() => props.onClickingDelete(trailer.id)}>Delete</button>
      <hr />
    </React.Fragment>
  );
}

TrailerDetail.propTypes ={
  trailer: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingRestock: PropTypes.func,
  onOrderingTrailer: PropTypes.func
}

export default TrailerDetail;