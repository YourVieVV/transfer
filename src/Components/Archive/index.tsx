import React from 'react';
import { UpWrapper, Wrapper } from '../../StylesComponents/Wrapper';
import { Box, Grid, Typography } from '@mui/material';
import { Item } from '../Grid/Item';
import { TextColor } from '../../StylesComponents/TextColor';
import { CargoList } from '../List/CargoList';
import { useAppSelector } from '../../hooks';
import { formikTypes, Routes } from '../../redux/Types';

export const Archive = () => {
  const reduxData = useAppSelector((state) => state.reducer);

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
              {reduxData.map((cargo: formikTypes, index: number) => {
                if (cargo.route === Routes.inArchive && cargo.isDone) {
                  return (
                    <CargoList
                      key={index.toString()}
                      cargo={cargo}
                      setRoute={Routes.inArchive}
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
            {reduxData.map((cargo: formikTypes, index: number) => {
              if (cargo.route === Routes.inArchive && !cargo.isDone) {
                return (
                  <CargoList
                    key={index.toString()}
                    cargo={cargo}
                    setRoute={Routes.inArchive}
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
