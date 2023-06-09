import React, { FC, useEffect, useState } from 'react';
import {
  WobbleWrapperButton,
  ZoomInUpButton,
} from '../../../../Animations/StyledComponentAnimation';
import {
  FlexItem,
  FlexWrapper,
} from '../../../StyledComponents/Wrappers/FlexWrappers';
import { useNavigate } from 'react-router-dom';

import { SimpleSnackbar } from '../Snackbar';
import { RegisterFields } from './RegisterFields';
import { TEXT } from '../../../../Types';
import { useButtonAnimationTimeout } from '../../../../hooks/useButtonAnimationTimeout';

export const RegisterForm: FC = () => {
  const navigate = useNavigate();
  const { buttonAnimation, setButtonAnimation } = useButtonAnimationTimeout();

  const handleRegistration = () => {
    setButtonAnimation(true);
    // navigate('/');
  }

  setTimeout(() => setButtonAnimation(false), 1000);
  return (
    <FlexWrapper flexWrap="wrap" justifyContent="center" gap="10px">
      <RegisterFields />

      <FlexItem width="100%" justifyContent="space-around">
        <SimpleSnackbar text={TEXT.HELP} />
        <WobbleWrapperButton isAnimation={buttonAnimation}>
          <ZoomInUpButton
            variant="contained"
            onClick={handleRegistration}
          >
            Зарегистрироваться!
          </ZoomInUpButton>
        </WobbleWrapperButton>
      </FlexItem>
    </FlexWrapper>
  );
};
