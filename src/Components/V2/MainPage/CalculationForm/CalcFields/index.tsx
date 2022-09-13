import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { CalcSlider } from './CalcSliders';
import { TextField } from '@mui/material';

export const CalcFields: FC = () => {
  return (
    <Box>
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
    </Box>
  );
};
