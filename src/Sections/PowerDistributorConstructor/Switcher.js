import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Grid, Switch} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import EnhancedTooltip from "../../Components/EnhancedTooltip";
import InfoIcon from "@material-ui/icons/Info";
import {useDispatch, useSelector} from "react-redux";
import FeedbackFormReducer from "../../store/reducers/FeedbackForm";

const useStyles = makeStyles((theme) => ({
  fz16: {
    fontSize: 16
  },
}));

const Switcher = ({title, formField, tooltip}) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const checked = useSelector(s => s.feedback_form[formField]);

  function handleOnChange() {
    dispatch({
      type: FeedbackFormReducer.actionTypes.UPDATE_FIELD,
      key: formField,
      payload: !checked
    })
  }

  return <Grid item container alignItems={"center"}>
    <Box width={188}>
      <Typography className={classes.fz16} variant={"body1"}>
        {title}
      </Typography>
    </Box>

    <Switch
      checked={checked}
      onChange={handleOnChange}
      color="primary"
      name="checkedB"
      inputProps={{'aria-label': 'primary checkbox'}}
    />

    <Box width={'4px'}/>

    <EnhancedTooltip title={tooltip} arrow>
      <InfoIcon width={25} height={25} color={"primary"}/>
    </EnhancedTooltip>
  </Grid>
};

Switcher.propTypes = {
  formField: PropTypes.string.isRequired,
  title: PropTypes.string,
  tooltip: PropTypes.string
}

export default memo(Switcher);
