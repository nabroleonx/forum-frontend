import axiosInstance from "../../utils/axios";
import { tokenConfig } from "./auth";

import { GET_ERRORS, GET_BODY, CREATE_ANSWER, UPDATE_ANSWER } from "./types";

export const get_body = (body) => (dispatch) => {
  dispatch({
    type: GET_BODY,
    payload: body,
  });
};

export const createAnswer =
  ({ questionId, body }) =>
  (dispatch, getState) => {
    const data = JSON.stringify({
      question: questionId,
      body: body,
    });

    axiosInstance
      .post("qa/answer/create/", data, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: CREATE_ANSWER,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response,
        });
      });
  };

export const updateAnswer =
  ({ id, questionId, body }) =>
  (dispatch, getState) => {
    const data = JSON.stringify({
      question: questionId,
      body: body,
    });
    axiosInstance
      .patch(`/qa/answer/${id}/`, data, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: UPDATE_ANSWER,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response,
        });
      });
  };
