import { makeStyles } from '@material-ui/core';

const useStylesGallery = makeStyles(() => ({
  paginationWrapper: {
    marginTop: '30px',
  },
  card: {
    minHeight: '250px',
    maxWidth: '250px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  deleteBtn: {
    justifyContent: 'end',
  },
}));

export default useStylesGallery;
