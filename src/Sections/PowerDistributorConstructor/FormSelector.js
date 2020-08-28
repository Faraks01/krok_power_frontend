import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Box, FormControl, Grid, MenuItem, Select} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import FeedbackFormReducer from "../../store/reducers/FeedbackForm";

const useStyles = makeStyles((theme) => ({
  fz16: {
    fontSize: 16
  },

  textField: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "black"
    },

    '& .MuiInputBase-input': {
      padding: '8px 32px 8px 20px',
    },

    "& fieldset": {
      padding: 'unset'
    }
  },
}));

const FormSelector = ({title, formField}) => {
  const classes = useStyles();
  const theme = useTheme();

  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const dispatch = useDispatch();
  const options = useSelector(s => Object.values(s[formField] ?? []), shallowEqual);
  const currentValue = useSelector(s => s.feedback_form[formField]);

  function handleBodyShapeChange(evt) {
    dispatch({
      type: FeedbackFormReducer.actionTypes.UPDATE_FIELD,
      key: formField,
      payload: evt.target.value
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

    <FormControl variant="outlined">
      <Select
        className={classes.textField}
        value={currentValue}
        onChange={handleBodyShapeChange}
      >
        {options.map(shp => <MenuItem value={shp.id}>{shp.name}</MenuItem>)}
      </Select>
    </FormControl>
  </Grid>
};

FormSelector.propTypes = {
  formField: PropTypes.string.isRequired,
  title: PropTypes.string
}

export default memo(FormSelector);
