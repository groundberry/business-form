import React from 'react';
import PropTypes from 'prop-types';
import Frame from './Frame';
import { getBusinessURL } from './utils';
import './Modal.css';

const Modal = (props) => {
  const { business, onClose, onExport } = props;
  const src = getBusinessURL(business);

  return (
    <div className="Modal__backdrop">
      <div className="Modal__body">
        <Frame
          src={src}
        />
      </div>
      <div className="Modal__footer">
        <button
          className="Modal__close_button"
          onClick={onClose}
        >
          Close
        </button>
        <button
          className="Modal__export_button"
          onClick={onExport}
        >
          Export
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  business: PropTypes.shape({
    business_name: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postal_code: PropTypes.string,
    country: PropTypes.string,
    phone_number: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
};

export default Modal;
