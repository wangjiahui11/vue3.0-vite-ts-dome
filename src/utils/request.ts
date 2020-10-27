import axios from "axios";

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  baseURL: '', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

// 添加请求拦截器
service.interceptors.request.use(function (config: any) {
  // 在发送请求之前做些什么
  return config;
}, function (error: any) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
// 添加响应拦截器
service.interceptors.response.use(function (response: any) {
  // 对响应数据做点什么
  return response.data;
}, function (error: any) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default service
