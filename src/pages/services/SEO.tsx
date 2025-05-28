import { motion } from 'framer-motion';
import { Search, LineChart, Target, CheckCircle } from 'lucide-react';
import PageTransition from '../../components/PageTransition';
import { services } from '../../data/services';
import ContactForm from '../../components/ContactForm';

const SEO = () => {
  const service = services.find(s => s.id === 'seo');

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
              <h2 className="text-3xl font-bold mb-6">Boost Your Search Engine Rankings</h2>
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
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="SEO optimization" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our SEO Services</h2>
            <p className="text-gray-600">
              Here's how our SEO strategies can benefit your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1" />
                  <p className="text-gray-600">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our SEO Services</h2>
            <p className="text-gray-600">
              We offer comprehensive SEO solutions tailored to your business needs.
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
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">Content Strategy & Creation</h3>
              <p className="text-gray-600">
                Development of high-quality, SEO-optimized content that engages readers and earns backlinks.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">Link Building</h3>
              <p className="text-gray-600">
                Strategic acquisition of high-quality backlinks to improve your website's authority and rankings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our SEO Process</h2>
            <p className="text-gray-600">
              We follow a proven methodology to improve your search engine rankings.
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
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-6">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO Audit</h3>
              <p className="text-gray-600">
                Comprehensive analysis of your website's current SEO performance and areas for improvement.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategy Development</h3>
              <p className="text-gray-600">
                Creation of a customized SEO strategy based on your business goals and target audience.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-6">
                <CheckCircle size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Implementation</h3>
              <p className="text-gray-600">
                Execution of on-page and off-page optimization tactics to improve your search rankings.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary-100 text-primary-500 mb-6">
                <LineChart size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Monitoring & Reporting</h3>
              <p className="text-gray-600">
                Regular tracking of performance metrics and detailed reporting on your SEO progress.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">SEO Success Stories</h2>
            <p className="text-gray-600">
              See how our SEO strategies have helped businesses improve their online visibility.
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
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">E-commerce Revenue Growth</h3>
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-primary-500">185%</span>
                  <span className="ml-2 text-gray-600">Increase in organic traffic</span>
                </div>
                <p className="text-gray-600 mb-4">
                  An e-commerce client saw a 185% increase in organic traffic and 120% increase in revenue after 6 months of SEO optimization.
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
                <h3 className="text-xl font-semibold mb-3">Local Business Success</h3>
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-primary-500">300%</span>
                  <span className="ml-2 text-gray-600">More local search visibility</span>
                </div>
                <p className="text-gray-600 mb-4">
                  A local service business achieved 300% increase in Google Map Pack visibility and 250% more phone calls from Google listings.
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
                <h3 className="text-xl font-semibold mb-3">B2B Lead Generation</h3>
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-primary-500">92%</span>
                  <span className="ml-2 text-gray-600">Increase in quality leads</span>
                </div>
                <p className="text-gray-600 mb-4">
                  A B2B company saw first-page rankings for 25 target keywords, resulting in 92% more qualified leads from organic search.
                </p>
                <a href="#" className="text-primary-500 font-medium hover:text-primary-700 transition-colors">Read Case Study</a>
              </div>
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
              Find answers to common questions about our SEO services.
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
                <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Search Rankings?</h2>
                <p className="mb-6">
                  Contact us today to discuss how our SEO services can help drive more traffic and leads to your website.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Customized SEO strategies</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Transparent reporting</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Proven results</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Ongoing optimization</span>
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

export default SEO;