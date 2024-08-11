import React from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About_Us from './Pages/About_Us'
import Gallary from './Pages/Gallary'
import Contact from './Pages/Contact'
import Donate from './Pages/Donate'

const App = () => {
  return (

    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About_Us />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />
        {/* Fallback route for unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App