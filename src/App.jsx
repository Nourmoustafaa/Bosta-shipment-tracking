/* eslint-disable no-unused-vars */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ShipmentTrack from './pages/Shipment-tracking';

const App = () => {
  return (
    <Router>

      <Routes>
      <Route path="/" element={<ShipmentTrack/>} />
        <Route path="/shipment" element={<ShipmentTrack />} />

      </Routes>
    </Router>
  );
};

export default App;
