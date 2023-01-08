import { status } from 'patronum/status';
import { combine, createStore, Effect } from 'effector';
import * as types from './types';

export function createFeed({ effect }: types.FeedOptions) {
  const $feed = createStore<types.FeedResponse>({
    reviews: [],
  }).on(effect.doneData, (_, payload) => payload);

  const $reviews = $feed.map((response) => response.reviews);
  const $status = status({ effect });

  const $isEmptyFeed = combine(
    $status,
    $reviews,
    (status, reviews) =>
      (status === 'done' || status === 'fail') && reviews.length === 0
  );

  return { $feed, $reviews, $isEmptyFeed };
}
