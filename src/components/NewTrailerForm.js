import React from "react";
import PropTypes from "prop-types"; 
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewTrailerForm(props) {

  function handleNewTrailerFormSubmission(event) {
    event.preventDefault();
    props.onNewTrailerCreation({
      name: event.target.name.value, 
      price: parseInt(event.target.price.value), 
      quantity: parseInt(event.target.quantity.value),
      description: event.target.description.value,
      imgURL: event.target.imgURL.value,
      numberOrdered: 0, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTrailerFormSubmission}
        buttonText="Create" />
    </React.Fragment>
  );
}

NewTrailerForm.propTypes = {
  onNewTrailerCreation: PropTypes.func
};

export default NewTrailerForm;