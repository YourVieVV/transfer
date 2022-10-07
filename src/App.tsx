import React from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import { initialValueFormik } from './Types';
import { Formik } from 'formik';
import { MainSchema } from './Components/V1/ValidationShema';
import { CargoTransfer } from './Components/V1/CargoTransportation';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './Components/V2/MainPage';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Components/theme';
import {LoginPage} from "./Components/loginPage";

function App() {
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
              <Route path="/login" element={<LoginPage />} />
            </Routes>

          </div>
        </ThemeProvider>
      )}
    </Formik>
  );
}

export default App;
