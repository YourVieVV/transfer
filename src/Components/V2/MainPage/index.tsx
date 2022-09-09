import React from 'react';
import {
  BackgroundWorldMap,
  BackgroundWorldMapWrapper,
} from '../../StyledComponents/Wrapper';
import World from '../../../images/WorldMap.jpeg';
import TemporaryDrawer from './Drawer';
import {TextField} from "@mui/material";
import {StyledTextField} from "../../StyledComponents/Buttons";

export const MainPage = () => {
  return (
    <div>
      <BackgroundWorldMapWrapper>
        <BackgroundWorldMap src={World} />
        <TemporaryDrawer />
          <StyledTextField
              name="nameCargo"
              label="Наименование груза"
              type="search"
              variant="outlined"
              margin="dense"
              value={''}
              style={{borderColor:'red'}}
          />
      </BackgroundWorldMapWrapper>
    </div>
  );
};
