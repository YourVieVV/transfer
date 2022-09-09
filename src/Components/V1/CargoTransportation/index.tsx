import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../HeaderComponent';
import { TransferDirection } from './TransferCargo';
import { AddCargo } from './AddCargo';
import { Archive } from './Archive';
import { Box, Container } from '@mui/material';

export const CargoTransfer = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ height: '100vh' }}>
        <div>
          <Header />
          <Routes>
            <Route path="/V1/transfer" element={<TransferDirection />} />
            <Route path="/V1/addCargo" element={<AddCargo />} />
            <Route path="/V1/archive" element={<Archive />} />
          </Routes>
        </div>
      </Box>
    </Container>
  );
};
