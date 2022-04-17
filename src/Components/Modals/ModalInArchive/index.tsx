import React, { useState, FC, SyntheticEvent } from 'react';
import {
  Grid,
  TextField,
  Modal,
  Typography,
  Box,
  Rating,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import { TextColor } from '../../../StylesComponents/TextColor';
import CloseIcon from '@mui/icons-material/Close';
import { Item } from '../../Grid/Item';
import { ButtonLoading } from '../../Buttons/ButtonLoading';
import { useFormikContext } from 'formik';
import { data, formikTypes } from '../../../redux/Types';
import { modalStyle } from '../../../StylesComponents/Modals';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import { TransferList } from '../../TransferList';

interface modalEditCargoProps {
  cargo: formikTypes;
}

export const ModalInArchive: FC<modalEditCargoProps> = ({ cargo }) => {
  const [open, setOpen] = useState(false);
  const isEdit = true;
  const [ratingValue, setRatingValue] = useState<number | null>(0);
  const [commentValue, setCommentValue] = useState('');
  const { setFieldValue } = useFormikContext<formikTypes>();
  const stateValues = cargo;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentValue(event.target.value);
    stateValues.comment = event.target.value;
  };
  const handleChangeRadio = (event: data) => {
    if (event.target.value === 'true') {
      setFieldValue('isDone', true);
    } else {
      setFieldValue('isDone', false);
    }
  };
  const handleChangeRating = (
    event: SyntheticEvent<Element, Event>,
    newValue: number | null
  ) => {
    setRatingValue(newValue);
    if (newValue != null) {
      stateValues.rating = newValue;
    }
  };

  return (
    <div>
      <AssignmentTurnedInIcon color="info" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <TextColor>
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Приём груза
              <CloseIcon style={{ float: 'right' }} onClick={handleClose} />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Grid container columns={4} justifyContent="center">
                <Grid item xs={4}>
                  <Item elevation={0}>
                    <TransferList cargo={stateValues} />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item elevation={0}>
                    <FormLabel id="demo-row-radio-buttons-group-label">
                      Груз прибыл полноценным?
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="isDone"
                      sx={{ justifyContent: 'center' }}
                      onChange={handleChangeRadio}
                      defaultValue="true"
                    >
                      <FormControlLabel
                        value="true"
                        control={<Radio />}
                        label="Да"
                      />
                      <FormControlLabel
                        value="false"
                        control={<Radio />}
                        label="Нет"
                      />
                    </RadioGroup>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item elevation={0}>
                    <TextField
                      name="comment"
                      label="Коментарий к доставке"
                      multiline
                      maxRows={4}
                      value={commentValue}
                      onChange={handleChangeComment}
                      variant="standard"
                      sx={{ width: '85%' }}
                    />
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item elevation={0}>
                    <Typography sx={{ mt: 1 }} component="span">
                      Оцените качество доставки
                    </Typography>
                    <Rating
                      name="rating"
                      value={ratingValue}
                      onChange={handleChangeRating}
                    />
                  </Item>
                </Grid>
                <ButtonLoading
                  isEdit={isEdit}
                  Archive={true}
                  cargo={stateValues}
                />
              </Grid>
            </Typography>
          </TextColor>
        </Box>
      </Modal>
    </div>
  );
};
