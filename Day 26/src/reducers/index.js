import { nameReducers, emailReducers } from "./Name";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  name: nameReducers,
  email: emailReducers
});

export default rootReducer;
