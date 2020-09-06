import axios from "axios";

class NewsReducer {
  static reducerName = 'news';

  static apiUrl = '/api/news';

  static actionTypes = {
    UPDATE_DATA: `${NewsReducer.reducerName}/UPDATE_DATA`,
    CLEAR_DATA: `${NewsReducer.reducerName}/CLEAR_DATA`
  };

  static _reducerInstance = null;

  constructor() {
    this.initState = {
      data: {},
      payloadKeys: []
    }
  }

  _actionVerifier = (state, action) => {
    const {type, data, payloadKeys} = action;

    const actionTypes = this.constructor.actionTypes;

    switch (type) {
      case actionTypes.UPDATE_DATA:
        return {
          data: {...state.data, ...data},
          payloadKeys: [...state.payloadKeys, ...payloadKeys]
        }

      case actionTypes.CLEAR_DATA:
        return {...this.initState}

      default:
        return state
    }
  }


  fetchList = () => async (dispatch) => {
    const res = await axios.get(
      `${window.location.origin}${NewsReducer.apiUrl}?limit=100&ordering=-created`,
    );

    if (res.status === 200) {

      const result = {};
      const payloadKeys = [];

      for (const key in res.data.results) {
        const r = res.data['results'];
        result[r[key].id] = r[key];
        payloadKeys.push(r[key].id);
      }

      dispatch({
        type: NewsReducer.actionTypes.UPDATE_DATA,
        data: result,
        payloadKeys: payloadKeys
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

export default NewsReducer;
