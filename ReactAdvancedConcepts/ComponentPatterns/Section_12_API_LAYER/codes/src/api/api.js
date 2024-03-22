import axios from "axios";

const axiosParams = {
  baseUrl:
    process.env.NODE_ENV === "development" ? "http://localhost:8080":"/",
};

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
  return {
    get:(url, config={}) => axios.get(url, config),
    delete:(url, config={}) => axios.delete(url, config),
    post:(url, data, config={}) => axios.post(url, data, config),
    patch:(url, data, config={}) => axios.patch(url, data, config),
    put:(url, data, config={}) => axios.put(url, data, config),
  }
};

export default api(axiosInstance);