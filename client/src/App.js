import React from 'react';

// MUI Imports
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Project Imports

import theme from './assets/theme';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Navbar from './components/Navbar';
import TutorProfile from './pages/TutorProfile';
import Search from './pages/Search';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/auth' element={<Auth />}></Route>
          <Route path='/tutor' element={<TutorProfile />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/dashboard' element={<TeacherDashboard />}></Route>
          <Route path='/your-dashboard' element={<StudentDashboard />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
export default App;
