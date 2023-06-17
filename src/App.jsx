import React from 'react';
import Home from './pages/Home';
import Success from './pages/Success';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
