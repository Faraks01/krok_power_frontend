import React from "react";

const LogoSvgIcon = ({width = 46, height = 34, color = "#61AEE9"}) => (
  <svg width={width} height={height} viewBox="0 0 46 34"
       fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45 1.5L3 1.5M1.5 31L1.5 0M18 32.5H0M29.8635 18.0124L16.8635 33.0124M29.7124 19.8665L44.7124 32.8665"
          stroke={color} stroke-width="3"/>
  </svg>
);

export default LogoSvgIcon
