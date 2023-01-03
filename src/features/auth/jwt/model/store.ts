import { combine, createEffect, createEvent, forward, restore } from 'effector';
import { createGate, useStore } from 'effector-react';
import * as user from '@/entities/user';
import * as api from './api';
import * as types from './types';

export const formSubmitted = createEvent<types.FormValues>();
export const signInFx = createEffect<
  types.FormValues,
  user.types.User,
  Record<string, unknown>
>(api.signIn);

user.$user.on(signInFx.doneData, (_, payload) => payload);

forward({
  from: formSubmitted,
  to: signInFx,
});

export const Gate = createGate();
export const $error = restore(signInFx.failData, {
  error: '',
}).reset(Gate.close);

export const $hasError = $error.map((x) => x?.error);
export const $errorMsg = $error.map((x) => x?.error as string);
export const $signInError = combine({
  hasError: $hasError,
  errorMsg: $errorMsg,
});

export const selectors = {
  useSignInRequestLoading: () => useStore(signInFx.pending),
  useSignInError: () => useStore($signInError),
};
