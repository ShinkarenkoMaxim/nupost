import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import * as user from '@/entities/user';
import Typography from '@mui/material/Typography';

interface Props {
  user: user.types.User;
}

export const Author = ({ user }: Props) => {
  return (
    <Box>
      <Paper sx={{ p: 2 }}>
        <NavLink
          to={`/profile/${user?.id}`}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            fontWeight: 'bold',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {user?.profilePic ? (
              <Avatar
                alt={`Profile image of ${user.firstName} ${user.lastName}`}
                src={user.profilePic}
                sx={{ width: '80px', height: '80px' }}
              />
            ) : (
              <Avatar alt="No Image" />
            )}
            <Typography
              variant="body1"
              color="text.primary"
              sx={{ fontWeight: 'bold' }}
            >
              {`${user?.firstName} ${user?.lastName}`}
            </Typography>
          </Box>
        </NavLink>
      </Paper>
    </Box>
  );
};
