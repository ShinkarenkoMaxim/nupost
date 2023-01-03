import axios from 'axios';
import * as types from './types';

export const instance = axios.create({
  baseURL: 'http://localhost:4000',
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
