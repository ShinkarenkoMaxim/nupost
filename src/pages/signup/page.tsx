import { Redirect } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Navbar } from '@/shared/ui/components/navbar';
import { Registration } from '@/features/registration/ui/Registration';
import * as user from '@/entities/user/';

const SignUpPage = () => {
  const isAuth = user.selectors.useIsAuthorized();

  return isAuth ? (
    <Redirect to="/" />
  ) : (
    <Box>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <Registration />
      </Container>
    </Box>
  );
};

export default SignUpPage;
