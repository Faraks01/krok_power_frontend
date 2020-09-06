import PropTypes from 'prop-types'
import React, {memo, useEffect} from 'react';
import Typography from "@material-ui/core/Typography";
import {Box, Grid} from "@material-ui/core";
import SquareBtn from "../../Components/SquareBtn";
import ButtonBody from "./ButtonBody";
import CheckMarkSvgIcon from "../../SvgComponents/CheckMarkSvgIcon";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import FeedbackFormReducer from "../../store/reducers/FeedbackForm";

const Colorizer = ({colorGroup, title, column, updateDefaultColor = true}) => {

  const dispatch = useDispatch();

  const manufacturerId = useSelector(s => s.feedback_form.manufacturer);

  const colors = useSelector(
    s => s.manufacturer[manufacturerId][colorGroup].map(colorId => s.color[colorId]),
    shallowEqual);

  const currentColorId = useSelector(s => s.feedback_form[colorGroup.slice(0, -1)]);

  function setDefaultColor() {
    let colorId;

    for (const key in colors) {
      if (colors[key].color === '#FFFFFF') {
        colorId = colors[key].id;
        break;
      }
    }

    handleColorChange(
      colorId
    );
  }

  useEffect(() => {
    if (updateDefaultColor) {
      setDefaultColor();
    }
  }, [manufacturerId]);

  function handleColorChange(colorId) {
    dispatch({
      type: FeedbackFormReducer.actionTypes.UPDATE_FIELD,
      key: colorGroup.slice(0, -1),
      payload: colorId
    })
  }

  return <Grid item container alignItems={"center"} direction={!column ? "row" : "column"}>
    <Box width={201}>
      <Typography className={'fz16'} align={column ? "center" : "left"} variant={"body1"}>
        {title}
      </Typography>
    </Box>

    {column && <Box height={"6px"}/>}

    <Grid className={'fit-w'} container direction={"row"} justify={"center"}>

      {colors.map(color => <>
        <SquareBtn
          key={color.id}
          onClick={() => handleColorChange(color.id)}
          height={30}
          width={30}
          stretch>
          <ButtonBody bgColor={color.color}>
            {currentColorId === color.id && <CheckMarkSvgIcon/>}
          </ButtonBody>
        </SquareBtn>

        <Box width={'11px'}/>
      </>)}
    </Grid>
  </Grid>
};

Colorizer.propTypes = {
  column: PropTypes.bool,
  updateDefaultColor: PropTypes.bool,
  title: PropTypes.string.isRequired,
  colorGroup: PropTypes.string.isRequired,
}

export default memo(Colorizer);
