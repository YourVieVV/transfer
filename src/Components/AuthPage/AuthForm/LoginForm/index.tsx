import React, { FC, useState } from 'react';
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

export const LoginForm: FC = ({ setter }) => {
  const navigate = useNavigate();
  const [buttonAnimation, setButtonAnimation] = useState(false);
  const [timeoutState, setTimeoutState] = useState(false);
  setTimeout(() => setButtonAnimation(false), 1000);
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
              setter(true);
              navigate('/');
            }}
          >
            Авторизоваться!
          </ZoomInUpButton>
        </WobbleWrapperButton>
      </FlexItem>
    </FlexWrapper>
  );
};
