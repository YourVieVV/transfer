import React, { FC } from 'react';
import {Box, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export const CalcFields: FC = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', width:'100%', gap: '40px',}}>
      <TextField
        name="nameCargo"
        label="Откуда"
        type="search"
        variant="outlined"
        color="primary"
        margin="dense"
        value={'kljkjl'}
        style={{ width:'40%' }}
      />
      <TextField
        name="nameCargo"
        label="Куда"
        type="search"
        variant="outlined"
        color="primary"
        margin="dense"
        value={'kljkjl'}
        style={{ width:'40%' }}
      />
    </Box>
  );
};
