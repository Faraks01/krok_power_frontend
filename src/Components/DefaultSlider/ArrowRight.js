import React, {memo} from 'react';
import ArrowRightSvgIcon from "../../SvgComponents/ArrowRightSvgIcon";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  arrow: {
    right: '3%',

    '&:before': {
      content: 'unset'
    }
  }
}));

const ArrowRight = ({className, onClick}) => {
  const classes = useStyles();

  return <div className={`${className} ${classes.arrow}`} onClick={onClick}>
    <ArrowRightSvgIcon/>
  </div>
};

export default memo(ArrowRight);
