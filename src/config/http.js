/* eslint-disable */
import axios from 'axios'
import Cookies from 'js-cookie'
import router from '../router'

const http = axios.create({
  baseURL: 'http://pay4you-club.umbler.net/v1'
})

http.interceptors.request.use(function (config) {
  config.headers['Authorization'] = Cookies.get('pay_auth')  
  return config;
}, function (error) {
  return Promise.reject(error);
});


http.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if(error.response.status === 401) {
    router.push({name: 'login'})
  }
  return Promise.reject(error);
});

export default http
