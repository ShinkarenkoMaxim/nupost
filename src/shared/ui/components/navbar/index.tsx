import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { NavLink, useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import * as user from '@/entities/user';
import { ProfileBadge } from '@/entities/user';
import {
  DefaultAuthControls,
  SignInControls,
  SignUpControls,
} from './AuthControls';

export const Navbar = () => {
  const location = useLocation();
  const isAuth = user.selectors.useIsAuthorized();

  let AuthControlsComponent;

  switch (location.pathname) {
    case '/auth/signin':
      AuthControlsComponent = <SignInControls />;
      break;
    case '/auth/signup':
      AuthControlsComponent = <SignUpControls />;
      break;
    default:
      AuthControlsComponent = <DefaultAuthControls />;
      break;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ flexGrow: 1 }}>
              <NavLink to="/">
                <img src="/logo.png" alt="logo" height={32} />
              </NavLink>
            </Box>
            {isAuth ? <ProfileBadge /> : AuthControlsComponent}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
