import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Box, Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import {BodyShapes} from "./ConstructorVariables";
import {useDispatch, useSelector} from "react-redux";
import FeedbackFormReducer from "../../store/reducers/FeedbackForm";

const useStyles = makeStyles((theme) => ({
  fz16: {
    fontSize: 16
  },
}));

const squareRozetteMarks = [
  {
    value: 25,
    label: 4,
  },
  {
    value: 75,
    label: 9,
  }
];

const rectangleRozetteMarks = [
  {
    value: 0,
    label: 5,
  },
  {
    value: 33,
    label: 7,
  },
  {
    value: 66,
    label: 9,
  },
  {
    value: 100,
    label: 12,
  },
];

const FormSlider = ({title, formField}) => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const dispatch = useDispatch();
  const bodyShape = useSelector(s => s.feedback_form.body_shape);

  function valueLabelFormat(value) {
    const arr =
      bodyShape === BodyShapes.rectangle
        ? rectangleRozetteMarks
        : squareRozetteMarks;

    return arr[arr.findIndex((mark) => mark.value === value)].label;
  }

  function valuetext(value) {
    return `${value}`;
  }

  function handleRozetteSlider(event, newValue) {
    const arr =
      bodyShape === BodyShapes.rectangle
        ? rectangleRozetteMarks
        : squareRozetteMarks;

    dispatch({
      type: FeedbackFormReducer.actionTypes.UPDATE_FIELD,
      key: formField,
      payload: arr[arr.findIndex((mark) => mark.value === newValue)].label
    });
  }

  return <Grid
    item
    container
    alignItems={"center"}
    direction={mdUp ? "row" : "column"}>
    <Box width={201}>
      <Typography className={classes.fz16} align={mdUp ? "left" : "center"} variant={"body1"}>
        {title}
      </Typography>
    </Box>

    {!mdUp && <Box height={"6px"}/>}

    <Box width={'184px'}>
      <Slider
        key={`@#q${bodyShape}`}
        defaultValue={bodyShape === BodyShapes.rectangle ? 66 : 25}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={bodyShape === BodyShapes.rectangle ? rectangleRozetteMarks : squareRozetteMarks}
        onChange={handleRozetteSlider}
      />
    </Box>
  </Grid>
};

FormSlider.propTypes = {
  formField: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default memo(FormSlider);
