/* eslint-disable import/no-anonymous-default-export*/
import {
  CREATE_QUESTION_FAIL,
  CREATE_QUESTION_SUCCESS,
  GET_BODY,
  UPDATE_QUESTION,
  GET_QUESTIONS,
  DELETE_QUESTION,
  REDIRECT,
} from "../actions/types";

const initialState = {
  isLoading: true,
  questions: [],
  question: null,
  questionBody: null,
  isQuestionDeleted: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_QUESTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
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
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case DELETE_QUESTION:
      return {
        ...state,
        isQuestionDeleted: true,
      };

    case REDIRECT:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}
