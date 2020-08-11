import styled from 'styled-components';

const Slide = styled.div`
  width: 100%;
  padding-bottom: 25px;
  background-color: black;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  ${props => `
  height: ${props.height || 0}px;
  `}
`;

export default Slide;
