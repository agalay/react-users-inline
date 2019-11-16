import axios from "axios";

axios.defaults.baseURL = "https://5dbf4c69e295da001400b56f.mockapi.io";

export const userAPI = {
  get: id => axios.get(`/users${id ? "/" + id : ""}`).then(({ data }) => data),
  remove: id => axios.delete(`/users/${id}`),
  put: data => axios.put(`/users/${data.id}`, data)
};
