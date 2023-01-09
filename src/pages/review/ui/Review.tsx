import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Like } from '@/features/like/review';
import * as review from '@/entities/review';

interface Props {
  review: review.model.types.Review;
}

export const Review = ({ review }: Props) => {
  return (
    <Box maxWidth="sm">
      <Paper sx={{ p: 2 }}>
        <Stack spacing={2}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
            {review.name}
          </Typography>
          <Typography variant="subtitle1" component="h3">
            {`${review.category?.name} / ${review.pieceOfArt?.name}`}
          </Typography>
          {review.imageUrl && (
            <CardMedia component="img" image={review.imageUrl} />
          )}
          <Typography variant="body1">{review.content}</Typography>
          <Typography variant="body2">
            <span style={{ fontWeight: 'bold' }}> Author Grade:</span>{' '}
            {review.selfRating}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Like likesCount={review.likes} reviewId={review.id as number} />
            <Rating
              value={review.usersRating}
              sx={{
                ml: 'auto',
              }}
            />
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};
