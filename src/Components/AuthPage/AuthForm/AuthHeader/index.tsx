import React, { FC, useState } from 'react';

import { Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { ZoomInDownDivTypography } from '../../../../Animations/StyledComponentAnimation';

export const AuthHeader: FC = () => {
  const navigate = useNavigate();

  return (
    <ZoomInDownDivTypography>
      <Typography
        id="defaultText"
        variant="h5"
        onClick={() => navigate('/auth/login')}
      >
        Авторизация
      </Typography>
      <Typography id="defaultText" variant="h5">
        &nbsp;/&nbsp;
      </Typography>
      <Typography
        id="defaultText"
        variant="h5"
        onClick={() => navigate('/auth/register')}
      >
        Регистрация
      </Typography>
    </ZoomInDownDivTypography>
  );
};
