import React, { useState } from 'react';
import {
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

export default function SelectLuxury() {
  const [luxury, setLuxury] = useState('');
  const [isLuxury, setIsLuxury] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setLuxury(event.target.value);
    event.target.value == 'true' ? setIsLuxury(true) : setIsLuxury(false);
  };

  return (
    <FormControl variant="standard" sx={{ width: '25ch' }}>
      <InputLabel id="demo-simple-select-standard-label">
        Товар - роскошь?
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={luxury}
        onChange={handleChange}
        margin="dense"
      >
        <MenuItem value={'true'}>Да</MenuItem>
        <MenuItem value={'false'}>Нет</MenuItem>
      </Select>
      {isLuxury && (
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          disableTypography={true}
          sx={{ mt: 1, fontSize: '12px' }}
          label="Перевозка доп. документов"
        />
      )}
    </FormControl>
  );
}
