import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert, Box, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Item } from '../Grid/Item';

export default function ButtonLoading() {
  const [loading, setLoading] = useState(false);
  const [isload, setIsLoad] = useState(false);
  function handleClick() {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setIsLoad(true);
    }, 3000);
    return () => clearTimeout(timer);
  }

  return (
    <>
      <Grid item xs={1.5}>
        <Item elevation={0}>
          <Box sx={{ '& > button': { m: 1 }, pl: 1, pt: 1 }}>
            <LoadingButton
              onClick={handleClick}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              Принять
            </LoadingButton>
          </Box>
        </Item>
      </Grid>
      <Grid item xs={2.5}>
        <Item elevation={0} sx={{ pr: 7, pt: 2 }}>
          {isload && (
            <Alert variant="outlined" severity="success">
              Отправка прошла успешно!
            </Alert>
          )}
        </Item>
      </Grid>
    </>
  );
}
