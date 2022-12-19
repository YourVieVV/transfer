import React, { FC } from 'react';
import { TextField } from '@mui/material';
import { FlexWrapper } from '../../../../StyledComponents/Wrappers/FlexWrappers';
import { useFormikContext } from 'formik';
import { formikTypes } from '../../../../../Types';

export const CalcFields: FC = () => {
  const { values, handleChange, handleBlur } = useFormikContext<formikTypes>();
  return (
    <FlexWrapper justifyContent="center" gap="40px">
      <TextField
        name="fromCalc"
        label="Откуда"
        type="search"
        variant="outlined"
        color="primary"
        margin="dense"
        value={values.fromCalc}
        onChange={handleChange}
        onBlur={handleBlur}
        sx={{ width: '40%' }}
      />
      <TextField
        name="toCalc"
        label="Куда"
        type="search"
        variant="outlined"
        color="primary"
        margin="dense"
        value={values.toCargo}
        onChange={handleChange}
        onBlur={handleBlur}
        sx={{ width: '40%' }}
      />
    </FlexWrapper>
  );
};
