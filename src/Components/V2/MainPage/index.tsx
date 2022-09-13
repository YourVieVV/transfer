import React from 'react';
import {
  BackgroundWorldMap,
  BackgroundWorldMapWrapper,
} from '../../StyledComponents/Wrapper';
import World from '../../../images/WorldMap.jpg';
import TemporaryDrawer from './Drawer';
import { TextField } from '@mui/material';
import { CalculationForm } from './CalculationForm';

export const MainPage = () => {
  return (
    <div>
      <BackgroundWorldMapWrapper>
        <BackgroundWorldMap src={World} />
        <TemporaryDrawer />
        <CalculationForm />
      </BackgroundWorldMapWrapper>
    </div>
  );
};
