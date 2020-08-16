import PropTypes from 'prop-types'
import React, {memo} from 'react';

const CheckMarkSvgIcon = ({height = 15, width = height * 1.4, color = "#61AEE9"}) => {
  return <svg width={width} height={height} viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M20.5717 0.431169C21.1428 1.0036 21.1428 1.93964 20.5717 2.51454L8.59754 14.5676C8.31203 14.855 7.93867 15 7.56288 15C7.18952 15 6.81617 14.855 6.53066 14.5676L0.43009 8.4256C-0.143363 7.85317 -0.143363 6.91712 0.43009 6.34223C1.0011 5.76734 1.92595 5.76734 2.49696 6.34223L7.56288 11.4401L18.5024 0.431169C19.0734 -0.143723 19.9983 -0.143723 20.5717 0.431169Z"
          fill={color}/>
  </svg>

};

CheckMarkSvgIcon.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}

export default memo(CheckMarkSvgIcon);
