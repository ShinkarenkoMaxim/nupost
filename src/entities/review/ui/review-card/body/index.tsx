import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

interface Props {
  image: string | null;
  content: string;
  reviewId: number;
}

export const Body = ({ image, content, reviewId }: Props) => {
  return (
    <Box>
      <NavLink
        to={`/review/${reviewId}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          fontWeight: 'bold',
        }}
      >
        {image && <CardMedia component="img" image={image} />}
        <Box sx={{ p: 2, pb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            {content.length > 120 ? content.slice(0, 120) + '...' : content}
          </Typography>
        </Box>
      </NavLink>
    </Box>
  );
};
