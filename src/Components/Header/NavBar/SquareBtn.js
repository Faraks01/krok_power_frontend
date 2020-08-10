import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import React from "react";

const SquareBtn = ({width = 50, height = 50, ...restProps}) => {

  const Btn = withStyles({
    root: {
      boxShadow: 'none',
      borderRadius: 0,
      height: height,
      width: width,
      minWidth: width,
      color: 'white'
    },
  })(Button);

  return <Btn {...restProps}/>
}

export default SquareBtn;
