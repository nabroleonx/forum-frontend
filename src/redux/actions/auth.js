import axiosInstance from "../../utils/axios";

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_ERRORS,
} from "./types";

export const register =
  ({ student, student_ID, dept_choice, confirmPassword }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (student.password === confirmPassword) {
      const body = JSON.stringify({
        student: student,
        student_ID: student_ID,
        dept_choice: dept_choice,
      });

      axiosInstance
        .post("user/register/student/", body, config)
        .then((res) => {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: REGISTER_FAIL,
          });
          dispatch({
            type: GET_ERRORS,
            payload: err.response,
          });
        });
    } else {
      dispatch({
        type: GET_ERRORS,
        payload: {
          data: { password: ["Passwords Must Match"] },
          status: null,
        },
      });
    }
  };

export const login =
  ({ email, password }) =>
  (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ email, password });

    axiosInstance
      .post("user/login/", body, config)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAIL,
        });
        dispatch({
          type: GET_ERRORS,
          payload: err.response,
        });
      });
  };

export const logout =
  ({ refresh }) =>
  (dispatch, getState) => {
    const body = JSON.stringify({
      refresh,
    });
    axiosInstance
      .post("user/logout/", body, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: LOGOUT_SUCCESS,
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
