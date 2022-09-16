import React from 'react';
import {
  BackgroundWorldMap,
  BackgroundWorldMapWrapper,
} from '../../StyledComponents/Wrapper';
import World from '../../../images/WorldMap.jpg';
import TemporaryDrawer from './Drawer';
import { Box } from '@mui/material';
import { CalculationForm } from './CalculationForm';
import { ContentWrapper } from './ContentWrapper';

export const MainPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <BackgroundWorldMapWrapper>
        <BackgroundWorldMap src={World} />
          <ContentWrapper>
              <TemporaryDrawer />
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <CalculationForm />
              </div>
          </ContentWrapper>
      </BackgroundWorldMapWrapper>
    </Box>
  );
};
