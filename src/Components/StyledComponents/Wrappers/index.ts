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

export const BackgroundWorldMap = styled('img')<{ scale: string }>(
  ({ scale }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%) ${scale}`,
    objectFit: 'cover',
    width: '100vw',
    height: '100vh',
    zIndex: '-1',
  })
);

export const ImgLogo = styled('img')({
  width: '150px',
  height: '145px',
  marginLeft: '80px',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const StyledImageSlider = styled(Slide)({
  '& .each-slideshow-indicator': {
    '&:before': {
      background: 'white',
    },
  },
});
