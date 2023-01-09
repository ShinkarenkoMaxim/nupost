import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Controls } from './Controls';
import * as userModel from '@/entities/user';

interface Props {
  user: any;
  reviewId: any;
  title: string;
}

export const Header = ({ user, reviewId, title }: Props) => {
  const isAuth = userModel.selectors.useIsAuthorized();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Box sx={{ pr: 2 }}>
        <NavLink to={`/profile/${user.id}`}>
          {user.profilePic ? (
            <Avatar
              alt={`Profile image of ${user.firstName} ${user.lastName}`}
              src={user.profilePic}
            />
          ) : (
            <Avatar alt="No Image" />
          )}
        </NavLink>
      </Box>
      <Box>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{ fontWeight: 'bold' }}
        >
          {/* TODO: need to add routing for working navigation links */}
          <a
            href={`/review/${reviewId}`}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold',
            }}
          >
            {title.length > 45 ? title.slice(0, 45) + '...' : title}
          </a>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${user.firstName} ${user.lastName}`}
        </Typography>
      </Box>
      {isAuth && <Controls />}
    </Box>
  );
};
