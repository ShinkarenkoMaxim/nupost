import { useGate } from 'effector-react';
import { Alert, Box } from '@mui/material';
import * as model from '../model';

export const Error = () => {
  useGate(model.Gate);
  const { hasError, errorMsg } = model.selectors.useSignInError();

  return hasError ? (
    <Box sx={{ width: '100%', pt: 2 }}>
      <Alert severity="error">{errorMsg}</Alert>
    </Box>
  ) : null;
};
