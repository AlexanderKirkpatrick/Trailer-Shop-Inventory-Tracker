import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type='text'
          name='name'
          placeholder='Trailer Name' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
          <input
          type='text'
          name='quantity'
          placeholder='Quantity' />
        <textarea
          name='description'
          placeholder='Description' />
        <input
          type='text'
          name='imgURL'
          placeholder='Image URL' />  
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string.isRequired
};

export default ReusableForm;