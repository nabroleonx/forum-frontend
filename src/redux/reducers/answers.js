/* eslint-disable import/no-anonymous-default-export*/
import { GET_BODY, CREATE_ANSWER, UPDATE_ANSWER } from "../actions/types";

const initialState = {
  isLoading: true,
  answer: null,
  answerBody: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_ANSWER:
      return {
        ...state,
        isLoading: false,
        answer: action.payload,
      };

    case GET_BODY:
      return {
        ...state,
        answerBody: action.payload,
      };
    case UPDATE_ANSWER:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
