import React, { FC } from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { VolumeUp } from '@mui/icons-material';
import MuiInput from '@mui/material/Input';

const PrettoSlider = styled(Slider)({
  color: '#5dc0fe',
  height: 5,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 21,
    width: 21,
    backgroundColor: '#ffffff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 14,
    background: 'unset',
    padding: 0,
    width: 31,
    height: 31,
    borderRadius: '50% 50% 50% 50%',
    backgroundColor: '#5dc0fe',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
});
const Input = styled(MuiInput)({
  color: '#ffffff',
  width: '50px',
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
    <Grid container spacing={1} alignItems="center">
      <Grid container alignItems="center" xs={6}>
        <Grid xs={12}>
          <Typography id="input-slider" gutterBottom>
            Вес (кг)
          </Typography>
        </Grid>
        <Grid xs={9}>
          <PrettoSlider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="input-slider"
            max={1000}
          />
        </Grid>
        <Grid xs={3}>
          <Input
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
          />
        </Grid>
      </Grid>
      <Grid container alignItems='' xs={6}>
        <Grid xs={12}>
          <div>Объём (м³)</div>
        </Grid>
        <Grid xs={9}>
          <PrettoSlider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            aria-labelledby="input-slider"
            max={1000}
          />
        </Grid>
        <Grid xs={3}>
          <Input
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
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
