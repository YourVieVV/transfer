import { styled, Typography } from '@mui/material';

export const StyledTypography = styled(Typography)({
  color: '#befdff',
  textShadow: '0px 0px 10px #6ff4ff, 0 0 25px #0fc0ff, 0 0 5px #048cff',
  fontWeight: 'bold',
  '&:hover': {
    cursor: 'pointer',
    textShadow:
      '0px 0px 20px #6ff4ff, 0px 0px 30px #19aef4,0px 0px 15px #0145ca',
  },
});
