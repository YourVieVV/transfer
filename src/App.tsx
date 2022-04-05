import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/HomeComponent';
import TransferCargo from './Components/TransferCargo';
import CargoDirection from './Components/CargoDirection';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transfer" element={<TransferCargo />} />
          <Route path="/direction" element={<CargoDirection />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
