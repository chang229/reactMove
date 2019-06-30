import axios from 'axios';

// 默认配置
if(process.env.NODE_ENV === 'production'){
    axios.defaults.baseURL = 'https://douban.uieee.com/v2';
}
axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';

//添加一个请求拦截器
axios.interceptors.request.use(function(config){
  //在请求发出之前进行一些操作
  return config;
},function(err){
  //Do something with request error
  return Promise.reject(err);
});
//添加一个响应拦截器
axios.interceptors.response.use(function(res){
  //在这里对返回的数据进行处理
  return res.data;
},function(err){
  //Do something with response error
  return Promise.reject(err);
})

export default axios;
export const _post = axios.post;
export const _get = axios.get;
