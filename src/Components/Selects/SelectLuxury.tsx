import React, { useEffect, useState, FC } from 'react';
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

export const SelectLuxury: FC = () => {
  const [luxury, setLuxury] = useState<string>('');
  const [isLuxury, setIsLuxury] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(true);

  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    if (checked) {
      setFieldValue('additionalDocuments', true);
    } else {
      setFieldValue('additionalDocuments', false);
    }
  }, [luxury, checked]);

  const handleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
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
          control={
            <Checkbox
              name="additionalDocuments"
              checked={checked}
              onChange={handleChangeChecked}
            />
          }
          disableTypography={true}
          sx={{ mt: 1, fontSize: '12px' }}
          label="Перевозка доп. документов"
        />
      )}
    </FormControl>
  );
};
