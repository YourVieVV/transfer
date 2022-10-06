import React, { FC } from 'react';
import {Box, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import {FlexWrapper} from "../../../../StyledComponents/Wrappers/FlexWrappers";

export const CalcFields: FC = () => {
  return (
    <FlexWrapper justifyContent='center' gap='40px'>
      <TextField
        name="nameCargo"
        label="Откуда"
        type="search"
        variant="outlined"
        color="primary"
        margin="dense"
        value={'kljkjl'}
        sx={{ width:'40%' }}
      />
      <TextField
        name="nameCargo"
        label="Куда"
        type="search"
        variant="outlined"
        color="primary"
        margin="dense"
        value={'kljkjl'}
        sx={{ width:'40%' }}
      />
    </FlexWrapper>
  );
};
