import axiosInstance from "../../utils/axios";

import {
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAIL,
  GET_ERRORS,
  GET_BODY,
} from "./types";

export const get_body = (body) => (dispatch) => {
  dispatch({
    type: GET_BODY,
    payload: body,
  });
};

export const create_question =
  ({ title, categories, body }) =>
  (dispatch, getState) => {
    const data = JSON.stringify({
      title: title,
      categories: categories,
      body: body,
    });

    axiosInstance
      .post("qa/question/create/", data, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: CREATE_QUESTION_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: CREATE_QUESTION_FAIL,
        });
        dispatch({
          type: GET_ERRORS,
          payload: err.response,
        });
      });
  };

export const tokenConfig = (getState) => {
  const token = getState().auth.token.access;

  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
};
