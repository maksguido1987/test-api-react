import { FC, useState } from 'react';
import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useStylesGallery from '../../styles/gallery.style';
import PictureModal from '../Modal/Modal';

export interface IProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  onDeletePhoto: (id: number) => void;
}

const MainCard: FC<IProps> = ({ thumbnailUrl, title, onDeletePhoto, id, url }) => {
  const classes = useStylesGallery();
  const [delay, setDelay] = useState(false);

  const onDelayModal = () => {
    setDelay((state) => !state);
  };

  return (
    <Grid item container xs={3} justifyContent="center">
      <Card onClick={onDelayModal} className={classes.card}>
        <CardMedia component="img" height="150" image={thumbnailUrl} alt={title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
        <CardActions className={classes.deleteBtn}>
          <Stack direction="row" spacing={1}>
            <IconButton onClick={() => onDeletePhoto(id)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Stack>
        </CardActions>
      </Card>
      <PictureModal urlImg={url} open={delay} onCloseModal={onDelayModal} />
    </Grid>
  );
};

export default MainCard;
