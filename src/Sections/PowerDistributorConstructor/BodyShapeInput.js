import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {FormControl, MenuItem, Select} from "@material-ui/core";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import FeedbackFormReducer from "../../store/reducers/FeedbackForm";

const BodyShapeInput = ({selectClassName}) => {
  const dispatch = useDispatch();
  const bodyShapes = useSelector(s => Object.values(s.body_shape), shallowEqual);
  const currentValue = useSelector(s => s.feedback_form.body_shape);

  function handleBodyShapeChange(evt) {
    dispatch({
      type: FeedbackFormReducer.actionTypes.UPDATE_FIELD,
      key: 'body_shape',
      payload: evt.target.value
    });
  }

  return <FormControl variant="outlined">
    <Select
      className={selectClassName}
      value={currentValue}
      onChange={handleBodyShapeChange}
    >
      {bodyShapes.map(shp => <MenuItem value={shp.id}>{shp.name}</MenuItem>)}
    </Select>
  </FormControl>
};

BodyShapeInput.propTypes = {
  selectClassName: PropTypes.string
}

export default memo(BodyShapeInput);
