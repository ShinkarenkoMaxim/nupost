import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import * as userModel from '@/entities/user';

interface Props {
  likesCount: number;
  reviewId: number;
}

export const Like = ({ likesCount, reviewId }: Props) => {
  // TODO: replace on effector hooks in future
  const [likes, setLikes] = useState(likesCount);
  const [isLiked, setIsLiked] = useState(false);
  const isAuth = userModel.selectors.useIsAuthorized();
  const history = useHistory(); // TODO: add popup instead redirecting to Sign In page

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isAuth) {
      history.push('/auth/signin');
      return;
    }

    // TODO: add like logic
    if (!isLiked) {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <IconButton size="small" onClick={handleClick}>
        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
      <Typography color="text.secondary">{likes}</Typography>
    </Box>
  );
};
