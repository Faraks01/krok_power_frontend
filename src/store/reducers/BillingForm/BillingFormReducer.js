import axios from "axios";
import Reducer from "../Reducer";

class BillingFormReducer extends Reducer {
  static reducerName = 'billing_form';

  static apiUrl = '/api/billing_forms';

  static actionTypes = {
    UPDATE_FIELD: `${BillingFormReducer.reducerName}/UPDATE_FIELD`,
    CLEAR_FORM: `${BillingFormReducer.reducerName}/CLEAR_FORM`
  };

  static _reducerInstance = null;

  constructor() {
    super();
    this.initState = {
      phone_number: '',
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
    const form = {...getState()[BillingFormReducer.reducerName]};

    let res;

    try {
      res = await axios.post(
        `${window.location.origin}${BillingFormReducer.apiUrl}/`,
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
        type: BillingFormReducer.actionTypes.CLEAR_FORM
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

export default BillingFormReducer;
