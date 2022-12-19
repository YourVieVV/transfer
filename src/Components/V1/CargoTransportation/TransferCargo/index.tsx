import React, { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { UpWrapper, Wrapper } from '../../../StyledComponents/Wrappers';
import { TextColor } from '../../../StyledComponents/TextColor';
import { Item } from '../../Grid/Item';
import { CargoList } from '../List/CargoList';
import { useAppSelector } from '../../../../hooks/reduxHooks';
import { formikTypes, Routes } from '../../../../Types';

export const TransferDirection: FC = () => {
  const reduxData = useAppSelector((state) => state.reducer);

  return (
    <Wrapper>
      <UpWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={10}>
            <Grid item xs={10}>
              <Item elevation={0}>
                <TextColor>
                  <Typography variant="h4">Грузы в пути</Typography>
                </TextColor>
              </Item>
            </Grid>
            <Grid item xs={10}>
              {reduxData.map((cargo: formikTypes, index: number) => {
                if (cargo.route === Routes.onMyWay) {
                  return (
                    <CargoList
                      key={index.toString()}
                      cargo={cargo}
                      setRoute={Routes.onMyWay}
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
