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
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import { Navigate } from 'react-router-dom';

// Service Pages
import DigitalMarketing from './pages/services/DigitalMarketing';
import WebDevelopment from './pages/services/WebDevelopment';
import ItRecruitment from './pages/services/ItRecruitment'; 
import AppDevelopment from './pages/services/AppDevelopment';
import CRMMangement from './pages/services/CRMMangement';

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="*" element={<Navigate to="/blog\" replace />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/it-recruitment" element={<ItRecruitment />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/crm-development" element={<CRMMangement />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;