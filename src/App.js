import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AboutUs from './AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';



function Appointments() {
  return <h1>Appointment Requests</h1>;
}

function Reviews() {
  return <h1>Reviews</h1>;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#94AF9F',
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    fontFamily: ' "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
  
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HeroSection/>}/>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/appointments" element={Appointments} />
        <Route path="/reviews" element={Reviews} />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
