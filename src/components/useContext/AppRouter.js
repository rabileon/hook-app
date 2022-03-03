import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exac path="/about" element={<AboutScreen />} />
          <Route exac path="/login" element={<LoginScreen />} />
        </Routes>
      </div>
    </Router>
  );
};
