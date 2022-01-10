import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
  timeout: 5000,
});

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const originalRequest = error.config;

//     if (
//       error.response.status === 401 &&
//       originalRequest.url === "http://localhost:8000/api/user/token/refresh/"
//     ) {
//       window.location.href = "/user/login/";
//       return Promise.reject(error);
//     }

//     if (
//       error.response.data.code === "token_not_valid" &&
//       error.response.status === 401 &&
//       error.response.statusText === "Unauthorized"
//     ) {
//       const refreshToken = JSON.parse(localStorage.getItem("forum")).refresh;

//       if (refreshToken) {
//         const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));

//         const now = Math.ceil(Date.now() / 1000);
//         console.log(tokenParts.exp);

//         if (tokenParts.exp > now) {
//           return axiosInstance
//             .post("/token/refresh/", { refresh: refreshToken })
//             .then((response) => {
//               localStorage.setItem("forum", response.data);

//               axiosInstance.defaults.headers["Authorization"] =
//                 "Bearer " + response.data.access;
//               originalRequest.headers["Authorization"] =
//                 "Bearer " + response.data.access;

//               return axiosInstance(originalRequest);
//             })
//             .catch((err) => {
//               console.log(err);
//             });
//         } else {
//           console.log("Refresh token is expired", tokenParts.exp, now);
//           window.location.href = "/user/login/";
//         }
//       } else {
//         console.log("Refresh token not available.");
//         window.location.href = "/user/login/";
//       }
//     }

//     return Promise.reject(error);
//   }
// );
export default axiosInstance;
