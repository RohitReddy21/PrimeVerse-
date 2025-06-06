import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../components/assets/logo.jpeg';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
          <img src={logo} alt="" className='w-40 h-16 rounded-lg'/>
            <p className="text-gray-300 max-w-xs">
              Transforming businesses with innovative digital marketing solutions and web design services.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61575249302444" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a> */}
              <a href="https://www.instagram.com/primeverse.in/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/prime-verse-technologies-private-limited/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-primary-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-500 transition-colors">Contact</Link>
              </li>
              {/* <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-primary-500 transition-colors">Privacy Policy</Link>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services/web-development" className="text-gray-300 hover:text-primary-500 transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-gray-300 hover:text-primary-500 transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/services/it-recruitment" className="text-gray-300 hover:text-primary-500 transition-colors">IT Recruitment</Link>
              </li>
              <li>
                <Link to="/services/crm-development" className="text-gray-300 hover:text-primary-500 transition-colors">CRM Development</Link>
              </li>
              <li>
                <Link to="/services/app-development" className="text-gray-300 hover:text-primary-500 transition-colors">App Development</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={40} className="mr-3 text-primary-500 mt-1" />
                <span className="text-gray-300"> PLOT NO 9, SHILPI VALLEY, Madhapur,
                Hitec City, Hyderabad, Telangana 500081</span>
              </li>
              {/* <li className="flex items-center">
                <Phone size={20} className="mr-3 text-primary-500" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-primary-500 transition-colors">+1 (234) 567-890</a>
              </li> */}
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-primary-500" />
                <a href="mailto:info@primeverse.in" className="text-gray-300 hover:text-primary-500 transition-colors">info@primeverse.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PrimeVerse. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/terms" className="text-gray-400 text-sm hover:text-primary-500 transition-colors">Terms of Service</a>
              <a href="/privacy" className="text-gray-400 text-sm hover:text-primary-500 transition-colors">Privacy Policy</a>
              <a href="/cookies" className="text-gray-400 text-sm hover:text-primary-500 transition-colors">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;