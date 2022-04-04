import axiosInstance from "../../utils/axios";
import { tokenConfig } from "./auth";

import {
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAIL,
  GET_ERRORS,
  GET_BODY,
  UPDATE_QUESTION,
  GET_QUESTIONS,
  GET_QUESTION,
  DELETE_QUESTION,
  REDIRECT,
  
} from "./types";

export const get_body = (body) => (dispatch) => {
  dispatch({
    type: GET_BODY,
    payload: body,
  });
};

export const redirect = () => (dispatch) => {
  dispatch({
    type: REDIRECT,
    payload: null,
  });
};

export const createQuestion =
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

export const updateQuestion =
  ({ id, title, categories, body }) =>
  (dispatch, getState) => {
    const data = JSON.stringify({
      title: title,
      categories: categories,
      body: body,
    });
    axiosInstance
      .patch(`/qa/question/${id}/`, data, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: UPDATE_QUESTION,
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

export const getQuestion =
  ({id}) =>
  (dispatch, getState) => {
    axiosInstance
      .get(`/qa/question/${id}/`, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_QUESTION,
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

  export const getQuestions =
  ({}) =>
  (dispatch, getState) => {
    axiosInstance
      .get("/qa/question/list/", tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_QUESTIONS,
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

export const deleteQuestion = (id) => (dispatch, getState) => {
  axiosInstance
    .delete(`/qa/question/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_QUESTION,
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
