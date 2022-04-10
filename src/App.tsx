import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TransferCargo from './Components/TransferCargo';
import CargoDirection from './Components/CargoDirection';
import Header from './Components/HeaderComponent';
import { Box, Container, CssBaseline } from '@mui/material';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container fixed>
        <Box sx={{ height: '100vh' }}>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<CargoDirection />} />
              <Route path="/transfer" element={<TransferCargo />} />
            </Routes>
          </div>
        </Box>
      </Container>
    </div>
  );
}

export default App;
