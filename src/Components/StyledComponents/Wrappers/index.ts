import { Box, styled } from '@mui/material';
import { Slide } from 'react-slideshow-image';

export const Wrapper = styled('div')({
  padding: '2em 0 0 0',
});

export const WidthWrapper = styled('div')<{ width: string }>((props) => ({
  width: props.width,
}));

export const UpWrapper = styled('div')({
  minHeight: '27vh',
});

export const BackgroundWorldMapWrapper = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
});

export const BackgroundWorldMap = styled('img')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) scale(1.3)',
  objectFit: 'cover',
  width: '100vw',
  height: '100vh',
  zIndex: '-1',
});

export const StyledImageSlider = styled(Slide)({
  '& .each-slideshow-indicator': {
    '&:before': {
      background: 'white',
    },
  },
});

export const StyledDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '60vh',
});