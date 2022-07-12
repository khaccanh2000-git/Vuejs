// axios
import axios from "axios";

// const axiosIns = axios.create({
//   // You can add your headers here
//   // ================================
//   baseURL: process.env.VUE_APP_BASE_URL,
//   // timeout: 1000,
//   // headers: {'X-Custom-Header': 'foobar'}
// });

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    //   const tokenData = AuthServices.getToken();

    //   if(tokenData){
    //     config.headers.Authorization = `${tokenData.type} ${tokenData.token}`;
    //   }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.defaults.proxy = true;
// axios.defaults.headers.common['Authorization'] = ACCESS_TOKEN;

export default axios;
