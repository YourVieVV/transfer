import React from 'react';
import { UpWrapper, Wrapper } from '../../StylesComponents/Wrapper';
import { Box, Grid, Typography } from '@mui/material';
import { Item } from '../Grid/Item';
import { TextColor } from '../../StylesComponents/TextColor';

export default function TransferCargo() {
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
            <Grid item xs={5}>
              <Item>xs=8</Item>
            </Grid>
          </Grid>
        </Box>
      </UpWrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={10}>
          <Grid item xs={8}>
            <Item elevation={0}>
              <TextColor>
                <Typography variant="h4">Непринятые грузы</Typography>
              </TextColor>
            </Item>
          </Grid>
          <Grid item xs={5}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </Wrapper>
  );
}
