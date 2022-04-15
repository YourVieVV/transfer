import React, { FC, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert, Box, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Item } from '../Grid/Item';
import { useDispatch, useSelector } from 'react-redux';
import { addInStore, editInStore } from '../../redux/Action';
import { useFormikContext } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { formikTypes } from '../../redux/Types';

interface buttonLoadingProps {
  isEdit: boolean;
}

export const ButtonLoading: FC<buttonLoadingProps> = ({ isEdit }) => {
  const [loading, setLoading] = useState(false);
  const [isload, setIsLoad] = useState(false);

  const { values } = useFormikContext<formikTypes>();

  const UniqueId = uuidv4();
  const dispatch = useDispatch();

  const redux = useSelector((state) => state.reducer);
  const reduxValue = [...redux];
  const item = { ...values };

  function handleClick() {
    setLoading(true);

    const timer = setTimeout(() => {
      if (!isEdit) {
        values.id = UniqueId;
        dispatch(
          addInStore({
            ...values,
          })
        );
      } else {
        const data = reduxValue.map((el) => {
          if (el.id === item.id) {
            return item;
          } else {
            return el;
          }
        });
        dispatch(editInStore(data));
      }
      setLoading(false);
      setIsLoad(true);
    }, 3000);
    return () => clearTimeout(timer);
  }

  return (
    <>
      <Grid item xs={1.5}>
        <Item elevation={0}>
          <Box sx={{ '& > button': { m: 1 }, pl: 1, pt: 1 }}>
            <LoadingButton
              onClick={handleClick}
              endIcon={<SendIcon />}
              loading={loading}
              loadingPosition="end"
              variant="contained"
            >
              Принять
            </LoadingButton>
          </Box>
        </Item>
      </Grid>
      <Grid item xs={2.5}>
        <Item elevation={0} sx={{ pr: 7, pt: 2 }}>
          {isload && (
            <Alert variant="outlined" severity="success">
              Отправка прошла успешно!
            </Alert>
          )}
        </Item>
      </Grid>
    </>
  );
};
