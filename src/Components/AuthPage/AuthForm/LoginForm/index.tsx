import React, { FC, useEffect, useState } from 'react';
import {
  SlideInLeftField,
  WobbleWrapperButton,
  ZoomInUpButton,
} from '../../../../Animations/StyledComponentAnimation';
import {
  FlexItem,
  FlexWrapper,
} from '../../../StyledComponents/Wrappers/FlexWrappers';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { LoginFields } from './LoginFields';
import { SimpleSnackbar } from '../Snackbar';
import { TEXT } from '../../../../Types';
import { useButtonAnimationTimeout } from '../../../../hooks/useButtonAnimationTimeout';

export const LoginForm: FC = () => {
  const navigate = useNavigate();

  const { buttonAnimation, setButtonAnimation } = useButtonAnimationTimeout();

  return (
    <FlexWrapper flexWrap="wrap" gap="10px">
      <LoginFields />

      <FlexItem width="100%" justifyContent="space-around">
        <SimpleSnackbar text={TEXT.PASSWORD} />
        <WobbleWrapperButton isAnimation={buttonAnimation}>
          <ZoomInUpButton
            variant="contained"
            onClick={() => {
              setButtonAnimation(true);
              // navigate('/');
            }}
          >
            Авторизоваться!
          </ZoomInUpButton>
        </WobbleWrapperButton>
      </FlexItem>
    </FlexWrapper>
  );
};
