import React from 'react';

// MUI Imports
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Project Imports
import theme from './assets/theme';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import TutorProfile from './pages/TutorProfile';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/tutor' element={<TutorProfile />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
