import { useGate } from 'effector-react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CircularProgress, Stack } from '@mui/material';
import { Navbar } from '@/shared/ui/components/navbar';
import { Content } from './ui/Content';
import * as model from './model';

const ReviewPage = () => {
  useGate(model.Gate);

  const isLoading = model.selectors.useGetReviewLoading();

  return (
    <Box>
      <Navbar />
      <Container component="main" maxWidth="lg" sx={{ pt: 2 }}>
        {isLoading ? <CircularProgress /> : <Content />}
        {/* TODO: effects and loader doesnt work when click by NavLink in reviews */}
      </Container>
    </Box>
  );
};

export default ReviewPage;
