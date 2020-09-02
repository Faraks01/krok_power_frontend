import {combineReducers} from "redux";
import BillingFormReducer from "./reducers/BillingForm";
import FeedbackFormReducer from "./reducers/FeedbackForm";
import BodyShapeReducer from "./reducers/BodyShape";
import ManufacturerReducer from "./reducers/Manufacturer";
import WireTypeReducer from "./reducers/WireType";
import ColorReducer from "./reducers/Color";
import WireLengthReducer from "./reducers/WireLength";
import NewsReducer from "./reducers/News";

const appReducer = combineReducers({
  [FeedbackFormReducer.reducerName]: new FeedbackFormReducer().getReducerInstance,
  [WireLengthReducer.reducerName]: new WireLengthReducer().getReducerInstance,
  [ColorReducer.reducerName]: new ColorReducer().getReducerInstance,
  [BillingFormReducer.reducerName]: new BillingFormReducer().getReducerInstance,
  [BodyShapeReducer.reducerName]: new BodyShapeReducer().getReducerInstance,
  [ManufacturerReducer.reducerName]: new ManufacturerReducer().getReducerInstance,
  [WireTypeReducer.reducerName]: new WireTypeReducer().getReducerInstance,
  [NewsReducer.reducerName]: new NewsReducer().getReducerInstance,
});

export default appReducer
