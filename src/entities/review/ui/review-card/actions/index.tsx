import { Box, Rating } from '@mui/material';
import { Like } from './Like';

interface Props {
  likes: number;
  rating: number;
}

export const Actions = ({ likes, rating }: Props) => {
  return (
    <Box sx={{ p: 1, display: 'flex', alignItems: 'center' }}>
      <Like likesCount={likes} />
      <Rating
        value={rating}
        sx={{
          ml: 'auto',
        }}
      />
    </Box>
  );
};
