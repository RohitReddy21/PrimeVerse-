import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, PenTool, BarChart, Users, MessageCircle } from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import { services } from '../../data/services';
import ContactForm from '../../components/ContactForm';

const SocialMedia = () => {
  const service = services.find(s => s.id === 'social-media');

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
              <h2 className="text-3xl font-bold mb-6">Connect With Your Audience</h2>
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
                src="https://images.pexels.com/photos/2818118/pexels-photo-2818118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Social media marketing" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Platforms We Specialize In</h2>
            <p className="text-gray-600">
              We create tailored strategies across all major social media platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mx-auto mb-6">
                <Facebook size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Facebook</h3>
              <p className="text-gray-600">
                Build community and drive engagement with targeted Facebook marketing.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 mx-auto mb-6">
                <Instagram size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instagram</h3>
              <p className="text-gray-600">
                Showcase your brand visually and connect with a highly engaged audience.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sky-100 text-sky-500 mx-auto mb-6">
                <Twitter size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Twitter</h3>
              <p className="text-gray-600">
                Join conversations and share updates in real-time with your audience.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 mx-auto mb-6">
                <Linkedin size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">LinkedIn</h3>
              <p className="text-gray-600">
                Establish authority and connect with professionals in your industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Social Media Services</h2>
            <p className="text-gray-600">
              Comprehensive social media marketing solutions to boost your online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-6">
                  {index === 0 ? <PenTool size={28} /> : 
                   index === 1 ? <Users size={28} /> : 
                   index === 2 ? <MessageCircle size={28} /> : 
                   <BarChart size={28} />}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Invest in Social Media Marketing?</h2>
              <p className="text-gray-600 mb-6">
                Social media marketing offers numerous benefits for businesses of all sizes. Here's how our services can help your business grow:
              </p>
              
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-primary-500 mr-3 flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Social media engagement" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-md mt-12">
                <img 
                  src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Social media marketing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Social media strategy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-md mt-12">
                <img 
                  src="https://images.pexels.com/photos/5053855/pexels-photo-5053855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Social media content" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Social Media Process</h2>
            <p className="text-gray-600">
              We follow a strategic approach to deliver results-driven social media marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-3 mt-2">Research & Analysis</h3>
              <p className="text-gray-600">
                We analyze your audience, competitors, and current social media presence to develop effective strategies.
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
              <h3 className="text-xl font-semibold mb-3 mt-2">Strategy Development</h3>
              <p className="text-gray-600">
                We create a customized social media strategy aligned with your business goals and target audience.
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
              <h3 className="text-xl font-semibold mb-3 mt-2">Content Creation & Posting</h3>
              <p className="text-gray-600">
                We develop and publish engaging content that resonates with your audience and reflects your brand.
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
              <h3 className="text-xl font-semibold mb-3 mt-2">Monitoring & Optimization</h3>
              <p className="text-gray-600">
                We continuously track performance metrics and refine our approach to maximize results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about our social media marketing services.
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 bg-primary-500 text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Social Media Presence?</h2>
                <p className="mb-6">
                  Contact us today to discuss how our social media marketing services can help your business connect with customers and drive growth.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Customized social media strategies</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Engaging content creation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Active community management</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Performance tracking and reporting</span>
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

export default SocialMedia;