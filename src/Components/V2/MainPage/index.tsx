import React from 'react';
import {
  BackgroundWorldMap,
  BackgroundWorldMapWrapper,
} from '../../StyledComponents/Wrapper';
import World from '../../../images/WorldMap.jpg';
import TemporaryDrawer from './Drawer';
import { Box, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { CalculationForm } from './CalculationForm';

export const MainPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BackgroundWorldMapWrapper>
        <BackgroundWorldMap src={World} />
        <TemporaryDrawer />
        <CalculationForm />
      </BackgroundWorldMapWrapper>
    </Box>
  );
};
