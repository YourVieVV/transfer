import React, { useEffect, useState, FC } from 'react';
import {
  Grid,
  TextField,
  Modal,
  Typography,
  Box,
  FormControl,
  Input,
  InputAdornment,
  FormHelperText,
} from '@mui/material';
import { TextColor } from '../../../StylesComponents/TextColor';
import CloseIcon from '@mui/icons-material/Close';
import { Item } from '../../Grid/Item';
import SelectTransportFields from '../../Selects/SelectTransport';
import { ButtonLoading } from '../../Buttons/ButtonLoading';
import SelectLuxury from '../../Selects/SelectLuxury';
import SelectPriority from '../../Selects/SelectPriority';
import { useFormikContext } from 'formik';
import { formikTypes } from '../../../redux/Types';
import { modalStyle } from '../../../StylesComponents/Modals';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { useSelector } from 'react-redux';

interface modalEditCargoProps {
  cargo: formikTypes;
}

export const ModalEditCargo:FC<modalEditCargoProps> = ({ cargo }) => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { values, setFieldValue, handleChange, handleBlur } =
    useFormikContext<formikTypes>();
  const stateValues = cargo;
  const redux = useSelector((state) => state.reducer);

  const returnValues = redux.find((item) => item.id === stateValues.id);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setFieldValue('id', returnValues.id);
    setFieldValue('nameCargo', returnValues.nameCargo);
    setFieldValue('volume', returnValues.volume);
    setFieldValue('weight', returnValues.weight);
    setFieldValue('product', returnValues.product);
    setFieldValue('price', returnValues.price);
    setFieldValue('departure', returnValues.departure);
    setFieldValue('arrival', returnValues.arrival);
    setIsEdit(true);
  }, [open]);

  return (
    <div>
      <CreateOutlinedIcon color="info" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <TextColor>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Изменение груза
              <CloseIcon style={{ float: 'right' }} onClick={handleClose} />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Grid container columns={4} justifyContent="center">
                <Grid item xs={2}>
                  <Item elevation={0}>
                    <TextField
                      name="nameCargo"
                      label="Наименование груза"
                      type="search"
                      variant="standard"
                      margin="dense"
                      value={values.nameCargo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item elevation={0} sx={{ display: 'flex' }}>
                    <Item elevation={0} sx={{ width: '50%', p: 0 }}>
                      <FormControl variant="standard" sx={{ width: '60%' }}>
                        <FormHelperText id="standard-weight-helper-text">
                          Объём груза
                        </FormHelperText>
                        <Input
                          name="volume"
                          endAdornment={
                            <InputAdornment position="end">м³</InputAdornment>
                          }
                          aria-describedby="standard-weight-helper-text"
                          margin="dense"
                          value={values.volume}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </FormControl>
                    </Item>
                    <Item elevation={0} sx={{ width: '50%', p: 0, mr: '25px' }}>
                      <FormControl variant="standard" sx={{ width: '60%' }}>
                        <FormHelperText id="standard-weight-helper-text">
                          Вес груза
                        </FormHelperText>
                        <Input
                          name="weight"
                          endAdornment={
                            <InputAdornment position="end">кг</InputAdornment>
                          }
                          aria-describedby="standard-weight-helper-text"
                          margin="dense"
                          value={values.weight}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </FormControl>
                    </Item>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item elevation={0}>
                    <TextField
                      name="product"
                      label="Характер груза(товары)"
                      placeholder="Введите товары через запятую"
                      type="search"
                      variant="standard"
                      margin="dense"
                      sx={{ width: '83%' }}
                      value={values.product}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item elevation={0}>
                    <SelectLuxury />
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item elevation={0}>
                    <TextField
                      name="price"
                      label="Объявленная ценность"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                      value={values.price}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Item>
                </Grid>
              </Grid>
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              sx={{ mt: 3 }}
            >
              Изменение направления
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Grid container columns={4} justifyContent="center">
                <Grid item xs={2}>
                  <Item elevation={0}>
                    <TextField
                      name="departure"
                      label="Откуда"
                      type="search"
                      variant="standard"
                      margin="dense"
                      value={values.departure}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item elevation={0}>
                    <TextField
                      name="arrival"
                      label="Куда"
                      type="search"
                      variant="standard"
                      margin="dense"
                      value={values.arrival}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item elevation={0}>
                    <SelectTransportFields />
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item elevation={0}>
                    <SelectPriority />
                  </Item>
                </Grid>
                <ButtonLoading isEdit={isEdit} editValues={stateValues} />
              </Grid>
            </Typography>
          </TextColor>
        </Box>
      </Modal>
    </div>
  );
}
