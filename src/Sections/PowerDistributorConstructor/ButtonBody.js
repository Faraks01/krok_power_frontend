import React, {memo} from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const ButtonBody = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${({bgColor = 'transparent', bgImage = '#'}) => `
    background: ${bgColor} url("${bgImage}") no-repeat;
  `};
  
  background-size: cover;
  
`;

ButtonBody.propTypes = {
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
};

export default memo(ButtonBody);
