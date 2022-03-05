import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';
export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exac path="/about" element={<AboutScreen />} />
          <Route exac path="/login" element={<LoginScreen />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};
