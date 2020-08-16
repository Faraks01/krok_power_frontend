import PropTypes from 'prop-types'
import React, {memo} from 'react';

const ArrowRightSvgIcon = ({width = 43, height = width * 0.95349, color = '#E0E0E0', reverse = false}) => {
  return <svg
    {...{
      ...reverse && {transform: 'scale(-1)'}
    }}
    width={width}
    height={height}
    viewBox="0 0 43 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M14.1333 8.68993L42.1915 23.267L14.0386 40.3086L14.1333 8.68993Z" fill={color}/>
  </svg>

};

ArrowRightSvgIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  reverse: PropTypes.bool,
  width: PropTypes.number
}

export default memo(ArrowRightSvgIcon);

