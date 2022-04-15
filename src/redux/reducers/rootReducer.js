import { combineReducers } from "redux";
import auth from "./auth";
import errors from "./errors";
import questions from "./questions";
import answers from "./answers";

export default combineReducers({
  auth,
  errors,
  questions,
  answers,
});
