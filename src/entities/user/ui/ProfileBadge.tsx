import Avatar from '@mui/material/Avatar';
import * as model from '@/entities/user/model';
import { Stack, Typography } from '@mui/material';

export const ProfileBadge = () => {
  const email = model.selectors.useEmail();
  const profilePic = model.selectors.useProfilePic();

  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
      <Typography variant="subtitle2" component="span">
        {email}
      </Typography>
      {profilePic ? (
        <Avatar alt={email} src={profilePic} />
      ) : (
        <Avatar alt="No Image" />
      )}
    </Stack>
  );
};
