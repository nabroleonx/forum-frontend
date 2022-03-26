/* eslint-disable import/no-anonymous-default-export*/
import {
  CREATE_QUESTION_FAIL,
  CREATE_QUESTION_SUCCESS,
  GET_BODY,
} from "../actions/types";

const initialState = {
  token: JSON.parse(localStorage.getItem("forum")),
  isAuthenticated: null,
  isLoading: false,
  question: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        question: action.payload,
      };

    case CREATE_QUESTION_FAIL:
      return {
        ...state,
        question: action.payload,
      };

    case GET_BODY:
      return {
        ...state,
        question: action.payload,
      };

    default:
      return state;
  }
}
