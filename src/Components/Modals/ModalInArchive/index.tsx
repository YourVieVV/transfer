import React, { useState, FC, SyntheticEvent, useMemo } from 'react';
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
  const [open, setOpen] = useState<boolean>(false);
  const [ratingValue, setRatingValue] = useState<number | null>(0);
  const [commentValue, setCommentValue] = useState<string>('');

  const { setFieldValue } = useFormikContext<formikTypes>();

  const cargoValues = useMemo(() => cargo, [cargo]);
  const isEdit = true;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChangeComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    cargoValues.comment = event.target.value;
    setCommentValue(event.target.value);
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
      cargoValues.rating = newValue;
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
            <Grid container columns={4} justifyContent="center">
              <Grid item xs={4}>
                <Item elevation={0}>
                  <TransferList cargo={cargoValues} />
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
                cargo={cargoValues}
              />
            </Grid>
          </TextColor>
        </Box>
      </Modal>
    </div>
  );
};
