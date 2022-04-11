import React, { useState } from 'react';
import {
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useFormikContext } from 'formik';

export default function SelectPriority() {
  const [priority, setPriority] = useState('');

  const { setFieldValue } = useFormikContext();

  const handleChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value);
    setFieldValue('priority', event.target.value);
  };

  return (
    <FormControl variant="standard" sx={{ width: '25ch' }}>
      <InputLabel id="demo-simple-select-standard-label">
        Приоритет скорости доставки
      </InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        name="priority"
        value={priority}
        onChange={handleChange}
        margin="dense"
      >
        <MenuItem value={'height'}>Высокий</MenuItem>
        <MenuItem value={'medium'}>Средний</MenuItem>
        <MenuItem value={'low'}>Низкий</MenuItem>
      </Select>
    </FormControl>
  );
}
