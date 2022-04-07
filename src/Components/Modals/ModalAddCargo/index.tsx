import * as React from 'react';
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
import SelectTransportFields from '../../SelectTransport';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #1976d2',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Добавить груз
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
              <Grid container spacing={2} columns={9}>
                <Grid item xs={4}>
                  <Item elevation={0}>
                    <TextField
                      id="standard-search"
                      label="Наименование груза"
                      type="search"
                      variant="standard"
                      margin="dense"
                    />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item elevation={0}>
                    <TextField
                      id="standard-search"
                      label="Описание груза"
                      type="search"
                      variant="standard"
                      margin="dense"
                    />
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item elevation={0}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, mt: 3, width: '25ch' }}
                    >
                      <Input
                        id="standard-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">кг</InputAdornment>
                        }
                        aria-describedby="standard-weight-helper-text"
                        margin="dense"
                      />
                      <FormHelperText id="standard-weight-helper-text">
                        Вес груза
                      </FormHelperText>
                    </FormControl>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item elevation={0}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, mt: 3, width: '25ch' }}
                    >
                      <Input
                        id="standard-adornment-weight"
                        endAdornment={
                          <InputAdornment position="end">м3</InputAdornment>
                        }
                        aria-describedby="standard-weight-helper-text"
                        margin="dense"
                      />
                      <FormHelperText id="standard-weight-helper-text">
                        Объём груза
                      </FormHelperText>
                    </FormControl>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item elevation={0}>
                    <SelectTransportFields />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item elevation={0}>
                    <TextField
                      id="standard-search"
                      label="Откуда"
                      type="search"
                      variant="standard"
                      margin="dense"
                    />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item elevation={0}>
                    <TextField
                      id="standard-search"
                      label="Куда"
                      type="search"
                      variant="standard"
                      margin="dense"
                    />
                  </Item>
                </Grid>
              </Grid>
            </Typography>
          </TextColor>
        </Box>
      </Modal>
    </div>
  );
}
