import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTrailerForm(props){
  const { trailer } = props;

  function handleEditTrailerFormSubmission(event) {
    event.preventDefault();
    props.onEditTrailer({
      name: event.target.name.value, 
      price: parseInt(event.target.price.value), 
      quantity: parseInt(event.target.quantity.value),
      description: event.target.description.value,
      imgURL: event.target.imgURL.value, 
      id: trailer.id}
      );
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditTrailerFormSubmission}
        buttonText="Update Trailer" />
    </React.Fragment>
  );
}

EditTrailerForm.propTypes = {
  trailer: PropTypes.object,
  onEditTrailer: PropTypes.func
};

export default EditTrailerForm;