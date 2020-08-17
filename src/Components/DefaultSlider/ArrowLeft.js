import PropTypes from 'prop-types'
import React, {memo} from 'react';
import ArrowRightSvgIcon from "../../SvgComponents/ArrowRightSvgIcon";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  arrow: {
    left: '3%',
    zIndex: 999,

    '&:before': {
      content: 'none'
    }
  }
}));

const ArrowLeft = ({className, arrowColor, onClick}) => {
  const classes = useStyles();

  return <div className={`${className} ${classes.arrow}`} onClick={onClick}>
    <ArrowRightSvgIcon color={arrowColor} reverse/>
  </div>
};

ArrowLeft.propTypes = {
  arrowColor: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default memo(ArrowLeft);
