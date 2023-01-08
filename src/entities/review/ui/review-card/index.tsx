import Paper from '@mui/material/Paper';
import * as model from '@/entities/review/model';
import { Body } from './body';
import { Actions } from './actions';
import { Header } from './header';

interface Props {
  review: model.types.Review;
}

export const ReviewCard = ({ review }: Props) => {
  return (
    <Paper sx={{ maxWidth: '470px', my: 2 }}>
      <Header title={review.name} user={review.user} reviewId={review.id} />
      <Body
        image={review.imageUrl}
        content={review.content}
        reviewId={review.id}
      />
      <Actions likes={review.likes} rating={review.usersRating} />
    </Paper>
  );
};
