import React, { FC, useState, useEffect } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Alert, Backdrop, Box, CircularProgress, Grid } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Item } from '../Grid/Item';
import { addInStore, editInStore, inArchive } from '../../redux/Action';
import { useFormikContext } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { formikTypes, data } from '../../redux/Types';
import { loadStyle } from '../../StylesComponents/Modals';
import { useAppDispatch, useAppSelector } from '../../hooks';

interface buttonLoadingProps {
  isEdit: boolean;
  Archive?: boolean;
  cargo?: formikTypes;
}

export const ButtonLoading: FC<buttonLoadingProps> = ({
  isEdit,
  Archive,
  cargo,
}) => {
  const UniqueId = uuidv4();
  const dispatch = useAppDispatch();
  const redux = useAppSelector((state) => state.reducer);

  const [loading, setLoading] = useState<boolean>(false);
  const [isload, setIsLoad] = useState<boolean>(false);
  const [isGo, setIsGo] = useState<boolean>(true);

  const { values, errors } = useFormikContext<formikTypes>();

  const reduxValue = [...redux];
  const item = { ...values };
  const cargoValues = { ...cargo };

  useEffect(() => {
    if (!Archive) {
      if (Object.keys(errors).length === 0) {
        setIsGo(false);
      } else {
        setIsGo(true);
      }
    } else {
      setIsGo(false);
    }
  }, [cargoValues]);

  const handleClick = () => {
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
        if (Archive) {
          cargoValues.isArchive = true;
          cargoValues.onMyWay = false;
          cargoValues.isDone = item.isDone;
          const data: data = reduxValue.map((el) => {
            if (el.id === cargoValues.id) {
              return cargoValues;
            } else {
              return el;
            }
          });
          dispatch(inArchive(data));
        } else {
          const data: data = reduxValue.map((el) => {
            if (el.id === item.id) {
              return item;
            } else {
              return el;
            }
          });
          dispatch(editInStore(data));
        }
      }
      setLoading(false);
      setIsLoad(true);
    }, 2000);
    return () => clearTimeout(timer);
  };

  return (
    <>
      <Backdrop sx={loadStyle} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Grid item xs={1.5}>
        <Item elevation={0}>
          <Box sx={{ '& > button': { m: 1 }, pl: 1, pt: 1 }}>
            <LoadingButton
              disabled={isGo}
              type="submit"
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
