import { Box, styled } from '@mui/material';

export const Wrapper = styled('div')({
  padding: '2em 0 0 0',
});

export const UpWrapper = styled('div')({
  minHeight: '27vh',
});

export const BackgroundWorldMapWrapper = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
});

export const BackgroundWorldMap = styled('img')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.3);
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  z-index: -1;
`;
