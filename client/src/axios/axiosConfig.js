import axios from "axios";
const port = import.meta.env.VITE_PORT;

const axiosInstance = axios.create({
  baseURL: `https://evangadi-forum-backend-wfv3.onrender.com/`,
});

export default axiosInstance;
