import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import * as model from '../model';
import { Author } from './Author';
import { Review } from './Review';
import * as user from '@/entities/user';

export const Content = () => {
  const review = model.selectors.useReview();

  return (
    <Box sx={{ display: 'flex' }}>
      <Stack direction="row" spacing={2}>
        <Review review={review} />
        <Author user={review?.user as user.types.User} />
      </Stack>
    </Box>
  );
};
