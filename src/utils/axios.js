import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";

const baseURL = "http://localhost:8000/api/";

let forum = localStorage.getItem("forum")
  ? JSON.parse(localStorage.getItem("forum"))
  : null;

const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${forum?.access}` },
});

axiosInstance.interceptors.request.use(async (req) => {
  if (!forum) {
    forum = localStorage.getItem("forum")
      ? JSON.parse(localStorage.getItem("forum"))
      : null;
    req.headers.Authorization = `Bearer ${forum?.access}`;
  }

  const user = jwt_decode(forum.access);
  const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

  if (!isExpired) return req;

  const response = await axios.post(`${baseURL}user/token/refresh/`, {
    refresh: forum.refresh,
  });

  localStorage.setItem("forum", JSON.stringify(response.data));
  req.headers.Authorization = `Bearer ${response.data.access}`;
  return req;
});

export default axiosInstance;
