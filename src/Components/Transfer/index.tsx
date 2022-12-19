import React from 'react';
import { CssBaseline } from '@mui/material';

import { Formik } from 'formik';

import { Route, Routes } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import { initialValueFormik } from '../../Types';
import { MainSchema } from '../V1/ValidationShema';
import { theme } from '../theme';
import { MainPage } from '../V2/MainPage';
import { CargoTransfer } from '../V1/CargoTransportation';
import { AuthPage } from '../AuthPage';

export const Transfer = () => {
  return (
    <Formik
      initialValues={initialValueFormik}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={MainSchema}
    >
      {() => (
        <ThemeProvider theme={theme}>
          <div className="App">
            <CssBaseline />
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>

            <Routes>
              <Route path="/old/*" element={<CargoTransfer />} />
            </Routes>

            <Routes>
              <Route path="/auth/*" element={<AuthPage />} />
            </Routes>
          </div>
        </ThemeProvider>
      )}
    </Formik>
  );
};
