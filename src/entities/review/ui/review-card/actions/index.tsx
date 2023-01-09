import { Box, Rating } from '@mui/material';
import { Like } from '@/features/like/review';

interface Props {
  likes: number;
  rating: number;
  reviewId: any;
}

export const Actions = ({ likes, rating, reviewId }: Props) => {
  return (
    <Box sx={{ p: 1, display: 'flex', alignItems: 'center' }}>
      <Like likesCount={likes} reviewId={reviewId} />
      <Rating
        value={rating}
        sx={{
          ml: 'auto',
        }}
      />
    </Box>
  );
};
