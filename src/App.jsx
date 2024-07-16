import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import About from './Pages/About';
import Services from './Pages/Services';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/services" element={<Services />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
