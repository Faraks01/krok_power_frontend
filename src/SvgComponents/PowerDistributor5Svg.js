import PropTypes from 'prop-types'
import React, {memo} from 'react';

const PowerDistributor5Svg = ({width = 232}) => {

  return <svg width={width} height={width * 0.255} viewBox="0 0 232 59" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.25" y="0.25" width="231.5" height="58.5" rx="19.75" fill="url(#paint5_linear)" stroke="black"
          stroke-width="0.5"/>
    <circle cx="31.3846" cy="30.4872" r="15.1346" fill="white" stroke="black" stroke-width="0.5"/>
    <circle cx="31.3845" cy="26.6413" r="2.3141" fill="white" stroke="black" stroke-width="0.5"/>
    <circle cx="31.3845" cy="34.3336" r="2.3141" fill="white" stroke="black" stroke-width="0.5"/>
    <circle cx="179" cy="30.3846" r="15.1346" fill="white" stroke="black" stroke-width="0.5"/>
    <circle cx="179" cy="26.5387" r="2.3141" fill="white" stroke="black" stroke-width="0.5"/>
    <circle cx="179" cy="34.2311" r="2.3141" fill="white" stroke="black" stroke-width="0.5"/>
    <circle cx="68" cy="30.3846" r="15.1346" fill="white" stroke="black" stroke-width="0.5"/>
    <circle cx="68" cy="26.5387" r="2.3141" fill="white" stroke="black" stroke-width="0.5"/>
    <circle cx="68" cy="34.2311" r="2.3141" fill="white" stroke="black" stroke-width="0.5"/>
    <circle cx="105" cy="30.3846" r="15.1346" fill="white" stroke="black" stroke-width="0.5"/>
    <circle cx="105" cy="26.5387" r="2.3141" fill="white" stroke="black" stroke-width="0.5"/>
    <circle cx="105" cy="34.2311" r="2.3141" fill="white" stroke="black" stroke-width="0.5"/>
    <circle cx="142" cy="30.3846" r="15.1346" fill="white" stroke="black" stroke-width="0.5"/>
    <circle cx="142" cy="26.5387" r="2.3141" fill="white" stroke="black" stroke-width="0.5"/>
    <circle cx="142" cy="34.2311" r="2.3141" fill="white" stroke="black" stroke-width="0.5"/>
    <rect x="206.25" y="24.25" width="6.5" height="14.5" fill="white" stroke="black" stroke-width="0.5"/>
    <defs>
      <linearGradient id="paint5_linear" x1="116" y1="0" x2="116" y2="59" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
    </defs>
  </svg>


};

PowerDistributor5Svg.propTypes = {
  width: PropTypes.number
}

export default memo(PowerDistributor5Svg);
