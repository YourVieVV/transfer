import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Components/HeaderComponent';
import { Box, Container, CssBaseline } from '@mui/material';
import { initialValueFormik } from './redux/Types';
import { Formik } from 'formik';
import { Archive } from './Components/Archive';
import { MainSchema } from './Components/ValidationShema';
import { TransferDirection } from './Components/TransferCargo';
import { AddCargo } from './Components/AddCargo';

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
        </div>
      )}
    </Formik>
  );
}

export default App;
