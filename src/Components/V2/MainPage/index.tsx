import React from 'react';
import {
  BackgroundWorldMap,
  BackgroundWorldMapWrapper,
} from '../../StyledComponents/Wrapper';
import World from '../../../images/WorldMap.jpg';
import TemporaryDrawer from './Drawer';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { CalculationForm } from './CalculationForm';
import { ContentWrapper } from './ContentWrapper';
import { ImageSlider } from './ImageSlider';

export const MainPage = () => {
  return (
    <Box sx={{ flexGrow: 1, width: '100vw', height:'100vh' }}>
      <BackgroundWorldMapWrapper>
        <BackgroundWorldMap src={World} />
        <ContentWrapper>
          <Grid container spacing={3}>
          <Grid xs={12}>
            <TemporaryDrawer />
          </Grid>
          <Grid xs={4}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13377355.00139292!2d96.55301474503143!3d63.24503109463191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1663571890772!5m2!1sen!2sru"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ display: 'flex', width: '20vw', height: '25vh' }}
            />
          </Grid>
          <Grid xs={4}>

              <ImageSlider />

          </Grid>

          <Grid xs={4}>
            <CalculationForm />
          </Grid>
          </Grid>
        </ContentWrapper>
      </BackgroundWorldMapWrapper>
    </Box>
  );
};
