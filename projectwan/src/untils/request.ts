//axios二次封装
import axios, { AxiosRequestConfig } from 'axios';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API, //基础路径携带/api
  timeout: 3000,
});

//拦截器
request.interceptors.request.use((config) => {
  return config;
});

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // return error
    const status = error.response.status;
    switch (status) {
      case 401:
        //dosomething
        break;
      case 403:
        //dosomething
        break;
    }
    return Promise.reject(error);
  },
);

interface requestType {
  url: string;
  params?: any;
}

/**
 * @description GET
 */
const GET = (data: requestType) => {
  return request.get(data.url, data.params);
};

/**
 * @description POST
 */
const POST = (data: requestType) => {
  return request.post(data.url, data.params);
};
/**
 * @description PUT
 */
const PUT = (data: requestType) => {
  return request.put(data.url, data.params);
};

/**
 * @description DELETE
 */
const DELETE = (data: requestType) => {
  return request({
    url: data.url,
    method: 'delete',
    data: data.params,
  } as AxiosRequestConfig);
};

/**
 * @description PATCH
 */
const PATCH = (data: requestType) => {
  return new Promise((resolve, reject) => {
    request
      .put(data.url, data.params)
      .then((res: any) => {
        if (res && res.status == 200) {
          resolve(res);
        }
      })
      .catch((error: any) => {
        reject(error);
      });
  });
};
export { GET, POST, PUT, DELETE, PATCH };

export default request;
