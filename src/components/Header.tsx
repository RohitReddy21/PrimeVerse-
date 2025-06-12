import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, User, Briefcase, BookOpen, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../components/assets/Untitled design (6).png';

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

  // Main navigation links with icons for mobile
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

  // Helper function to get nav link classes
  const getNavLinkClasses = (path, isActive) => {
    const baseClasses = "text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 relative";
    const activeClasses = "text-[#4CBEE5] drop-shadow-sm";
    const inactiveClasses = "text-white/90 hover:text-[#4CBEE5] hover:drop-shadow-sm";
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  // Helper function for services button classes
  const getServicesButtonClasses = () => {
    const isActive = location.pathname.startsWith('/services');
    const baseClasses = "flex items-center text-sm sm:text-base lg:text-lg font-medium transition-all duration-300";
    const activeClasses = "text-[#4CBEE5] drop-shadow-sm";
    const inactiveClasses = "text-white/90 hover:text-[#4CBEE5] hover:drop-shadow-sm";
    
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? 'bg-black/30 backdrop-blur-md shadow-xl py-1 sm:py-2' 
            : 'bg-transparent backdrop-blur-sm py-2 sm:py-4'
        }`}
      >
        <div className="w-full max-w-none px-2 sm:px-4 lg:px-6 xl:px-8 2xl:px-12 flex justify-between items-center">
          <Link to="/" className="z-50 flex-shrink-0" onClick={closeMenu}>
            <div className={`transition-all duration-300 ${
              isScrolled 
                ? 'w-24 h-10 sm:w-32 sm:h-12 lg:w-36 lg:h-14 xl:w-40 xl:h-16' 
                : 'w-28 h-12 sm:w-36 sm:h-14 lg:w-40 lg:h-16 xl:w-44 xl:h-18'
            }`}>
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-contain rounded-lg hover:scale-105 transition-all duration-300 drop-shadow-lg"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Aligned to the right corner */}
          <nav className="hidden lg:flex items-center justify-end flex-1 space-x-3 lg:space-x-4 xl:space-x-6 2xl:space-x-8 ml-8">
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
            
            {/* Services Dropdown - Seamlessly integrated with header */}
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
                    initial={{ 
                      opacity: 0, 
                      y: -10, 
                      scale: 0.95,
                      transformOrigin: "top center"
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        duration: 0.4
                      }
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -10, 
                      scale: 0.95,
                      transition: {
                        duration: 0.2,
                        ease: "easeInOut"
                      }
                    }}
                    className={`absolute top-full -left-8 xl:-left-12 mt-6 w-56 xl:w-64 2xl:w-72 rounded-b-2xl shadow-2xl py-3 z-50 overflow-hidden ${
                      isScrolled 
                        ? 'bg-transparent backdrop-blur-md' 
                        : 'bg-transparent backdrop-blur-sm'
                    }`}
                    style={{
                      backdropFilter: isScrolled ? 'blur(8px)' : 'blur(8px)',
                      background: isScrolled ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.2)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
                    }}
                  >
                    {serviceLinks.map((service, index) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: index * 0.05 }
                        }}
                        exit={{ opacity: 0, x: -10 }}
                      >
                        <Link
                          to={service.path}
                          className={`group block px-4 py-3 text-sm transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm rounded-lg mx-2 border-l-2 border-transparent hover:border-[#4CBEE5] ${
                            location.pathname === service.path
                              ? 'text-[#4CBEE5] bg-white/15 border-[#4CBEE5] backdrop-blur-sm'
                              : 'text-white/95 hover:text-white'
                          }`}
                          onClick={closeServices}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{service.name}</span>
                            <ArrowRight 
                              size={14} 
                              className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" 
                            />
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                    
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scaleX: 1,
                        transition: { delay: 0.3 }
                      }}
                      className="border-t my-3 mx-4 border-white/30"
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.35 }
                      }}
                    >
                      <Link
                        to="/services"
                        className="group block px-4 py-3 mx-2 text-sm font-medium text-[#4CBEE5] hover:bg-white/15 hover:text-white transition-all duration-300 rounded-lg backdrop-blur-sm"
                        onClick={closeServices}
                      >
                        <div className="flex items-center justify-between">
                          <span>View All Services</span>
                          <ArrowRight 
                            size={14} 
                            className="transition-all duration-300 transform group-hover:translate-x-1" 
                          />
                        </div>
                      </Link>
                    </motion.div>
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

          {/* Mobile Navigation Toggle - Positioned at far right */}
          <div className="lg:hidden flex items-center ml-auto">
            <button
              className={`z-[60] p-2 rounded-lg transition-all duration-300 ${
                isMenuOpen 
                  ? 'text-gray-600 bg-white/90 backdrop-blur-sm shadow-lg' 
                  : 'text-white/90 hover:bg-white/10 hover:backdrop-blur-sm'
              }`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu - Enhanced for all mobile/tablet sizes */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={closeMenu}
            />
            
            {/* Mobile Menu Drawer - Responsive sizing */}
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
              className="fixed top-0 right-0 h-full w-72 sm:w-80 md:w-96 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl border-l border-white/20 z-50 overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="p-4 sm:p-6 border-b border-gray-200/50 bg-gray-50/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <img 
                    src={logo} 
                    alt="Logo" 
                    className='w-24 h-9 sm:w-32 sm:h-12 rounded-lg drop-shadow-md object-contain'
                  />
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-lg hover:bg-gray-200/50 transition-colors backdrop-blur-sm"
                  >
                    <X size={18} className="text-gray-600 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <div className="p-4 sm:p-6">
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
                          className={`flex items-center space-x-3 px-3 sm:px-4 py-3 rounded-xl transition-all duration-200 backdrop-blur-sm ${
                            isActive
                              ? 'bg-teal-50/80 text-[#4CBEE5] border-l-4 border-[#4CBEE5] shadow-sm'
                              : 'text-gray-700 hover:bg-gray-50/50 hover:text-[#4CBEE5]'
                          }`}
                          onClick={closeMenu}
                        >
                          <Icon size={18} className="sm:w-5 sm:h-5" />
                          <span className="font-medium text-sm sm:text-base">{link.name}</span>
                          {isActive && <ArrowRight size={14} className="ml-auto sm:w-4 sm:h-4" />}
                        </Link>
                      </motion.div>
                    );
                  })}
                  
                  {/* Mobile Services Section */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-4"
                  >
                    <div className="px-3 sm:px-4 py-2">
                      <div className="flex items-center space-x-2 mb-3">
                        <Briefcase size={14} className="text-gray-500 sm:w-4 sm:h-4" />
                        <h3 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">Services</h3>
                      </div>
                      <div className="space-y-1">
                        {serviceLinks.map((service, index) => (
                          <motion.div
                            key={service.name}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ 
                              opacity: 1, 
                              x: 0,
                              transition: { delay: 0.5 + (index * 0.05) }
                            }}
                          >
                            <Link
                              to={service.path}
                              className={`block px-3 py-2 rounded-lg text-xs sm:text-sm transition-all duration-200 backdrop-blur-sm ${
                                location.pathname === service.path
                                  ? 'text-[#4CBEE5] bg-[#4CBEE5]/10 shadow-sm border-l-2 border-[#4CBEE5]'
                                  : 'text-gray-600 hover:text-[#4CBEE5] hover:bg-[#4CBEE5]/5 hover:border-l-2 hover:border-[#4CBEE5]/50'
                              }`}
                              onClick={closeMenu}
                            >
                              {service.name}
                            </Link>
                          </motion.div>
                        ))}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { delay: 0.8 }
                          }}
                        >
                          <Link
                            to="/services"
                            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-[#4CBEE5] hover:bg-[#4CBEE5]/10 transition-colors mt-2 backdrop-blur-sm"
                            onClick={closeMenu}
                          >
                            <span>View All Services</span>
                            <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Mobile Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200/50"
                >
                  <div className="text-center">
                    <p className="text-xs sm:text-sm text-gray-500">
                      © 2024 Your Company. All rights reserved.
                    </p>
                  </div>
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