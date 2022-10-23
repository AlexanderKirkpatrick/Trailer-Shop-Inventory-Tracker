import React from 'react';
import Trailer from './Trailer';
import PropTypes from 'prop-types';

function TrailerList(props) {
  
  const gridContainerStyle = {
    display: "grid"
  }

  return(
    <React.Fragment>
      <hr/>
      <div className="grid-container" style={gridContainerStyle}>
        <div className="grid-item">
          {props.trailerList.map((trailer) =>
            <Trailer
              whenTrailerClicked = {props.onTrailerSelection}
              onOrderingTrailer = {props.onOrderingTrailer}
              name={trailer.name}
              price={trailer.price}
              description={trailer.description}
              imgURL={trailer.imgURL}
              quantity={trailer.quantity}
              numberOrdered={trailer.numberOrdered}
              id={trailer.id}
              key={trailer.id} />
            )}
        </div>
      </div>
    </React.Fragment>
  );
}

TrailerList.propTypes = {
  onTrailerSelection: PropTypes.func,
  onOrderingTrailer: PropTypes.func,
  trailerList: PropTypes.array,
};

export default TrailerList;