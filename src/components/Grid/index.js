import styled from 'styled-components';

const Grid = styled.div`
  flex: 1;
  display: block;
  justify-content: center;
  justify-items: center;
  justify-self: center;
  align-self: center;
  max-width: 550px;
  width: inherit;
  padding: 30px;
`;

// const Grid = styled.div`
//   display: flex;
//   justify-content: ${({ justifyContent }) => justifyContent || 'inherit'};
//   align-items: ${({ alignItems }) => alignItems || 'inherit'};
//   flex-direction: ${({ flexDirection }) => flexDirection || 'inherit'};
//   flex-wrap: ${({ flexWrap }) => flexWrap || 'inherit'};
// `;
export default Grid;
