import * as http from '@/shared/lib/http';
import * as review from '@/entities/review';

export const getFeed = () => {
  return http.request<review.model.types.FeedResponse>({
    url: '/reviews',
    method: 'get',
  });
};
