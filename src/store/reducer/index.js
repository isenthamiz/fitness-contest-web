import { combineReducers } from "redux";
import Reducer from "./reducer";

const Reducers = combineReducers({
  drawer: Reducer,
});

export default Reducers;
