import { styled } from '@mui/material';
import { FlexWrapperType } from '../../../../Types';

export const FlexWrapper = styled('div')<FlexWrapperType>((props) => ({
  display: 'flex',
  width: '100%',
  height: props.height,
  justifyContent: props.justifyContent,
  gap: props.gap,
  flexWrap: props.flexWrap,
  rowGap: props.rowGap,
}));

export const FlexItem = styled('div')<FlexWrapperType>((props) => ({
  display: 'flex',
  width: props.width,
  flexWrap: props.flexWrap,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  rowGap: props.rowGap,
  gap: props.gap,
}));

export const FlexItemTestOverflow = styled('div')<FlexWrapperType>((props) => ({
  display: 'flex',
  width: props.width,
  flexWrap: props.flexWrap,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  rowGap: props.rowGap,
  gap: props.gap,
  // height:'100vh',
  // overflow: 'auto',
  // msOverflowStyle: 'none',
  // scrollbarWidth: 'none',
  //
  // '&:webkitScrollbar':{
  // display: 'none',},
  // whiteSpace: 'nowrap'
}));
