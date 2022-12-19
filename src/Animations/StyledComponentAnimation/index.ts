import { Button, keyframes, styled, TextField } from '@mui/material';
import {
  slideInLeft,
  slideInUp,
  slideInDown,
  slideInRight,
  zoomInDown,
  zoomInUp,
  wobble,
  headShake,
  hinge,
  zoomOutUp,
  zoomOut,
} from 'react-animations';
import Typography from '@mui/material/Typography';

const timeAnimation = {
  wobble: '1s',
  twoSec: '2s',
  other: '3s',
};

const slideInLeftAnimation = keyframes`${slideInLeft}`;
const slideInRightAnimation = keyframes`${slideInRight}`;
const slideInUpAnimation = keyframes`${slideInUp}`;
const slideInDownAnimation = keyframes`${slideInDown}`;
const zoomInDownAnimation = keyframes`${zoomInDown}`;
const zoomInUpAnimation = keyframes`${zoomInUp}`;
const wobbleAnimation = keyframes`${wobble}`;
const hingeAnimation = keyframes`${hinge}`;

export const ZoomInUpButton = styled(Button)(() => ({
  animation: `${timeAnimation.twoSec} ${slideInUpAnimation}`,
}));

export const ZoomInDownDivTypography = styled('div')({
  animation: `${timeAnimation.twoSec} ${slideInDownAnimation}`,
  display: 'flex',
  height: '20px',
});

export const WobbleWrapperButton = styled('div')<{ isAnimation: boolean }>(
  ({ isAnimation }) => ({
    animation: `${timeAnimation.wobble} ${isAnimation && wobbleAnimation}`,
  })
);

export const SlideInLeftField = styled(TextField)({
  animation: `${timeAnimation.other} ${slideInLeftAnimation}`,
});

export const SlideInRightField = styled(TextField)({
  animation: `${timeAnimation.other} ${slideInRightAnimation}`,
});

// export const Test = styled('div')<{isAnimation:boolean}>(({isAnimation}) => ({
//     animation: `${timeAnimation.other} ${isAnimation && keyframes`${zoomOutUp}`}`,
// }));
//
// export const Test2 = styled('div')<{isAnimation:boolean}>(({isAnimation}) => ({
//     animation: `${timeAnimation.other} ${isAnimation && keyframes`${zoomInDown}`}`,
// }));
