import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Courses from './components/Courses';
import { AuthProvider } from './AuthContext';

const Home = () => (
  <div>
    <h2>Welcome to the Course App</h2>
    <p>Please use the menu to navigate through the application.</p>
  </div>
);

const App = () => (
  <AuthProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
