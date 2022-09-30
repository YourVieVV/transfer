import React from 'react';
import {
  BackgroundWorldMap,
  BackgroundWorldMapWrapper,
} from '../../StyledComponents/Wrapper';
import World from '../../../images/WorldMapDark.jpg';
import TemporaryDrawer from './Drawer';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { CalculationForm } from './CalculationForm';
import { ContentWrapper } from './ContentWrapper';
import { ImageSlider } from './ImageSlider';
import Example from './ImageSlider/Slider2';
import Logo from '../../../images/Logo.png';
import { Wrapper } from './ContentWrapper/ContentWrapper.styles';
import {SearchTrackCargoForm} from "./SearchTrackCargoForm";
import {ChangeDirection} from "./ChangeDirection";
import {AdditionalQuehsion} from "./AdditionalQuehsion";

export const MainPage = () => {
  return (
    <Box sx={{ flexGrow: 1, width: '100vw', height: '100vh' }}>
      <BackgroundWorldMapWrapper>
        <BackgroundWorldMap src={World} />
        <ContentWrapper>
          {/*<img style={{ width:'70px', height:'70px',}} src={Logo}/>*/}
          {/*<div style={{ width:'100px', height:'100px','backgroundImage': `url(${Logo})`, backgroundSize:'100% 100%', }} />*/}

          <div
            style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            <TemporaryDrawer />
          </div>
          <div style={{ display: 'flex', width: '100%', gap: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13377355.00139292!2d96.55301474503143!3d63.24503109463191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1663571890772!5m2!1sen!2sru"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ height: '25vh' }}
              />
            </div>
            <div style={{ width: '35%' }}>
              {/*<ImageSlider />*/}
              <Example />
            </div>
            <div style={{ display: 'flex', width: '45%', flexWrap:'wrap', rowGap:'60px' }}>
              <CalculationForm />
              <SearchTrackCargoForm />
              <AdditionalQuehsion />
            </div>
          </div>
        </ContentWrapper>
      </BackgroundWorldMapWrapper>
    </Box>
  );
};
