import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { TransferCargo } from './Components/TransferCargo';
import { CargoDirection } from './Components/CargoDirection';
import { Header } from './Components/HeaderComponent';
import { Box, Container, CssBaseline } from '@mui/material';
import { initialValueFormik } from './redux/Types';
import { Formik } from 'formik';
import { Archive } from './Components/Archive';
import { MainSchema } from './Components/ValidationShema';

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
          <Container fixed>
            <Box sx={{ height: '100vh' }}>
              <div>
                <Header />
                <Routes>
                  <Route path="/" element={<CargoDirection />} />
                  <Route path="/transfer" element={<TransferCargo />} />
                  <Route path="/archive" element={<Archive />} />
                </Routes>
              </div>
            </Box>
          </Container>
        </div>
      )}
    </Formik>
  );
}

export default App;
