import React, { FC } from 'react';
import { FlexWrapper } from '../../../../StyledComponents/Wrappers/FlexWrappers';
import {
  SlideInLeftField,
  SlideInRightField,
} from '../../../../../Animations/StyledComponentAnimation';

export const LoginFields: FC = () => {
  return (
    <FlexWrapper justifyContent="center" gap="40px">
      <SlideInLeftField
        name="nameCargo"
        label="Логин"
        type="search"
        variant="outlined"
        color="primary"
        margin="dense"
        value={'kljkjl'}
        sx={{ width: '40%' }}
      />
      <SlideInRightField
        name="nameCargo"
        label="Пароль"
        type="search"
        variant="outlined"
        color="primary"
        margin="dense"
        value={''}
        sx={{ width: '40%' }}
      />
    </FlexWrapper>
  );
};
