// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const FeatureItem = ({ imageSrc, title, description }) => {
  return (
    <div className="feature-item">
      <img
        src={imageSrc}
        alt={title}
        className="feature-icon"
      />
      <h3 className="feature-item-title">
        {title}
      </h3>
      <p>
        {description}
      </p>
    </div>
  );
};

FeatureItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureItem;
