import { createEffect, createStore, guard, restore } from 'effector';
import { createGate, useStore } from 'effector-react';
import { createParamsStore } from '@/shared/lib/router';
import * as api from './api';

export const getReviewFx = createEffect(api.getReview);

export const Gate = createGate();

export const $reviewId = createParamsStore<{ id: string }>({
  path: '/review/:id',
}).map((params: any) => params?.id ?? '');

guard({
  clock: Gate.open,
  source: $reviewId,
  filter: Boolean,
  target: getReviewFx,
});

export const $review = restore(getReviewFx.doneData, {
  id: null,
  name: '',
  content: 'string',
  imageUrl: null,
  likes: 0,
  selfRating: 0,
  usersRating: 0,
  category: null,
  pieceOfArt: null,
  user: null,
});

export const selectors = {
  useReview: () => useStore($review),
  useGetReviewLoading: () => useStore(getReviewFx.pending),
};
