import axios from "axios";

const baseURL = "http://localhost:8000/api/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === "http://localhost:8000/api/user/token/refresh/"
    ) {
      window.location.href = "/user/login/";
      return Promise.reject(error);
    }

    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = JSON.parse(localStorage.getItem("forum")).refresh;

      return axiosInstance
        .post("/user/token/refresh/", {
          refresh: refreshToken,
        })
        .then((response) => {
          localStorage.setItem("forum", JSON.stringify(response.data));

          axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${
            JSON.parse(localStorage.getItem("forum")).access
          }`;

          originalRequest.headers["Authorization"] = `Bearer ${
            JSON.parse(localStorage.getItem("forum")).access
          }`;

          if (originalRequest.url === "user/logout/") {
            const refreshToken = JSON.parse(
              localStorage.getItem("forum")
            ).refresh;
            originalRequest.data = {
              refresh: refreshToken,
            };
          }

          return axiosInstance(originalRequest);
        });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
