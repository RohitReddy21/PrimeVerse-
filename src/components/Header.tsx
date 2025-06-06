import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, User, Briefcase, BookOpen, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../components/assets/logo.jpeg';

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
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.services-dropdown')) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isServicesOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Main navigation links with icons for mobile (removed Blog)
  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  // Services dropdown items
  const serviceLinks = [
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'IT Recruitment', path: '/services/it-recruitment' },
    { name: 'CRM Development', path: '/services/crm-development' },
    { name: 'App Development', path: '/services/app-development' },
  ];

  // Helper function to get nav link classes (enhanced for transparency)
  const getNavLinkClasses = (path, isActive) => {
    const baseClasses = "text-lg font-medium transition-all duration-300 relative";
    const activeClasses = "text-[#4CBEE5] drop-shadow-sm";
    const inactiveClasses = "text-white/90 hover:text-[#4CBEE5] hover:drop-shadow-sm";
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  // Helper function for services button classes (enhanced for transparency)
  const getServicesButtonClasses = () => {
    const isActive = location.pathname.startsWith('/services');
    const baseClasses = "flex items-center text-lg font-medium transition-all duration-300";
    const activeClasses = "text-[#4CBEE5] drop-shadow-sm";
    const inactiveClasses = "text-white/90 hover:text-[#4CBEE5] hover:drop-shadow-sm";
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-black/20 backdrop-blur-sm shadow-lg  py-2' 
            : 'bg-transparent backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="z-50 flex-shrink-0" onClick={closeMenu}>
            <img 
              src={logo} 
              alt="Logo" 
              className={`rounded-lg hover:scale-105 transition-all duration-300 ${
                isScrolled ? 'w-36 h-14' : 'w-40 h-16'
              } drop-shadow-lg`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={getNavLinkClasses('/', location.pathname === '/')}
            >
              Home
              {location.pathname === '/' && (
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#4CBEE5] rounded-full shadow-sm"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
            
            <Link
              to="/about"
              className={getNavLinkClasses('/about', location.pathname === '/about')}
            >
              About
              {location.pathname === '/about' && (
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#4CBEE5] rounded-full shadow-sm"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative services-dropdown">
              <button
                onClick={toggleServices}
                className={getServicesButtonClasses()}
              >
                Services
                <ChevronDown 
                  size={16} 
                  className={`ml-1 transition-transform duration-300 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`} 
                />
                {location.pathname.startsWith('/services') && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#4CBEE5] rounded-full shadow-sm"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 py-2 z-50 overflow-hidden"
                  >
                    {serviceLinks.map((service, index) => (
                      <Link
                        key={service.name}
                        to={service.path}
                        className={`block px-4 py-3 text-sm transition-all duration-200 hover:bg-teal-50/80 hover:text-teal-600 border-l-4 border-transparent hover:border-teal-400 ${
                          location.pathname === service.path
                            ? 'text-teal-600 bg-teal-50/80 border-teal-400'
                            : 'text-gray-700'
                        }`}
                        onClick={closeServices}
                      >
                        <div className="flex items-center justify-between">
                          {service.name}
                          <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    ))}
                    <div className="border-t my-2 mx-2 border-gray-200/50"></div>
                    <Link
                      to="/services"
                      className="block px-4 py-3 text-sm font-medium text-[#4CBEE5] hover:bg-[#4CBEE5]/80 transition-all duration-200"
                      onClick={closeServices}
                    >
                      <div className="flex items-center justify-between">
                        View All Services
                        <ArrowRight size={14} />
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className={getNavLinkClasses('/contact', location.pathname === '/contact')}
            >
              Contact
              {location.pathname === '/contact' && (
                <motion.span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#4CBEE5] rounded-full shadow-sm"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </nav>

          {/* Mobile Navigation Toggle - Enhanced for transparency */}
          <button
            className={`md:hidden z-[60] p-2 rounded-lg transition-all duration-300 ${
              isMenuOpen 
                ? 'text-gray-600 bg-white/90 backdrop-blur-sm shadow-lg' 
                : 'text-white/90 hover:bg-white/10 hover:backdrop-blur-sm'
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Menu - Enhanced transparency */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="md:hidden">
            {/* Backdrop - More subtle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={closeMenu}
            />
            
            {/* Mobile Menu Drawer - Glass effect */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 30, 
                stiffness: 300,
                duration: 0.3 
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white/90 backdrop-blur-xl shadow-2xl border-l border-white/20 z-50 overflow-y-auto"
            >
              {/* Mobile Menu Header - Glass effect */}
              <div className="p-6 border-b border-gray-200/50 bg-gray-50/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <img src={logo} alt="Logo" className='w-32 h-12 rounded-lg drop-shadow-md'/>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-lg hover:bg-gray-200/50 transition-colors backdrop-blur-sm"
                  >
                    <X size={20} className="text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="p-6">
                <div className="space-y-2">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isActive = location.pathname === link.path;
                    
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={link.path}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 backdrop-blur-sm ${
                            isActive
                              ? 'bg-teal-50/80 text-[#4CBEE5] border-l-4 border-[#4CBEE5] shadow-sm'
                              : 'text-gray-700 hover:bg-gray-50/50 hover:text-[#4CBEE5]'
                          }`}
                          onClick={closeMenu}
                        >
                          <Icon size={20} />
                          <span className="font-medium">{link.name}</span>
                          {isActive && <ArrowRight size={16} className="ml-auto" />}
                        </Link>
                      </motion.div>
                    );
                  })}
                  
                  {/* Mobile Services Section - Enhanced glass effect */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-4"
                  >
                    <div className="px-4 py-2">
                      <div className="flex items-center space-x-2 mb-3">
                        <Briefcase size={16} className="text-gray-500" />
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Services</h3>
                      </div>
                      <div className="space-y-1">
                        {serviceLinks.map((service, index) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className={`block px-3 py-2 rounded-lg text-sm transition-all duration-200 backdrop-blur-sm ${
                              location.pathname === service.path
                                ? 'text-[#4CBEE5] bg-[#4CBEE5]/80 shadow-sm'
                                : 'text-gray-600 hover:text-[#4CBEE5] hover:bg-[#4CBEE5]/50'
                            }`}
                            onClick={closeMenu}
                          >
                            {service.name}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-[#4CBEE5] hover:bg-[#4CBEE5]/50 transition-colors mt-2 backdrop-blur-sm"
                          onClick={closeMenu}
                        >
                          <span>View All Services</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 w-3/4 mx-auto pt-6 border-t border-gray-200/50"
                >
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;