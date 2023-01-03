import { Navbar } from '@/shared/ui/components/navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <Typography component="h1">Home Page</Typography>
    </Box>
  );
};

export default HomePage;
