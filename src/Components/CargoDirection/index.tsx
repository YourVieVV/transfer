import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { UpWrapper, Wrapper } from '../../StylesComponents/Wrapper';
import { TextColor } from '../../StylesComponents/TextColor';
import { Item } from '../Grid/Item';
import ModalAddCargo from '../Modals/ModalAddCargo';
import { CargoList } from '../List/CargoList';
import { useSelector } from 'react-redux';

export default function CargoDirection() {
  const reduxValue = useSelector((state) => state.reducer);

  return (
    <Wrapper>
      <UpWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={10}>
            <Grid item xs={8}>
              <Item elevation={0}>
                <TextColor>
                  <Typography variant="h4">Грузы</Typography>
                </TextColor>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item elevation={0}>
                <ModalAddCargo />
              </Item>
            </Grid>
            <Grid item xs={5}>
              {reduxValue.map((cargo: any, index) => {
                return <CargoList key={index.toString()} cargo={cargo} />;
              })}
            </Grid>
          </Grid>
        </Box>
      </UpWrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={10}>
          <Grid item xs={8}>
            <Item elevation={0}>
              <TextColor>
                <Typography variant="h4">Направление</Typography>
              </TextColor>
            </Item>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
}
