import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { FC } from 'react';

interface IProps {
  open: boolean;
}

const Loader: FC<IProps> = ({ open }) => {
  return (
    <div>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Loader;
