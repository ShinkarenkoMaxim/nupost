import * as http from '@/shared/lib/http';
import * as types from './types';

export const getUser = () => {
  return http
    .request<{ user: types.User }>({
      url: 'user/me',
      method: 'get',
    })
    .then((response) => response.user);
};
