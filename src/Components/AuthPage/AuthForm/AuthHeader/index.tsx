import React, { FC, useState } from 'react';

import { Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { ZoomInDownDivTypography } from '../../../../Animations/StyledComponentAnimation';
import {StyledTypography} from "../../../StyledComponents/Typography";

export const AuthHeader: FC = () => {
  const navigate = useNavigate();

  return (
    <ZoomInDownDivTypography>
      <StyledTypography
        id="defaultText"
        variant="h5"
        onClick={() => navigate('/auth/login')}
      >
        Авторизация
      </StyledTypography>
      <Typography id="defaultText" variant="h5" sx={{
          color: '#befdff',
          textShadow: '0px 0px 10px #6ff4ff, 0 0 25px #0fc0ff, 0 0 5px #048cff',
          }}>
        &nbsp;/&nbsp;
      </Typography>
      <StyledTypography
        id="defaultText"
        variant="h5"
        onClick={() => navigate('/auth/register')}
      >
        Регистрация
      </StyledTypography>
    </ZoomInDownDivTypography>
  );
};
