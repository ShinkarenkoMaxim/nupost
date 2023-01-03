import * as user from '@/entities/user';
import * as http from '@/shared/lib/http';
import * as types from './types';

export const signIn = ({ email, password }: types.FormValues) => {
  return http
    .request<{ user: user.types.User }>({
      url: 'auth/login',
      method: 'post',
      data: {
        email,
        password,
      },
    })
    .then((response) => response.user);
};
