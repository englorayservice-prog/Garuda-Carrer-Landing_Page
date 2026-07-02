import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features';
import Explore from './components/Explore/Explore';
import Home from './components/Home/Home';
import About from './components/About/About';
import Connect from './components/connect/Connect';
import ContactNav from './components/contactnav/ContactNav';
import ConnectPage from './components/ConnectPage/ConnectPage';
import AboutPage from './components/AboutPage/AboutPage';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import TermsConditions from './components/TermsConditions/TermsConditions';

function App() {
  return (
    <>
      <div className="bg-gradients">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
      </div>

      <div className="container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/explore" element={<Explore />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/connect" element={<Connect />} />
          {/* <Route path="/connect" element={<ConnectPage />} /> */}
          <Route path="/contactnav" element={<ContactNav />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
