import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Avatar from '@mui/material/Avatar';

import { Error } from './Error';
import { Form } from './Form';

export const JWTAuth = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <AccountBoxIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <Error />
      <Form />
    </Box>
  );
};
