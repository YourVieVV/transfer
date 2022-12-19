import React, { FC } from 'react';

import { FlexWrapper } from '../../StyledComponents/Wrappers/FlexWrappers';
import { Route, Routes } from 'react-router-dom';
import { AuthHeader } from './AuthHeader';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const AuthForm: FC = () => {
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
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </FlexWrapper>
  );
};
