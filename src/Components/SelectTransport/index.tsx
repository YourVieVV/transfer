import * as React from 'react';
import { Box, TextField, MenuItem, FormControl } from '@mui/material';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';

const currencies = [
  {
    value: 'sea',
    label: <DirectionsBoatFilledIcon color={'primary'} />,
  },
  {
    value: 'air',
    label: <AirplanemodeActiveIcon color={'primary'} />,
  },
  {
    value: 'bus',
    label: <DirectionsBusIcon color={'primary'} />,
  },
  {
    value: 'subway',
    label: <DirectionsSubwayIcon color={'primary'} />,
  },
];

export default function SelectTransportFields() {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <FormControl variant="standard" sx={{ m: 1, mt: 1, width: '25ch' }}>
          <TextField
            id="standard-select-currency"
            select
            value={currency}
            onChange={handleChange}
            helperText="Выберите тип грузоперевозки"
            variant="standard"
            margin="dense"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      </div>
    </Box>
  );
}
