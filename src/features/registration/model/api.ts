import * as user from '@/entities/user';
import * as http from '@/shared/lib/http';
import * as types from './types';

export const signUp = (formValues: types.FormValues) => {
  return http
    .request<{ user: user.types.User }>({
      url: 'auth/signup',
      method: 'post',
      data: formValues,
    })
    .then((response) => response.user);
};
