import React from 'react';
import PropTypes from 'prop-types';
import './Frame.css';

const Frame = (props) => {
  const { src } = props;

  return (
    <iframe
      className="Frame"
      src={src}
      title="Business form"
    />
  );
};

Frame.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Frame;
