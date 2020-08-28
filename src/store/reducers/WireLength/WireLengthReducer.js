import axios from "axios";

class WireLengthReducer {
  static reducerName = 'wire_length';

  static apiUrl = '/api/wire_lengths';

  static actionTypes = {
    UPDATE_DATA: `${WireLengthReducer.reducerName}/UPDATE_DATA`,
    CLEAR_DATA: `${WireLengthReducer.reducerName}/CLEAR_DATA`
  };

  static _reducerInstance = null;

  constructor() {
    this.initState = {
      0: {
        id: 0,
        name: "Выбрать"
      }
    }
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
      `${window.location.origin}${WireLengthReducer.apiUrl}?limit=100`,
    );

    if (res.status === 200) {

      const result = {};

      for (const key in res.data.results) {
        const r = res.data['results'];
        result[r[key].id] = r[key];
      }

      dispatch({
        type: WireLengthReducer.actionTypes.UPDATE_DATA,
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

export default WireLengthReducer;
