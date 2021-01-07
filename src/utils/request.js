import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/token'

// 设置全局的请求次数，请求的间隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

// 创建axios实例
const service = axios.create({
    baseURL: 'http://server:9090' + '/api' , // api 的 base_url
    timeout: 15000,// 请求超时时间
});

// request拦截器
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['COOKIE-TOKEN'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非1是抛错
     */
    const res = response.data
      if (res.code !== 1) {
          Message({
              message: res.msg,
              type: 'error',
              duration: 5 * 1000
          })
          if (res.code === 40001) {
              // 40001:未登录
              MessageBox.confirm(
                  '你已被登出，可以取消继续留在该页面，或者重新登录',
                  '确定登出',
                  {
                      confirmButtonText: '重新登录',
                      cancelButtonText: '取消',
                      type: 'warning'
                  }
              ).then(() => {
                  store.dispatch('FedLogOut').then(() => {
                      location.reload() // 为了重新实例化vue-router对象 避免bug
                  })
              })
          } else if (res.code === 403) {
              // 403:权限不足
              MessageBox.confirm(
                  '当前登录账号权限不足，是否重新登录',
                  '确定登出',
                  {
                      confirmButtonText: '重新登录',
                      cancelButtonText: '取消',
                      type: 'warning'
                  }
              ).then(() => {
                  store.dispatch('LogOut').then(() => {
                      location.reload() // 为了重新实例化vue-router对象 避免bug
                  })
              })
          }
          return Promise.reject('error')
      }else {
          return res
      }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

service.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    let config = err.config;
    // If config does not exist or the retry option is not set, reject
    if(!config || !config.retry) return Promise.reject(err);

    // Set the variable for keeping track of the retry count
    config.__retryCount = config.__retryCount || 0;

    // Check if we've maxed out the total number of retries
    if(config.__retryCount >= config.retry) {
        // Reject with the error
        return Promise.reject(err);
    }

    // Increase the retry count
    config.__retryCount += 1;

    // Create new promise to handle exponential backoff
    let backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, config.retryDelay || 1);
    });

    // Return the promise in which recalls axios to retry the request
    return backoff.then(function() {
        return axios(config);
    });
});

export default service
