import React, { FC } from 'react';
import { UpWrapper, Wrapper } from '../../../StyledComponents/Wrapper';
import { Box, Grid, Typography } from '@mui/material';
import { Item } from '../../Grid/Item';
import { TextColor } from '../../../StyledComponents/TextColor';
import { ModalAddCargo } from '../Modals/ModalAddCargo';
import { CargoList } from '../List/CargoList';
import { useAppSelector } from '../../../../hooks';
import { formikTypes, Routes } from '../../../../redux/Types';

export const AddCargo: FC = () => {
  const reduxData = useAppSelector((state) => state.reducer);

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
              {reduxData.map((cargo: formikTypes, index: number) => {
                if (cargo.route === Routes.createCargo) {
                  return (
                    <CargoList
                      key={index.toString()}
                      cargo={cargo}
                      setRoute={Routes.createCargo}
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
