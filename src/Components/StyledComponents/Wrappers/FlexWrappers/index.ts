import { styled } from '@mui/material';
import {FlexWrapperType} from "../../../../Types";

export const FlexWrapper = styled('div')<FlexWrapperType>((props) => ({
    display: 'flex',
    width: '100%',
    justifyContent: props.justifyContent,
    gap:props.gap,
    flexWrap:props.flexWrap,
    rowGap:props.rowGap,
}));

export const FlexItem = styled('div')<FlexWrapperType>((props ) => ({
    display: 'flex',
    width: props.width,
    flexWrap: props.flexWrap,
    justifyContent: props.justifyContent,
    alignItems:props.alignItems,
    rowGap:props.rowGap,
}));
