import { CircularProgress } from '@mui/material';

interface Props {
  isLoading: boolean;
}

export const Loader = ({ isLoading }: Props) => {
  return isLoading ? <CircularProgress /> : null;
};
