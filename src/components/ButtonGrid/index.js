import React from 'react';
import PropTypes from 'prop-types';

import Cell from '../Cell';

const ButtonGrid = ({ onClick, value }) => (
  <Cell onClick={onClick}>
    {value}
  </Cell>
);

ButtonGrid.defaultProps = {
  onClick: null,
  value: null,
};

ButtonGrid.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
};

export default ButtonGrid;
