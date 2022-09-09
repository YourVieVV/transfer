import React from 'react';
import './App.css';
import { Box, Container, CssBaseline } from '@mui/material';
import { initialValueFormik } from './redux/Types';
import { Formik } from 'formik';
import { MainSchema } from './Components/V1/ValidationShema';
import { CargoTransfer } from './Components/V1/CargoTransportation';
import { BackgroundWorldMap } from './Components/StyledComponents/Wrapper';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './Components/V2/MainPage';

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
        <div className="App">
          <CssBaseline />
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>

          <Routes>
            <Route path="/V1" element={<CargoTransfer />} />
          </Routes>
        </div>
      )}
    </Formik>
  );
}

export default App;
