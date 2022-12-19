import React, { FC } from 'react';
import {
  FlexItem,
  FlexWrapper,
} from '../../../../StyledComponents/Wrappers/FlexWrappers';
import {
  SlideInLeftField,
  SlideInRightField,
} from '../../../../../Animations/StyledComponentAnimation';
import {useFormikContext} from "formik";
import {formikTypes} from "../../../../../Types";

export const RegisterFields: FC = () => {
    const { values, handleChange, handleBlur } =
        useFormikContext<formikTypes>();
  return (
    <FlexWrapper flexWrap="wrap">
      <FlexItem gap="40px" width="100%" justifyContent="center">
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
        <SlideInLeftField
          name="email"
          label="Эл. почта"
          type="email"
          variant="outlined"
          color="primary"
          margin="dense"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          sx={{ width: '40%' }}
        />
      </FlexItem>
      <FlexItem gap="40px" width="100%" justifyContent="center">
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
        <SlideInRightField
          name="repeatPassword"
          label="Повтор пароля"
          type="search"
          variant="outlined"
          color="primary"
          margin="dense"
          value={values.repeatPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          sx={{ width: '40%' }}
        />
      </FlexItem>
    </FlexWrapper>
  );
};
