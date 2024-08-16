import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About_Us from './Pages/About_Us';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact';
import Donate from './Pages/Donate';
import QueriesList from './Pages/QueriesList';
import SignIn from './Pages/SignIn';
import PrivateRoute from './Pages/PrivateRoute';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

  // Function to handle sign-in and sign-out
  const handleSignIn = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  useEffect(() => {
    // Sync state with local storage on page refresh
    setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
  }, []);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} onSignOut={handleSignOut} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About_Us />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />
        <Route path="signin" element={<SignIn onSignIn={handleSignIn} />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <QueriesList />
            </PrivateRoute>
          }
        />
        {/* Fallback route for unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
