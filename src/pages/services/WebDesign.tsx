import { motion } from 'framer-motion';
import { Monitor, Smartphone, Code, Zap, Palette, Layers, Users, Lock } from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import { services } from '../../data/services';
import ContactForm from '../../components/ContactForm';

const WebDesign = () => {
  const service = services.find(s => s.id === 'web-design');

  if (!service) return <div>Service not found</div>;

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-white/90">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Create a Stunning Online Presence</h2>
              {service.fullDescription.map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Web design and development" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Web Design Services</h2>
            <p className="text-gray-600">
              We offer comprehensive web design and development services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-6">
                <Palette size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Web Design</h3>
              <p className="text-gray-600">
                Beautifully crafted websites designed specifically for your brand and business goals.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-6">
                <Code size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-gray-600">
                Robust, scalable websites built with clean code and the latest technologies.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-6">
                <Smartphone size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p className="text-gray-600">
                Mobile-friendly websites that look and function perfectly on all devices.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Optimization</h3>
              <p className="text-gray-600">
                Fast-loading, optimized websites that provide an excellent user experience.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-6">
                <Monitor size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">E-commerce Solutions</h3>
              <p className="text-gray-600">
                Powerful online stores with secure payment gateways and inventory management.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-6">
                <Layers size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">CMS Integration</h3>
              <p className="text-gray-600">
                User-friendly content management systems that make updates easy.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-gray-600">
                Intuitive user interfaces and engaging user experiences that drive conversions.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-6">
                <Lock size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Website Security</h3>
              <p className="text-gray-600">
                Enhanced security measures to protect your website and customer data.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Web Design Process</h2>
            <p className="text-gray-600">
              We follow a structured approach to ensure each website we create meets your objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Discovery & Planning</h3>
              <p className="text-gray-600">
                We begin by understanding your business, goals, target audience, and competition. This allows us to create a strategic plan for your website.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Design</h3>
              <p className="text-gray-600">
                We create wireframes and design mockups for your approval, ensuring the visual aesthetics align with your brand identity.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Development</h3>
              <p className="text-gray-600">
                Our developers build your website using clean, semantic code and best practices for performance and SEO.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Testing & Launch</h3>
              <p className="text-gray-600">
                We rigorously test your website across devices and browsers before launching it to ensure everything works perfectly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Recent Web Projects</h2>
            <p className="text-gray-600">
              Take a look at some of the websites we've designed and developed for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="E-commerce website" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Fashion Store</h3>
                <p className="text-gray-600 mb-4">
                  A modern e-commerce platform with seamless shopping experience and secure payment integration.
                </p>
                <a href="#" className="text-primary-500 font-medium hover:text-primary-700 transition-colors">View Project</a>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Corporate website" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Corporate Business Site</h3>
                <p className="text-gray-600 mb-4">
                  A professional corporate website with custom CMS for easy content management.
                </p>
                <a href="#" className="text-primary-500 font-medium hover:text-primary-700 transition-colors">View Project</a>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Restaurant website" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Restaurant & Booking System</h3>
                <p className="text-gray-600 mb-4">
                  A restaurant website with online menu and integrated reservation system.
                </p>
                <a href="#" className="text-primary-500 font-medium hover:text-primary-700 transition-colors">View Project</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our web design and development services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {service.faq.map((item, index) => (
              <motion.div
                key={index}
                className="mb-6 bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 bg-primary-500 text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="mb-6">
                  Contact us today to discuss your web design project. We'll help you create a website that not only looks great but also drives results for your business.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Custom website design and development</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Responsive and mobile-friendly</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>SEO-optimized structure</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>User-friendly content management</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default WebDesign;