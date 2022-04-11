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
import { useFormikContext } from 'formik';

export default function SelectLuxury() {
  const [luxury, setLuxury] = useState('');
  const [isLuxury, setIsLuxury] = useState(false);

  const { setFieldValue } = useFormikContext();

  const handleChange = (event: SelectChangeEvent) => {
    setLuxury(event.target.value);
    if (event.target.value == 'true') {
      setIsLuxury(true);
      setFieldValue('luxury', true);
    } else {
      setIsLuxury(false);
      setFieldValue('luxury', false);
    }
  };

  return (
    <FormControl variant="standard" sx={{ width: '25ch' }}>
      <InputLabel id="demo-simple-select-standard-label">
        Товар - роскошь?
      </InputLabel>
      <Select
        name="luxury"
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
