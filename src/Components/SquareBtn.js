import React from "react";
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import styled from 'styled-components';

const SquareBtn = styled(Button)`
  ${({height, width, stretch}) => `
  
    &>span {
      height: 100%;
    }
  
    border-radius: 0;
    color: #fff;
    box-shadow: none;
    padding: 0;
    display: flex;
    position: relative;
    justify-content: ${stretch ? 'stretch' : 'center'};
    align-items: ${stretch ? 'stretch' : 'center'};
    height: ${height || 50}px;
    width: ${width || 50}px;
    min-width: ${width || 50}px;
  `}
`;

SquareBtn.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  stretch: PropTypes.bool
};

export default SquareBtn;
