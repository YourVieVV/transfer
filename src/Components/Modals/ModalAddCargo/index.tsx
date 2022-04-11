import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Modal,
  Typography,
  Button,
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
import ButtonLoading from '../../Buttons/ButtonLoading';
import SelectLuxury from '../../Selects/SelectLuxury';
import SelectPriority from '../../Selects/SelectPriority';
import { Formik } from 'formik';
import { initialValueFormik } from '../../../redux/Types';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #1976d2',
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
  overflowX: 'hidden',
};

export default function ModalAddCargo() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Formik
      initialValues={initialValueFormik}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <div>
          <Button variant="outlined" onClick={handleOpen}>
            Добавить грузоперевозку
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <TextColor>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                  Добавление груза
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
                                <InputAdornment position="end">
                                  м³
                                </InputAdornment>
                              }
                              aria-describedby="standard-weight-helper-text"
                              margin="dense"
                              value={values.volume}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </FormControl>
                        </Item>
                        <Item
                          elevation={0}
                          sx={{ width: '50%', p: 0, mr: '25px' }}
                        >
                          <FormControl variant="standard" sx={{ width: '60%' }}>
                            <FormHelperText id="standard-weight-helper-text">
                              Вес груза
                            </FormHelperText>
                            <Input
                              name="weight"
                              endAdornment={
                                <InputAdornment position="end">
                                  кг
                                </InputAdornment>
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
                  Добавление направления
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
                    <ButtonLoading />
                  </Grid>
                </Typography>
              </TextColor>
            </Box>
          </Modal>
        </div>
      )}
    </Formik>
  );
}
