import axios from 'axios'
import Reducer from "../Reducer";

class FeedbackFormReducer extends Reducer {
  static reducerName = 'feedback_form';

  static apiUrl = '/api/feedback_forms';

  static actionTypes = {
    UPDATE_FIELD: `${FeedbackFormReducer.reducerName}/UPDATE_FIELD`,
    CLEAR_FORM: `${FeedbackFormReducer.reducerName}/CLEAR_FORM`
  };

  static _reducerInstance = null;

  constructor() {
    super();
    this.initState = {
      phone_number: '',
      first_name: '',
      body_color: 1,
      backlight: false,
      tire_gilding: false,
      usb_ports: false,
      amount_of_rosette: 5,
      rosette_color: 1,
      wire_length: 0,
      body_shape: 0,
      manufacturer: 0,
      wire_type: 0,
    }
  }

  _actionVerifier = (state, action) => {
    const {type, payload, key} = action;

    const actionTypes = this.constructor.actionTypes;

    switch (type) {
      case actionTypes.UPDATE_FIELD:
        return {
          ...state,
          [key]: payload
        }

      case actionTypes.CLEAR_FORM:
        return {...this.initState}

      default:
        return state
    }
  }


  createForm = () => async (dispatch, getState) => {
    const form = {...getState()[FeedbackFormReducer.reducerName]};

    for (const key in form) {
      if (form[key] === 0) delete form[key];
    }

    let res;

    try {
      res = await axios.post(
        `${window.location.origin}${FeedbackFormReducer.apiUrl}/`,
        form,
        {
          headers: this.csrfTokenRequestHeader
        }
      );
    } catch (e) {
      if ([400, 500].indexOf(e?.response.status) !== -1) {
        let errorMessage = '';
        let data = e?.response.data;

        for (const key in data) {
          errorMessage += `\n${data[key].join('\n')}`
        }

        alert(errorMessage);
      }
    }

    if ([200, 201].indexOf(res?.status) !== -1) {
      dispatch({
        type: FeedbackFormReducer.actionTypes.CLEAR_FORM
      });

      return true
    } else {
      return false
    }

  }


  get getReducerInstance() {
    if (this.constructor._reducerInstance == null) {
      this.constructor._reducerInstance = (state = {...this.initState}, action) =>
        this._actionVerifier(state, action)
    }

    return this.constructor._reducerInstance;
  }

}

export default FeedbackFormReducer;
