import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Error } from './Error';
import { Form } from './Form';

export const Registration = () => {
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Error />
      <Form />
    </Box>
  );
};
