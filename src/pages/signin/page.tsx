import { Redirect } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Navbar } from '@/shared/ui/components/navbar';
import { JWTAuth } from '@/features/auth/jwt';
import * as user from '@/entities/user/';

const SignInPage = () => {
  const isAuth = user.selectors.useIsAuthorized();

  return isAuth ? (
    <Redirect to="/" />
  ) : (
    <Box>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <JWTAuth />
      </Container>
    </Box>
  );
};

export default SignInPage;
