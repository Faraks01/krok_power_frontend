import styled from 'styled-components';

const Slide = styled.div`
  width: 100%;
  padding-bottom: 25px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  ${props => `
    height: ${props.height || 0}px;
    background-image: url("${props.bgImage}");
    background-color: ${props.bgColor || 'transparent'};
  `}
`;

export default Slide;
