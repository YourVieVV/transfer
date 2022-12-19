import React, { FC } from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import MuiInput from '@mui/material/Input';
import {
    FlexItem,
    FlexWrapper,
} from '../../../../StyledComponents/Wrappers/FlexWrappers';

const Input = styled(MuiInput)({
  color: '#ffffff',
  width: '52px',
});

export const CalcSlider: FC = () => {
  const [value, setValue] = React.useState<
    number | string | Array<number | string>
  >(0);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 1000) {
      setValue(1000);
    }
  };
  return (
    <FlexWrapper justifyContent="center" gap="40px">
      <FlexItem width={'215px'} flexWrap={'wrap'}>
      <Typography id="defaultText" sx={{ width: '100%' }}>
        Вес (кг)
      </Typography>
      <Slider
        color="primary"
        value={typeof value === 'number' ? value : 0}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        aria-labelledby="input-slider"
        max={1000}
        sx={{ width: '100%' }}
      />
      <Input
        name="weight"
        value={value}
        size="small"
        onChange={handleInputChange}
        onBlur={handleBlur}
        inputProps={{
          step: 1,
          min: 0,
          max: 1000,
          type: 'number',
          'aria-labelledby': 'input-slider',
        }}
        sx={{ marginLeft: 'auto' }}
      />
      </FlexItem>
      <FlexItem width={'215px'} flexWrap={'wrap'}>
        <Typography id="defaultText" style={{ width: '100%' }}>
          Объём (м³)
        </Typography>
        <Slider
          color={'primary'}
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          aria-labelledby="input-slider"
          max={1000}
          sx={{ width: '100%' }}
        />
        <Input
          name="volume"
          value={value}
          size="small"
          onChange={handleInputChange}
          onBlur={handleBlur}
          inputProps={{
            step: 1,
            min: 0,
            max: 1000,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
          sx={{ marginLeft: 'auto' }}
        />
      </FlexItem>
    </FlexWrapper>
  );
};
