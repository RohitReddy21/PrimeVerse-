import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Service Pages
import WebDesign from './pages/services/WebDesign';
import SEO from './pages/services/SEO';
import SocialMedia from './pages/services/SocialMedia';
import PaidAds from './pages/services/PaidAds';
import WebDevelopment from './pages/services/WebDevelopment';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/web-design" element={<WebDesign />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/paid-ads" element={<PaidAds />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;