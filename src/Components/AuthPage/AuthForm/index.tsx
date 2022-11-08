import React, { FC, useState } from 'react';

import { LoginFields } from './LoginForm/LoginFields';
import {
  FlexItem,
  FlexWrapper,
} from '../../StyledComponents/Wrappers/FlexWrappers';
import {
  WobbleWrapperButton,
  ZoomInDownDivTypography,
  ZoomInDownTypography,
  ZoomInUpButton,
  ZoomInUpButton1,
} from '../../../Animations/StyledComponentAnimation';
import { Button, IconButton, Link, Snackbar, Typography } from '@mui/material';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CargoTransfer } from '../../V1/CargoTransportation';
import { AuthHeader } from './AuthHeader';
import { SimpleSnackbar } from './Snackbar';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const AuthForm: FC = ({ setter }) => {
  return (
    <FlexWrapper
      width="100%"
      flexWrap="wrap"
      rowGap="20px"
      justifyContent="center"
      height="200px"
    >
      <AuthHeader />
      <Routes>
        <Route path="/login" element={<LoginForm setter={setter} />} />
        <Route path="/register" element={<RegisterForm setter={setter} />} />
      </Routes>
    </FlexWrapper>
  );
};
