import React from 'react';
import { UpWrapper, Wrapper } from '../../StylesComponents/Wrapper';
import { Box, Grid, Typography } from '@mui/material';
import { Item } from '../Grid/Item';
import { TextColor } from '../../StylesComponents/TextColor';
import { CargoList } from '../List/CargoList';
import { useSelector } from 'react-redux';

export const Archive = () => {
  const redux = useSelector((state) => state);

  const reduxValue = redux.reducer;
  return (
    <Wrapper>
      <UpWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={10}>
            <Grid item xs={10}>
              <Item elevation={0}>
                <TextColor>
                  <Typography variant="h4">Успешно доставленные</Typography>
                </TextColor>
              </Item>
            </Grid>
            <Grid item xs={10}>
              {reduxValue.map((cargo: any, index: number) => {
                if (!cargo.onMyWay && cargo.isArchive && cargo.isDone) {
                  return (
                    <CargoList
                      key={index.toString()}
                      cargo={cargo}
                      state="archive"
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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={10}>
          <Grid item xs={10}>
            <Item elevation={0}>
              <TextColor>
                <Typography variant="h4">Отклонены при получении</Typography>
              </TextColor>
            </Item>
          </Grid>
          <Grid item xs={10}>
            {reduxValue.map((cargo: any, index: number) => {
              if (!cargo.onMyWay && cargo.isArchive && !cargo.isDone) {
                return (
                  <CargoList
                    key={index.toString()}
                    cargo={cargo}
                    state="archive"
                  />
                );
              } else {
                return null;
              }
            })}
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
};
