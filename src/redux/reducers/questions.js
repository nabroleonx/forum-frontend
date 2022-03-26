/* eslint-disable import/no-anonymous-default-export*/
import {
  CREATE_QUESTION_FAIL,
  CREATE_QUESTION_SUCCESS,
  GET_BODY,
  UPDATE_QUESTION,
} from "../actions/types";

const initialState = {
  isLoading: false,
  question: null,
  questionBody: null,
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
        questionBody: action.payload,
      };

    case UPDATE_QUESTION:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
