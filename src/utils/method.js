/* eslint-disable */
import axios from 'axios';
const API_URL = process.env.REACT_APP_URL;
const axiosServices = axios.create({
    baseURL: API_URL
});

//
// function (config) {
//     config.headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken')
//     return config
//   })
axiosServices.interceptors.request.use(function (config) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('adminToken');
    return config;
});

axiosServices.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => Promise.reject((error.response && error.response.data) || 'Wrong Services')
);
export const get = async (url, config = {}) => await axiosServices.get(url, { ...config });
export const post = async (url, data, config = {}) => await axiosServices.post(url, data, { ...config });
/* eslint-enable */
