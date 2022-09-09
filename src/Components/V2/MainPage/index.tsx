import React from 'react';
import {
  BackgroundWorldMap,
  BackgroundWorldMapWrapper,
} from '../../StyledComponents/Wrapper';
import World from '../../../images/WorldMap.jpeg';
import TemporaryDrawer from './Drawer';

export const MainPage = () => {
  return (
    <div>
      <BackgroundWorldMapWrapper>
        <BackgroundWorldMap src={World} />
        <TemporaryDrawer />
      </BackgroundWorldMapWrapper>
    </div>
  );
};
