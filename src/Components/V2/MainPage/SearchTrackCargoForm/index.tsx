import React, { FC } from 'react';
import { TextField, Typography } from '@mui/material';
import { ChangeDirection } from '../ChangeDirection';
import {useFormikContext} from "formik";
import {formikTypes} from "../../../../Types";

export const SearchTrackCargoForm: FC = () => {
    const { values, handleChange, handleBlur } =
        useFormikContext<formikTypes>();
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        gap: '20px 40px',
        flexWrap: 'wrap',
      }}
    >
      <Typography id="defaultText" style={{ width: '100%' }} variant="h6">
        Хотите узнать?
      </Typography>
      <div style={{ width: '40%' }}>
        <Typography id="defaultText" variant="subtitle1" gutterBottom>
          Где ваш груз сейчас?
        </Typography>
          <TextField
              name="trackNumber"
              label="Введите трек-номер"
              type="search"
              variant="outlined"
              color="primary"
              margin="dense"
              value={values.trackNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ width: '100%' }}
          />
      </div>
      <ChangeDirection />
    </div>
  );
};
