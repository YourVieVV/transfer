import React, { FC } from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { VolumeUp } from '@mui/icons-material';
import MuiInput from '@mui/material/Input';

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
    <Box sx={{width:'100%', display: 'flex', justifyContent: 'center', gap:'60px'}}>
        <div>
        <Typography id="defaultText">Вес (кг)</Typography>
        <Slider
          color="primary"
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          aria-labelledby="input-slider"
          max={1000}
          style={{width:'160px'}}
        />
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
        </div>
      <div>
        <Typography id="defaultText">Объём (м³)</Typography>
        <Slider
          color={'primary'}
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          aria-labelledby="input-slider"
          max={1000}
          style={{width:'160px'}}
        />
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
      </div>
    </Box>
  );
};
