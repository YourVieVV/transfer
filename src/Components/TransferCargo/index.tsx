import React from 'react';
import { UpWrapper, Wrapper } from '../../StylesComponents/Wrapper';
import { Box, Grid, Typography } from '@mui/material';
import { Item } from '../Grid/Item';
import { TextColor } from '../../StylesComponents/TextColor';
import ModalAddCargo from '../Modals/ModalAddCargo';
import { CargoList } from '../List/CargoList';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import { initialValueFormik } from '../../redux/Types';

export default function TransferCargo() {
  const redux = useSelector((state) => state);

  // @ts-ignore
  const reduxValue = redux.reducer;
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
      {() => (
        <Wrapper>
          <UpWrapper>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} columns={10}>
                <Grid item xs={8}>
                  <Item elevation={0}>
                    <TextColor>
                      <Typography variant="h4">Неотправленные грузы</Typography>
                    </TextColor>
                  </Item>
                </Grid>
                <Grid item xs={2}>
                  <Item elevation={0}>
                    <ModalAddCargo />
                  </Item>
                </Grid>
                <Grid item xs={10}>
                  {reduxValue.map((cargo: any, index: number) => {
                    if (cargo.nameCargo !== '') {
                      return <CargoList key={index.toString()} cargo={cargo} />;
                    } else {
                      return null;
                    }
                  })}
                </Grid>
              </Grid>
            </Box>
          </UpWrapper>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={10}>
              <Grid item xs={8}>
                <Item elevation={0}>
                  <TextColor>
                    <Typography variant="h4">Непринятые грузы</Typography>
                  </TextColor>
                </Item>
              </Grid>
              <Grid item xs={5}>
                <Item>xs=8</Item>
              </Grid>
            </Grid>
          </Box>
        </Wrapper>
      )}
    </Formik>
  );
}
