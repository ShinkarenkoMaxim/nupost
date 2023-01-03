import { createEffect, createEvent, guard, restore } from 'effector';
import { useStore } from 'effector-react';
import { persist } from 'effector-storage/local';
import * as api from './api';
import * as http from '@/shared/lib/http';

export const logoutClicked = createEvent();
export const getUserFx = createEffect(api.getUser);

export const $user = restore(getUserFx.doneData, {
  id: null,
  profilePic: '',
  firstName: '',
  lastName: '',
  email: '',
  token: null,
}).reset(logoutClicked);

export const $email = $user.map((user) => user.email);
export const $profilePic = $user.map((user) => user.profilePic);

export const $token = $user.map((user) => user.token);
export const $isAuthorized = $token.map(Boolean);

persist({
  store: $email,
  key: 'user-email',
});

persist({
  store: $profilePic,
  key: 'user-profile-pic',
});

guard({
  source: $token,
  filter: Boolean,
}).watch(http.setToken);

persist({
  store: $token,
  key: 'access_token',
});

export const selectors = {
  useIsAuthorized: () => useStore($isAuthorized),
  useEmail: () => useStore($email),
  useProfilePic: () => useStore($profilePic),
  useUser: () => useStore($user),
};
