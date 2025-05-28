import { motion } from 'framer-motion';
import { BarChart3, DollarSign, Target, Zap, Globe, LineChart, PieChart, TrendingUp } from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import { services } from '../../data/services';
import ContactForm from '../../components/ContactForm';

const PaidAds = () => {
  const service = services.find(s => s.id === 'paid-ads');

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
              <h2 className="text-3xl font-bold mb-6">Drive Targeted Traffic and Conversions</h2>
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
                src="https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Paid advertising strategies" 
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
            <h2 className="text-3xl font-bold mb-4">Advertising Platforms We Manage</h2>
            <p className="text-gray-600">
              We create and manage campaigns across multiple platforms to reach your target audience.
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
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Google Ads</h3>
              <p className="text-gray-600">
                Search, display, and video campaigns that capture intent and build awareness.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.007,3H3.993C3.445,3,3,3.445,3,3.993v16.013C3,20.555,3.445,21,3.993,21h16.013C20.555,21,21,20.555,21,20.007V3.993C21,3.445,20.555,3,20.007,3z M8.789,18.121H5.618V9.577h3.171V18.121z M7.203,8.285c-0.957,0-1.742-0.785-1.742-1.742c0-0.957,0.785-1.742,1.742-1.742c0.957,0,1.742,0.785,1.742,1.742C8.945,7.5,8.16,8.285,7.203,8.285z M18.424,18.121h-3.168v-4.359c0-1.183-0.022-2.705-1.65-2.705c-1.651,0-1.904,1.289-1.904,2.619v4.444H8.534V9.577h3.042v1.394h0.043c0.423-0.801,1.458-1.648,3-1.648c3.211,0,3.805,2.115,3.805,4.866V18.121z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">LinkedIn Ads</h3>
              <p className="text-gray-600">
                B2B focused advertising that targets professionals based on job title, industry, and more.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Facebook & Instagram Ads</h3>
              <p className="text-gray-600">
                Visual ads that leverage detailed targeting options to reach your ideal customers.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 text-pink-500 mb-6">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">YouTube Ads</h3>
              <p className="text-gray-600">
                Video advertisements that engage viewers and build brand awareness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Paid Advertising Services</h2>
            <p className="text-gray-600">
              Comprehensive paid advertising solutions to drive traffic, leads, and sales.
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
                  {index === 0 ? <Globe size={28} /> : 
                   index === 1 ? <TrendingUp size={28} /> : 
                   index === 2 ? <PieChart size={28} /> : 
                   <LineChart size={28} />}
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Benefits of Paid Advertising</h2>
            <p className="text-gray-600">
              Here's how our paid advertising strategies can benefit your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-6">
                  {index === 0 ? <Zap size={24} /> : 
                   index === 1 ? <Target size={24} /> : 
                   index === 2 ? <TrendingUp size={24} /> : 
                   index === 3 ? <BarChart3 size={24} /> : 
                   <DollarSign size={24} />}
                </div>
                <p className="text-gray-600">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Advertising Process</h2>
            <p className="text-gray-600">
              We follow a strategic approach to create and manage effective paid advertising campaigns.
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
              <h3 className="text-xl font-semibold mb-3 mt-2">Research & Planning</h3>
              <p className="text-gray-600">
                We analyze your target audience, competitors, and market to develop an effective advertising strategy.
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
              <h3 className="text-xl font-semibold mb-3 mt-2">Campaign Setup</h3>
              <p className="text-gray-600">
                We create optimized campaigns with compelling ad copy, visuals, and targeted audience settings.
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
              <h3 className="text-xl font-semibold mb-3 mt-2">Monitoring & Optimization</h3>
              <p className="text-gray-600">
                We continuously monitor campaign performance and make data-driven adjustments to improve results.
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
              <h3 className="text-xl font-semibold mb-3 mt-2">Reporting & Analysis</h3>
              <p className="text-gray-600">
                We provide detailed reports on campaign performance, ROI, and insights for future improvements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600">
              See how our paid advertising strategies have helped businesses achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">E-commerce Revenue Growth</h3>
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-primary-500">3.5x</span>
                  <span className="ml-2 text-gray-600">Return on Ad Spend</span>
                </div>
                <p className="text-gray-600 mb-4">
                  An e-commerce client achieved a 3.5x return on ad spend and 125% increase in revenue through our Google and Facebook ad campaigns.
                </p>
                <a href="#" className="text-primary-500 font-medium hover:text-primary-700 transition-colors">Read Case Study</a>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">B2B Lead Generation</h3>
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-primary-500">68%</span>
                  <span className="ml-2 text-gray-600">Reduction in Cost Per Lead</span>
                </div>
                <p className="text-gray-600 mb-4">
                  A B2B software company saw a 68% reduction in cost per lead and 45% increase in qualified leads through our LinkedIn ad campaign.
                </p>
                <a href="#" className="text-primary-500 font-medium hover:text-primary-700 transition-colors">Read Case Study</a>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Local Business Growth</h3>
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-primary-500">230%</span>
                  <span className="ml-2 text-gray-600">Increase in Foot Traffic</span>
                </div>
                <p className="text-gray-600 mb-4">
                  A local retail business achieved a 230% increase in store visits and 85% increase in sales through our targeted Google and Facebook campaigns.
                </p>
                <a href="#" className="text-primary-500 font-medium hover:text-primary-700 transition-colors">Read Case Study</a>
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
              Find answers to common questions about our paid advertising services.
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
                <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business with Paid Advertising?</h2>
                <p className="mb-6">
                  Contact us today to discuss how our paid advertising services can help drive targeted traffic and generate leads for your business.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Customized advertising strategies</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Targeted campaigns for your audience</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Continuous optimization for best results</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Transparent reporting and analysis</span>
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

export default PaidAds;