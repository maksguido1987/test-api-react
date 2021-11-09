import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: FC = () => {
  return (
    <>
      <Typography variant="h4" gutterBottom component="div">
        404 error - Page not found
      </Typography>
      <Link to="/">
        <Button variant="contained">Go home</Button>
      </Link>
    </>
  );
};

export default ErrorPage;
