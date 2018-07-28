import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styledMap from 'styled-map';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  height: 150px;
  padding: 20px;
`;

const StyledImg = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const StyledH1 = styled.h1`
  font-size: 40px;
`;

const Header = ({ logo }) => (
  <StyledHeader className="App-header">
    <StyledImg src={logo} alt="Tic Tac Toe" />
    <StyledH1>
Welcome to the classic Tic Tac Toe game
    </StyledH1>
  </StyledHeader>
);

Header.defaultProps = {
  logo: '../../../public/img/ticTacToe.png',
};

Header.propTypes = {
  logo: PropTypes.string,
};

export default Header;
