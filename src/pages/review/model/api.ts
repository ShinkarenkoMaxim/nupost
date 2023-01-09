import * as http from '@/shared/lib/http';
import * as review from '@/entities/review';

export const getReview = (reviewId: string) => {
  return http.request<review.model.types.Review>({
    url: `/reviews/${reviewId}`,
    method: 'get',
  });
};
