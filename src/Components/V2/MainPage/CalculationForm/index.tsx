import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { CalcSlider } from './CalcSliders';
import { CalcFields } from './CalcFields';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';

export const CalculationForm: FC = () => {
  return (
    <Box sx={{ width: '420px' }}>
      <CalcFields />
      <CalcSlider />
    </Box>
  );
};
