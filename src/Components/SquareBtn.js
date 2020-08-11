import Button from "@material-ui/core/Button";
import styled from 'styled-components';
import React from "react";

const SquareBtn = styled(Button)`
  ${({height, width}) => `
  border-radius: 0;
  color: #fff;
  box-shadow: none;
  height: ${height || 50}px;
  width: ${width || 50}px;
  minWidth: ${width || 50}px;
  `}
`;

export default SquareBtn;
