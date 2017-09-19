import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.handleChangeName = this.handleChange.bind(this, 'business_name');
    this.handleChangeStreet = this.handleChange.bind(this, 'street');
    this.handleChangeCity = this.handleChange.bind(this, 'city');
    this.handleChangeState = this.handleChange.bind(this, 'state');
    this.handleChangePostalCode = this.handleChange.bind(this, 'postal_code');
    this.handleChangeCountry = this.handleChange.bind(this, 'country');
    this.handleChangePhoneNumber = this.handleChange.bind(this, 'phone_number');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(label, evt) {
    const value = evt.target.value;
    this.props.onChange(label, value);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const business = this.props.business;

    return (
      <form
        className="Form__container"
        onSubmit={this.handleSubmit}
      >
        <Field
          label="Business Name"
          value={business.business_name}
          onChange={this.handleChangeName}
        />
        <Field
          label="Street"
          value={business.street}
          onChange={this.handleChangeStreet}
        />
        <Field
          label="City"
          value={business.city}
          onChange={this.handleChangeCity}
        />
        <Field
          label="State"
          value={business.state}
          onChange={this.handleChangeState}
        />
        <Field
          label="Postal Code"
          value={business.postal_code}
          onChange={this.handleChangePostalCode}
        />
        <Field
          label="Country"
          value={business.country}
          onChange={this.handleChangeCountry}
        />
        <Field
          label="Phone Number"
          value={business.phone_number}
          onChange={this.handleChangePhoneNumber}
        />
        <input
          className="Form__submit_button"
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}

Form.propTypes = {
  business: PropTypes.shape({
    business_name: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postal_code: PropTypes.string,
    country: PropTypes.string,
    phone_number: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
