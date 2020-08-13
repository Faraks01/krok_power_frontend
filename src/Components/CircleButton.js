import Button from "@material-ui/core/Button";
import styled from 'styled-components';
import React from "react";

const CircleButton = styled(Button)`
  ${({height, width, bgColor}) => `
  ${bgColor ? 'background-color: ' + bgColor + ';' : ''}
  border-radius: 50%;
  color: #fff;
  box-shadow: none;
  height: ${height || 50}px;
  width: ${width || 50}px;
  min-width: ${width || 50}px;
  `}
`;

export default CircleButton;
