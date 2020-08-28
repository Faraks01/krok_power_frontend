import React, {memo} from 'react';
import {FormControl, MenuItem, Select} from "@material-ui/core";
import PropTypes from "prop-types";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import FeedbackFormReducer from "../../store/reducers/FeedbackForm";

const RosetteManufacturerInput = ({selectClassName}) => {
  const dispatch = useDispatch();
  const manufacturers = useSelector(s => Object.values(s.manufacturer), shallowEqual)
  const currentValue = useSelector(s => s.feedback_form.rosette_manufacturer);

  function handleOnChange(evt) {
    dispatch({
      type: FeedbackFormReducer.actionTypes.UPDATE_FIELD,
      key: 'rosette_manufacturer',
      payload: evt.target.value
    })
  }

  return <FormControl variant="outlined">
    <Select
      className={selectClassName}
      value={currentValue}
      displayEmpty
      onChange={handleOnChange}
    >
      <MenuItem value={0}>Выбрать</MenuItem>
      {manufacturers.map(mfc => <MenuItem value={mfc.id}>{mfc.name}</MenuItem>)}
    </Select>
  </FormControl>
};

RosetteManufacturerInput.propTypes = {
  selectClassName: PropTypes.string
}

export default memo(RosetteManufacturerInput);
