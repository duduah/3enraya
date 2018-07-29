import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const Body = ({ children }) => (
  <StyledBody>
    {children}
  </StyledBody>
);

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
