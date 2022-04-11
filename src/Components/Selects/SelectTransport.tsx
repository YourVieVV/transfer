import React from 'react';
import {
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import { useFormikContext } from 'formik';

export default function SelectTransportFields() {
  const [currency, setCurrency] = React.useState('');

  const { setFieldValue } = useFormikContext();

  const handleChange = (event: SelectChangeEvent) => {
    setFieldValue('typeTransportation', event.target.value);
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
        <FormControl
          variant="standard"
          sx={{ m: 1, mb: 0, mt: '-3px', width: '25ch' }}
        >
          <InputLabel id="demo-simple-select-standard-label">
            Выберите тип грузоперевозки
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            name="typeTransportation"
            value={currency}
            onChange={handleChange}
          >
            <MenuItem value={'sea'}>
              <DirectionsBoatFilledIcon color={'primary'} />
            </MenuItem>
            <MenuItem value={'air'}>
              <AirplanemodeActiveIcon color={'primary'} />
            </MenuItem>
            <MenuItem value={'bus'}>
              <DirectionsBusIcon color={'primary'} />
            </MenuItem>
            <MenuItem value={'subway'}>
              <DirectionsSubwayIcon color={'primary'} />
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </Box>
  );
}
