import styled from 'styled-components';
import styledMap from 'styled-map';

const StyledCell = styled.button`
  background: ${({ theme }) => styledMap('background', {
    white: theme.colors.white,
    O: theme.colors.O,
    X: theme.colors.X,
    advice: theme.colors.advice,
    primary: theme.colors.primary,
    active: theme.colors.active,
    black: theme.colors.black,
    default: 'transparent',
  })};
  border: 1px solid ${({ theme }) => theme.colors.black};
  float: left;
  font-size: 95px;
  line-height: 150px;
  height: 150px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 150px;
  outline: none;
`;

export default StyledCell;
