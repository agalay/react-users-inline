import axios from 'axios';

axios.defaults.baseURL = window.location.origin;

export const userAPI = {
    get: id => axios.get(`/users${id ? "/" + id : ""}`).then(({data}) => data)
}