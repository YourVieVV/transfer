import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { UpWrapper, Wrapper } from '../../StylesComponents/Wrapper';
import { TextColor } from '../../StylesComponents/TextColor';
import BasicModal from '../Modals/ModalAddCargo';
import { Item } from '../Grid/Item';

export default function CargoDirection() {
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
                <BasicModal />
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
                <Typography variant="h4">Направление</Typography>
              </TextColor>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item elevation={0}>
              <Button variant="outlined">Добавить направление</Button>
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
