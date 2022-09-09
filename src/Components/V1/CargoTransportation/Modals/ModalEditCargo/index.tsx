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
import { TextColor } from '../../../../StyledComponents/TextColor';
import CloseIcon from '@mui/icons-material/Close';
import { Item } from '../../../Grid/Item';
import { SelectTransportFields } from '../../../Selects/SelectTransport';
import { ButtonLoading } from '../../../Buttons/ButtonLoading';
import { SelectLuxury } from '../../../Selects/SelectLuxury';
import { SelectPriority } from '../../../Selects/SelectPriority';
import { useFormikContext } from 'formik';
import { formikTypes } from '../../../../../redux/Types';
import { modalStyle } from '../../../../StyledComponents/Modals';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { useAppSelector } from '../../../../../hooks';

interface modalEditCargoProps {
  cargo: formikTypes;
}

export const ModalEditCargo: FC<modalEditCargoProps> = ({ cargo }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const { values, setFieldValue, handleChange, handleBlur } =
    useFormikContext<formikTypes>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setFieldValue('id', cargo.id);
    setFieldValue('nameCargo', cargo.nameCargo);
    setFieldValue('volume', cargo.volume);
    setFieldValue('weight', cargo.weight);
    setFieldValue('product', cargo.product);
    setFieldValue('price', cargo.price);
    setFieldValue('departure', cargo.departure);
    setFieldValue('arrival', cargo.arrival);
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
            <Grid container columns={4} justifyContent="center">
              <Grid item xs={2}>
                <Item elevation={0}>
                  <TextField
                    required
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
                        required
                        type="number"
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
                        required
                        type="number"
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
                    required
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
                    required
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
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h2"
              sx={{ mt: 3 }}
            >
              Изменение направления
            </Typography>
            <Grid container columns={4} justifyContent="center">
              <Grid item xs={2}>
                <Item elevation={0}>
                  <TextField
                    required
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
                    required
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
              <ButtonLoading isEdit={isEdit} Archive={false} />
            </Grid>
          </TextColor>
        </Box>
      </Modal>
    </div>
  );
};
