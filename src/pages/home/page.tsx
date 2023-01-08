import { Feed as GlobalFeed } from '@/features/feed/global-feed';
import { Navbar } from '@/shared/ui/components/navbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Container component="main" maxWidth="lg" sx={{ pt: 2 }}>
        <GlobalFeed />
      </Container>
    </Box>
  );
};

export default HomePage;
