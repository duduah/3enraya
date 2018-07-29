import styled from 'styled-components';
import styledMap from 'styled-map';

const StyledCell = styled.button`
  background: ${({ theme }) => styledMap('background', {
    O: theme.colors.O,
    X: theme.colors.X,
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
