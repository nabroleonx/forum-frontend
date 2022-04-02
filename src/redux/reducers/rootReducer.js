import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import questions from "./questions";

export default combineReducers({
  auth,
  errors,
  questions,
});
