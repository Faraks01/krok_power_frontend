import axios from "axios";

class ColorReducer {
  static reducerName = 'color';

  static apiUrl = '/api/colors';

  static actionTypes = {
    UPDATE_DATA: `${ColorReducer.reducerName}/UPDATE_DATA`,
    CLEAR_DATA: `${ColorReducer.reducerName}/CLEAR_DATA`
  };

  static _reducerInstance = null;

  constructor() {
    this.initState = {}
  }

  _actionVerifier = (state, action) => {
    const {type, payload} = action;

    const actionTypes = this.constructor.actionTypes;

    switch (type) {
      case actionTypes.UPDATE_DATA:
        return {
          ...state,
          ...payload
        }

      case actionTypes.CLEAR_DATA:
        return {...this.initState}

      default:
        return state
    }
  }


  fetchList = () => async (dispatch) => {
    const res = await axios.get(
      `${window.location.origin}${ColorReducer.apiUrl}?limit=100`,
    );

    if (res.status === 200) {

      const result = {};

      for (const key in res.data.results) {
        const r = res.data['results'];
        result[r[key].id] = r[key];
      }

      dispatch({
        type: ColorReducer.actionTypes.UPDATE_DATA,
        payload: result
      })

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

export default ColorReducer;
