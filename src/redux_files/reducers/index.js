import { combineReducers } from "redux";
import isLogged from "./islogged";
import loggeduser from "./loggeduser";

const allreducers = combineReducers({
  isLogged,
  loggeduser,
});
export default allreducers;
