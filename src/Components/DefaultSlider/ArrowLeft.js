import React, {memo} from 'react';
import ArrowRightSvgIcon from "../../SvgComponents/ArrowRightSvgIcon";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  arrow: {
    left: '3%',

    '&:before': {
      content: 'none'
    }
  }
}));

const ArrowLeft = ({className, onClick}) => {
  const classes = useStyles();

  return <div className={`${className} ${classes.arrow}`} onClick={onClick}>
    <ArrowRightSvgIcon reverse/>
  </div>
};

export default memo(ArrowLeft);
