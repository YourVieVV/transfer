import React, { FC } from 'react';
import { CalcSlider } from './CalcSliders';
import { CalcFields } from './CalcFields';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import {
  FlexItem,
  FlexWrapper,
} from '../../../StyledComponents/Wrappers/FlexWrappers';
import { WidthWrapper } from '../../../StyledComponents/Wrappers';
import { IconWrapper } from '../../../StyledComponents/Wrappers/IconWrapper';

export const CalculationForm: FC = () => {
  return (
    <FlexWrapper
      width="100%"
      flexWrap="wrap"
      rowGap="20px"
      justifyContent="center"
    >
      <Typography id="defaultText" variant="h6">
        Калькулятор стоимости грузоперевозки
      </Typography>
      <CalcFields />
      <CalcSlider />
      <FlexWrapper width="100%" gap="40px" justifyContent="center">
        <FlexItem width="40%">
          <FlexItem>
            <IconWrapper />
            <Typography id="defaultText" variant="h6">
              ≈
            </Typography>
            <Typography id="defaultText" variant="subtitle2">
              Тут будет посчитанное значение &#8381;
            </Typography>
          </FlexItem>
        </FlexItem>
        <WidthWrapper width="40%">
          <Button
            id="button-main"
            variant="contained"
            endIcon={<AutoAwesomeIcon />}
            sx={{ borderRadius: '17px' }}
          >
            Рассчитать
          </Button>
        </WidthWrapper>
      </FlexWrapper>
    </FlexWrapper>
  );
};
