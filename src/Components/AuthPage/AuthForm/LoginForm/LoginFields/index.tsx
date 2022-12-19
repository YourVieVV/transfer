import React, { FC } from 'react';
import { FlexWrapper } from '../../../../StyledComponents/Wrappers/FlexWrappers';
import {
  SlideInLeftField,
  SlideInRightField,
} from '../../../../../Animations/StyledComponentAnimation';
import {useFormikContext} from "formik";
import {formikTypes} from "../../../../../Types";

export const LoginFields: FC = () => {
    const { values, handleChange, handleBlur } =
        useFormikContext<formikTypes>();
  return (
    <FlexWrapper justifyContent="center" gap="40px">
      <SlideInLeftField
        name="login"
        label="Логин"
        type="search"
        variant="outlined"
        color="primary"
        margin="dense"
        value={values.login}
        onChange={handleChange}
        onBlur={handleBlur}
        sx={{ width: '40%' }}
      />
      <SlideInRightField
        name="password"
        label="Пароль"
        type="search"
        variant="outlined"
        color="primary"
        margin="dense"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        sx={{ width: '40%' }}
      />
    </FlexWrapper>
  );
};
