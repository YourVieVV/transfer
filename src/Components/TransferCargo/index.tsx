import React, { FC } from 'react';
import { UpWrapper, Wrapper } from '../../StylesComponents/Wrapper';
import { Box, Grid, Typography } from '@mui/material';
import { Item } from '../Grid/Item';
import { TextColor } from '../../StylesComponents/TextColor';
import { ModalAddCargo } from '../Modals/ModalAddCargo';
import { CargoList } from '../List/CargoList';
import { useAppSelector } from '../../hooks';
import { formikTypes } from '../../redux/Types';

export const TransferCargo: FC = () => {
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
                  <Typography variant="h4">Неотправленные грузы</Typography>
                </TextColor>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item elevation={0}>
                <ModalAddCargo />
              </Item>
            </Grid>
            <Grid item xs={10}>
              {reduxValue.map((cargo: formikTypes, index: number) => {
                if (!cargo.onMyWay && !cargo.isArchive) {
                  return (
                    <CargoList
                      key={index.toString()}
                      cargo={cargo}
                      state="create"
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
};
