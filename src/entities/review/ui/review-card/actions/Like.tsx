import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
  likesCount: number;
}

export const Like = ({ likesCount }: Props) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton size="small">
        <FavoriteIcon />
      </IconButton>
      <Typography color="text.secondary">{likesCount}</Typography>
    </Box>
  );
};
