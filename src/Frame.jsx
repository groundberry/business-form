import React from 'react';
import PropTypes from 'prop-types';
import './Frame.css';

const Frame = (props) => {
  const { src } = props;

  return (
    <iframe
      className="Frame"
      height="100%"
      width="100%"
      src={src}
      title="Business form"
    />
  );
};

Frame.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Frame;
