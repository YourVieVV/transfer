import React, { FC } from 'react';
import {
  FlexItem,
  FlexWrapper,
} from '../../../../StyledComponents/Wrappers/FlexWrappers';
import {
  SlideInLeftField,
  SlideInRightField,
} from '../../../../../Animations/StyledComponentAnimation';

export const RegisterFields: FC = () => {
  return (
    <FlexWrapper flexWrap="wrap">
      <FlexItem gap="40px" width="100%" justifyContent="center">
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
        <SlideInLeftField
          name="nameCargo"
          label="Email"
          type="email"
          variant="outlined"
          color="primary"
          margin="dense"
          value={''}
          sx={{ width: '40%' }}
        />
      </FlexItem>
      <FlexItem gap="40px" width="100%" justifyContent="center">
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
        <SlideInRightField
          name="nameCargo"
          label="Повтор пароля"
          type="search"
          variant="outlined"
          color="primary"
          margin="dense"
          value={''}
          sx={{ width: '40%' }}
        />
      </FlexItem>
    </FlexWrapper>
  );
};
