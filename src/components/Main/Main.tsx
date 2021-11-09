import { Button, Container, CssBaseline, Grid, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import GalleryItem from '../MainCard/MainCard';
import Loader from '../Loader/Loader';
import api from '../API/API';
import SortSelect from '../SortSelect/SortSelect';
import { IPicture } from '../utils/types';

const Main: FC = () => {
  const [pictures, setPictures] = useState<IPicture[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [sortBy, setSortBy] = useState<number[]>([]);
  const [sortValue, setSortValue] = useState(1);
  const [sortByAll, setSortByAll] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await api.getAllPictures(pageNumber);
        setPictures(res);
      } catch (e) {
        const result = (e as Error).message;
        setError(result);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [pageNumber, sortByAll]);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await api.getAlbumNumbers();
        setSortBy(res);
      } catch (e) {
        const result = (e as Error).message;
        setError(result);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await api.sortByAlbumId(sortValue, pageNumber);
        setPictures(res);
      } catch (e) {
        const result = (e as Error).message;
        setError(result);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [sortValue, pageNumber]);

  const onPrevPage = (): void => {
    setPageNumber((prevState) => prevState - 1);
  };

  const onNextPage = (): void => {
    setPageNumber((prevState) => prevState + 1);
  };

  const onDeletePhoto = (id: number): void => {
    api.deletePicture(id);
    setPictures((prevState) => {
      const newState = prevState.slice().filter((picture) => picture.id !== id);
      return newState;
    });
  };

  const onChangeSort = (value: number): void => {
    if (value === 0) {
      setSortByAll(true);
    } else {
      setSortValue(value);
    }
  };

  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Grid container spacing={6}>
        <Grid
          item
          container
          spacing={1}
          justifyContent="space-between"
          style={{ marginTop: '20px' }}
        >
          <Grid item container xs={6}>
            <Grid item container xs={4} justifyContent="center">
              <Button variant="outlined" onClick={onPrevPage}>
                Prev
              </Button>
            </Grid>
            <Grid item xs={4} container justifyContent="center">
              <Button variant="contained" onClick={onNextPage}>
                Next
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={6} container justifyContent="center">
            <SortSelect albumNumbers={sortBy} onChangeSort={onChangeSort} />
          </Grid>
        </Grid>
        <Grid container item spacing={2}>
          {error && (
            <Typography variant="h3" gutterBottom component="span">
              Error: {error}
            </Typography>
          )}
          {pictures &&
            pictures.map((picture) => {
              return <GalleryItem key={picture.id} {...picture} onDeletePhoto={onDeletePhoto} />;
            })}
        </Grid>
      </Grid>
      <Loader open={loading} />
    </Container>
  );
};

export default Main;
