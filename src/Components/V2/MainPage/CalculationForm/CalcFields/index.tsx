import React, { FC } from 'react';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export const CalcFields: FC = () => {
  return (
    <Grid container spacing={1}>
      <Grid xs={6}>
        <TextField
          name="nameCargo"
          label="Откуда"
          type="search"
          variant="outlined"
          color="primary"
          margin="dense"
          value={'kljkjl'}
          style={{ borderColor: 'red' }}
        />
      </Grid>
      <Grid xs={6}>
        <TextField
          name="nameCargo"
          label="Куда"
          type="search"
          variant="outlined"
          color="primary"
          margin="dense"
          value={'kljkjl'}
          style={{ borderColor: 'red' }}
        />
      </Grid>
    </Grid>
  );
};
