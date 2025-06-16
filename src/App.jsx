import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

import CookieConsent from './components/CookieConsent.jsx'; // ✅ CookieConsent added

const App = () => {
  return (
    <>
      <Routes>
        {/* Home Page */}
        <Route path='/' element={<Home />} />

        {/* About Page */}
        <Route path='/about' element={<About />} />

        {/* Projects Page */}
        <Route path='/project' element={<Projects />} />

        {/* Contact Page */}
        <Route path='/contact' element={<Contact />} />

        {/* Privacy Policy Page */}
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>

      {/* Cookie Consent Banner — always visible at bottom */}
      <CookieConsent />
    </>
  );
};

export default App;
