import { useStore } from 'effector-react';
import { createEffect } from 'effector';
import * as api from './api';
import * as review from '@/entities/review/';

export const getFeedFx = createEffect(api.getFeed);

export const { $feed, $reviews, $isEmptyFeed } = review.model.createFeed({
  effect: getFeedFx,
});

export const selectors = {
  useGetFeedLoading: () => useStore(getFeedFx.pending),
  useIsEmptyFeed: () => useStore($isEmptyFeed),
};
