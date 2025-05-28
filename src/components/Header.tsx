import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const closeServices = () => setIsServicesOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsServicesOpen(false);
    };

    if (isServicesOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isServicesOpen]);

  // Main navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Services dropdown items
  const serviceLinks = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Mobile Apps', path: '/services/mobile-apps' },
    { name: 'UI/UX Design', path: '/services/ui-ux-design' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'SEO Optimization', path: '/services/seo' },
    { name: 'Consulting', path: '/services/consulting' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="z-50" onClick={closeMenu}>
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-lg font-medium transition-colors hover:text-primary-500 ${
              location.pathname === '/'
                ? 'text-primary-500'
                : isScrolled
                ? 'text-dark'
                : 'text-gray-800'
            }`}
          >
            Home
          </Link>
          
          <Link
            to="/about"
            className={`text-lg font-medium transition-colors hover:text-primary-500 ${
              location.pathname === '/about'
                ? 'text-primary-500'
                : isScrolled
                ? 'text-dark'
                : 'text-gray-800'
            }`}
          >
            About
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={toggleServices}
              className={`flex items-center text-lg font-medium transition-colors hover:text-primary-500 ${
                location.pathname.startsWith('/services')
                  ? 'text-primary-500'
                  : isScrolled
                  ? 'text-dark'
                  : 'text-gray-800'
              }`}
            >
              Services
              <ChevronDown 
                size={16} 
                className={`ml-1 transition-transform ${
                  isServicesOpen ? 'rotate-180' : ''
                }`} 
              />
            </button>
            
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border py-2 z-50"
                >
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-50 hover:text-primary-500 ${
                        location.pathname === service.path
                          ? 'text-primary-500 bg-gray-50'
                          : 'text-gray-700'
                      }`}
                      onClick={closeServices}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t my-2"></div>
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm font-medium text-primary-500 hover:bg-gray-50"
                    onClick={closeServices}
                  >
                    View All Services
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/blog"
            className={`text-lg font-medium transition-colors hover:text-primary-500 ${
              location.pathname === '/blog'
                ? 'text-primary-500'
                : isScrolled
                ? 'text-dark'
                : 'text-gray-800'
            }`}
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className={`text-lg font-medium transition-colors hover:text-primary-500 ${
              location.pathname === '/contact'
                ? 'text-primary-500'
                : isScrolled
                ? 'text-dark'
                : 'text-gray-800'
            }`}
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="btn btn-primary"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden z-50 text-primary-500"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white flex flex-col justify-center items-center md:hidden"
            >
              <nav className="flex flex-col items-center space-y-6">
                <Link
                  to="/"
                  className={`text-xl font-medium transition-colors hover:text-primary-500 ${
                    location.pathname === '/'
                      ? 'text-primary-500'
                      : 'text-dark'
                  }`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
                
                <Link
                  to="/about"
                  className={`text-xl font-medium transition-colors hover:text-primary-500 ${
                    location.pathname === '/about'
                      ? 'text-primary-500'
                      : 'text-dark'
                  }`}
                  onClick={closeMenu}
                >
                  About
                </Link>
                
                {/* Mobile Services Section */}
                <div className="flex flex-col items-center space-y-4">
                  <span className="text-xl font-medium text-dark">Services</span>
                  <div className="flex flex-col items-center space-y-3">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className={`text-lg transition-colors hover:text-primary-500 ${
                          location.pathname === service.path
                            ? 'text-primary-500'
                            : 'text-gray-600'
                        }`}
                        onClick={closeMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/blog"
                  className={`text-xl font-medium transition-colors hover:text-primary-500 ${
                    location.pathname === '/blog'
                      ? 'text-primary-500'
                      : 'text-dark'
                  }`}
                  onClick={closeMenu}
                >
                  Blog
                </Link>

                <Link
                  to="/contact"
                  className={`text-xl font-medium transition-colors hover:text-primary-500 ${
                    location.pathname === '/contact'
                      ? 'text-primary-500'
                      : 'text-dark'
                  }`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>

                <Link
                  to="/contact"
                  className="btn btn-primary"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;