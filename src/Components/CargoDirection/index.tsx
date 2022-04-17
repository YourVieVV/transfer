import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { UpWrapper, Wrapper } from '../../StylesComponents/Wrapper';
import { TextColor } from '../../StylesComponents/TextColor';
import { Item } from '../Grid/Item';
import { CargoList } from '../List/CargoList';
import { useAppSelector } from '../../hooks';

export default function CargoDirection() {
  const redux = useAppSelector((state) => state);
  const reduxValue = redux.reducer;

  return (
    <Wrapper>
      <UpWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={10}>
            <Grid item xs={8}>
              <Item elevation={0}>
                <TextColor>
                  <Typography variant="h4">Грузы в пути</Typography>
                </TextColor>
              </Item>
            </Grid>
            <Grid item xs={10}>
              {reduxValue.map((cargo: any, index: number) => {
                if (cargo.onMyWay === true && cargo.isArchive === false) {
                  return (
                    <CargoList
                      key={index.toString()}
                      cargo={cargo}
                      state="onMyWay"
                    />
                  );
                } else {
                  return null;
                }
              })}
            </Grid>
          </Grid>
        </Box>
      </UpWrapper>
    </Wrapper>
  );
}
