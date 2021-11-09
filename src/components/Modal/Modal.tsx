import { CardMedia } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { FC } from 'react';

export interface IProps {
  urlImg: string;
  open: boolean;
  onCloseModal: () => void;
}

const Modal: FC<IProps> = ({ urlImg, open, onCloseModal }) => {
  return (
    <div>
      <Dialog open={open} onClose={onCloseModal}>
        <CardMedia component="img" height="600" image={urlImg} alt="img" />
      </Dialog>
    </div>
  );
};

export default Modal;
