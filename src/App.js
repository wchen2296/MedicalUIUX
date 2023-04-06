import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function About() {
  return <h1>About Us</h1>;
}

function Appointments() {
  return <h1>Appointment Requests</h1>;
}

function Reviews() {
  return <h1>Reviews</h1>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" component={About} />
        <Route path="/appointments" component={Appointments} />
        <Route path="/reviews" component={Reviews} />
      </Routes>
    </Router>
  );
}

export default App;
