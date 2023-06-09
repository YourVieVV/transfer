import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../HeaderComponent';
import { TransferDirection } from './TransferCargo';
import { AddCargo } from './AddCargo';
import { Archive } from './Archive';
import { Box, Container } from '@mui/material';
import {initialValueFormik} from "../../../Types";
import {MainSchema} from "../ValidationShema";
import { Formik } from 'formik';

export const CargoTransfer = () => {
  return (
      <Formik
          initialValues={initialValueFormik}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={MainSchema}
      >
        {() => (
    <Container maxWidth="xl">
      <Box sx={{ height: '100vh' }}>
        <div>
          <Header />
          <Routes>
            <Route path="/transfer" element={<TransferDirection />} />
            <Route path="/addCargo" element={<AddCargo />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </div>
      </Box>
    </Container>
        )}
      </Formik>
  );
};
