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

import { SimpleSnackbar } from '../Snackbar';
import { RegisterFields } from './RegisterFields';
import { TEXT } from '../../../../Types';

export const RegisterForm: FC = ({ setter }) => {
  const navigate = useNavigate();
  const [buttonAnimation, setButtonAnimation] = useState(false);
  const [timeoutState, setTimeoutState] = useState(false);
  setTimeout(() => setButtonAnimation(false), 1000);
  return (
    <FlexWrapper flexWrap="wrap" justifyContent="center" gap="10px">
      <RegisterFields />

      <FlexItem width="100%" justifyContent="space-around">
        <SimpleSnackbar text={TEXT.HELP} />
        <WobbleWrapperButton isAnimation={buttonAnimation}>
          <ZoomInUpButton
            variant="contained"
            onClick={() => {
              setButtonAnimation(true);
              setter(true);
              navigate('/');
            }}
          >
            Зарегистрироваться!
          </ZoomInUpButton>
        </WobbleWrapperButton>
      </FlexItem>
    </FlexWrapper>
  );
};
