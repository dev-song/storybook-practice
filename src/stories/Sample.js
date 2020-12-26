import React from 'react';
import PropTypes from 'prop-types';
import './sample.css';

export const Sample = ({ primary, backgroundColor, size, text, ...props }) => {
  const mode = primary ? 'storybook-sample--primary' : 'storybook-sample--secondary';
  return (
    <span
      className={['storybook-sample', `storybook-sample--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {text}
    </span>
  );
};

Sample.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['standard', 'large']),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Sample.defaultProps = {
  backgroundColor: '#ddd',
  primary: false,
  size: 'standard',
  onClick: (undefined),
};