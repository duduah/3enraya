import styled from 'styled-components';
import { desaturate } from 'polished';

const Button = styled.div`
  background: #fff;
  text-align-last: center;
  border: 1px solid;
  border-color: #ccc
  text-transform: uppercase;
  font-size: 24px;
  padding: 10px 15px;
  margin-top: 15px;
    &:hover {
    background: ${desaturate(0.1, '#ccc')};
  }
`;

// import React from 'react';
// import PropTypes from 'prop-types';

// const Button = ({ onClick, text }) => (
//   <button type="button" onClick={onClick}>
//     {text}
//   </button>
// );

// Button.defaultProps = {
//   onClick: null,
//   text: '',
// };

// Button.propTypes = {
//   onClick: PropTypes.func,
//   text: PropTypes.text,
// };

export default Button;
