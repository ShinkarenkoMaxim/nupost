import { createEvent, createEffect, restore, forward, combine } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as user from '@/entities/user';
import * as api from './api';
import * as types from './types';

export const formSubmitted = createEvent<types.FormValues>();
export const signUpFx = createEffect<
  types.FormValues,
  user.types.User,
  Record<string, unknown>
>(api.signUp);

user.$user.on(signUpFx.doneData, (_, payload) => payload);

forward({
  from: formSubmitted,
  to: signUpFx,
});

export const Gate = createGate();
export const $error = restore(signUpFx.failData, {
  error: '',
}).reset(Gate.close);

export const $hasError = $error.map((x) => x?.error);
export const $errorMsg = $error.map((x) => x?.error as string);
export const $signUpError = combine({
  hasError: $hasError,
  errorMsg: $errorMsg,
});

export const selectors = {
  useSignUpLoading: () => useStore(signUpFx.pending),
  useSignUpError: () => useStore($signUpError),
};
