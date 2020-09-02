import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    width: 12,
    height: 12,
    backgroundColor: '#61AEE9'
  },
}));

const SquareMark = ({mTop = 0, mBottom = 0, mLeft = 0, mRight = 0}) => {
  const classes = useStyles();
  return <span
    className={classes.root}
    style={{margin: `${mTop}px ${mRight}px ${mBottom}px ${mLeft}px`}}
  />
};

SquareMark.propTypes = {
  mBottom: PropTypes.number,
  mLeft: PropTypes.number,
  mRight: PropTypes.number,
  mTop: PropTypes.number
}

export default memo(SquareMark);
