import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { CalcSlider } from './CalcSliders';
import { CalcFields } from './CalcFields';

export const CalculationForm: FC = () => {
  return (
    <Box sx={{ width: '480px', margin: '50px 100px' }}>
      <CalcFields />
      <CalcSlider />
    </Box>
  );
};
