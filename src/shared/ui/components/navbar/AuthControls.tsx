import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const defaultActiveStyle = {
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 'bold',
};
const activeStyle = {
  textDecoration: 'none',
  color: 'inherit',
  fontWeight: 'bold',
};

const ActionButton: React.FC<{ action: string; label: string }> = ({
  action,
  label,
}) => {
  return (
    <Button color="inherit">
      <NavLink
        to={action}
        style={(isActive) => (isActive ? activeStyle : defaultActiveStyle)}
      >
        {label}
      </NavLink>
    </Button>
  );
};

export const SignInControls = () => (
  <>
    <Typography variant="body2" component="span">
      Don't have an account?
    </Typography>
    <ActionButton action="/auth/signup" label="Sign Up"></ActionButton>
  </>
);

export const SignUpControls = () => (
  <>
    <Typography variant="body2" component="span">
      Already have an account?
    </Typography>
    <ActionButton action="/auth/signin" label="Sign In"></ActionButton>
  </>
);

export const DefaultAuthControls = () => (
  <>
    <ActionButton action="/auth/signin" label="Sign In"></ActionButton>
    <ActionButton action="/auth/signup" label="Sign Up"></ActionButton>
  </>
);
