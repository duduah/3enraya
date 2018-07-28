import styled from 'styled-components';
import styledMap from 'styled-map';
import PropTypes from 'prop-types';

const StyledText = styled.p`
  margin: 0;
  font-size: 45px;
  text-align: ${styledMap({
    center: 'center',
    default: 'left',
  })};
  color: ${({ theme }) =>
    styledMap('color', {
      white: theme.colors.white,
      O: theme.colors.O,
      X: theme.colors.X,
      advice: theme.colors.advice,
      primary: theme.colors.primary,
      active: theme.colors.active,
      default: theme.colors.black,
    })};
  background: ${({ theme }) =>
    styledMap('background', {
      white: theme.colors.white,
      O: theme.colors.O,
      X: theme.colors.X,
      advice: theme.colors.advice,
      primary: theme.colors.primary,
      active: theme.colors.active,
      black: theme.colors.black,
      default: 'transparent',
    })};
  padding: ${styledMap({
    space: '10px 20px',
    default: '5px 10px',
  })};
`;

StyledText.defaultProps = {
  color: 'black',
  background: 'transparent',
};

StyledText.propTypes = {
  color: PropTypes.oneOf(['white', 'advice', 'X', 'O', 'primary', 'active', 'black']),
  background: PropTypes.oneOf([
    'white',
    'advice',
    'X',
    'O',
    'primary',
    'active',
    'black',
    'transparent',
  ]),
};

export default StyledText;
