import React from 'react';
import {
  BackgroundWorldMap,
  BackgroundWorldMapWrapper,
  WidthWrapper,
} from '../../StyledComponents/Wrappers';
import World from '../../../images/WorldMapDark.jpg';
import TemporaryDrawer from './Drawer';
import { Box } from '@mui/material';
import { CalculationForm } from './CalculationForm';
import { ContentWrapper } from './ContentWrappers';
import Example from './ImageSlider/Slider2';
import {SearchTrackCargoForm} from "./SearchTrackCargoForm";
import {AdditionalQuehsion} from "./AdditionalQuehsion";
import {FlexItem, FlexWrapper} from '../../StyledComponents/Wrappers/FlexWrappers';

export const MainPage = () => {
  return (
    <Box sx={{ flexGrow: 1, width: '100vw', height: '100vh' }}>
      <BackgroundWorldMapWrapper>
        <BackgroundWorldMap src={World} scale='scale(1.3)'/>
        <ContentWrapper>
          {/*<img style={{ width:'70px', height:'70px',}} src={Logo}/>*/}
          {/*<div style={{ width:'100px', height:'100px','backgroundImage': `url(${Logo})`, backgroundSize:'100% 100%', }} />*/}

          <FlexWrapper justifyContent='center'>
            <TemporaryDrawer />
          </FlexWrapper>
          <FlexWrapper gap='30px'>
            <FlexItem alignItems='center'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13377355.00139292!2d96.55301474503143!3d63.24503109463191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sru!4v1663571890772!5m2!1sen!2sru"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ height: '25vh' }}
              />
            </FlexItem>
            <WidthWrapper width='35%'>
              <Example />
            </WidthWrapper>
            <FlexItem width='45%' rowGap='60px' flexWrap='wrap'>
              <CalculationForm />
              <SearchTrackCargoForm />
              <AdditionalQuehsion />
            </FlexItem>
          </FlexWrapper>
        </ContentWrapper>
      </BackgroundWorldMapWrapper>
    </Box>
  );
};
