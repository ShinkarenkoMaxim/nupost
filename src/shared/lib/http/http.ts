import axios from 'axios';
import * as types from './types';
console.log(import.meta.env);

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      window.location.pathname !== '/auth/signin'
    ) {
      window.location.assign('/auth/signin');
    }

    return Promise.reject(error);
  }
);

export const setToken = (token: string): void => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const request = <T = void>(
  options: types.HttpRequestOptions
): Promise<T> => {
  return instance
    .request({
      url: options.url,
      method: options.method,
      data: options?.data,
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error.response?.data;
    });
};
