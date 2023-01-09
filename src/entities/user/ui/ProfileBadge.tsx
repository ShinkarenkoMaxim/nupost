import Avatar from '@mui/material/Avatar';
import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import * as model from '@/entities/user/model';

export const ProfileBadge = () => {
  const email = model.selectors.useEmail();
  const profilePic = model.selectors.useProfilePic();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const openMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    model.logoutClicked();
  };

  const open = Boolean(anchorEl);

  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Typography variant="subtitle2" component="span">
        {email}
      </Typography>
      {profilePic ? (
        <Avatar alt={email} src={profilePic} onClick={openMenu} />
      ) : (
        <Avatar alt="No Image" onClick={openMenu} />
      )}
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={closeMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </Stack>
  );
};
