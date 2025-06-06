import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { services } from '../data/services';

const Services = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <Award className="w-6 h-6" /> },
    { number: '150+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '95%', label: 'Client Retention', icon: <Star className="w-6 h-6" /> },
    { number: '200%', label: 'Average ROI Increase', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <PageTransition>
      {/* Hero Section with Improved Design */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-72 h-72 bg-secondary-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* <Star className="w-4 h-4 mr-2 text-accent-300" /> */}
              {/* <span className="text-sm font-medium">Award-Winning Digital Solutions</span> */}
            {/* </motion.div> */}
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our Services
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
             At Primeverse, we provide tailored digital solutions to help your business grow. From
building high-performance websites to running results-driven marketing campaigns and
hiring top tech talent — we deliver smart, scalable services that move your brand forward.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-full font-semibold hover:from-secondary-600 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Start Your Project
              </Link>
              {/* <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                View Portfolio
              </button> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-12 z-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-600 font-semibold rounded-full mb-4">
              OUR EXPERTISE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Solutions Built for Success
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
            We combine strategy and action to create customized digital services that align perfectly
with your business goals and deliver measurable results.

            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200"
              >
                {/* Service Image with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.imageAlt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm text-white mr-3">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {service.shortDescription}
                  </p>

                  {/* Key Benefits */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-lg mb-4 text-gray-900">Key Benefits:</h4>
                    <div className="space-y-3">
                      {service.benefits.slice(0, 4).map((benefit, i) => (
                        <div key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    Learn More
                    <motion.span
                      className="ml-2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-24 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-secondary-300 font-semibold rounded-full mb-4">
              OUR METHODOLOGY
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6">
              Our Proven Process{' '}
                <span className="bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
                for Achieving Success 
                </span>
              </h2>
            <p className="text-xl text-white/80 leading-relaxed">
            Our process is simple, collaborative, and results-focused — built to turn your vision into a
high-impact digital experience. Each step is designed to keep you informed, involved, and
moving forward with confidence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                title: 'Discover',
                description: 'We dive deep into your brand, goals, and audience to lay a strong foundation.'
              },
              {
                number: '02',
                title: 'Plan',
                description: 'Our team crafts a smart, data-backed strategy tailored to your objectives.'
              },
              {
                number: '03',
                title: 'Execute',
                description: 'We bring the plan to life with precision, creativity, and attention to detail.'
              },
              {
                number: '04',
                title: 'Optimize',
                description: 'We track results, gather feedback, and refine for continuous growth.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl font-bold text-secondary-300 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-secondary-400 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-accent-100 to-secondary-100 text-accent-600 font-semibold rounded-full mb-4">
              CLIENT SUCCESS STORIES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real results from real businesses. See how we've helped companies 
              transform their digital presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Robert Turner",
                role: "CEO, Turner Industries",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                testimonial: "PrimeVerse transformed our online presence completely. Their web design and SEO services have increased our traffic by 150% and significantly improved our conversion rates.",
                metric: "150% Traffic Increase"
              },
              {
                name: "Amanda Lewis",
                role: "Marketing Director, Bloom Retail",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                testimonial: "Working with PrimeVerse on our social media strategy has been a game-changer. Their team is responsive, creative, and delivers real results.",
                metric: "200% Engagement Growth"
              },
              {
                name: "David Patel",
                role: "Founder, TechSolve",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                testimonial: "The PrimeVerse team managed our Google Ads campaign with exceptional expertise. Their strategic approach helped us reduce costs while increasing conversions.",
                metric: "40% Cost Reduction"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-6 leading-relaxed text-lg">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-600 text-sm font-semibold rounded-full mb-6">
                  {testimonial.metric}
                </div>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 ring-2 ring-primary-100">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
  <div className="container mx-auto px-4 text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        Ready to Elevate Your{' '}
        <span className="bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
          Digital Presence?
        </span>
      </h2>

      <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
        Let’s work together to build something impactful.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/contact" 
          className="px-8 py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white font-semibold rounded-full hover:from-secondary-600 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Start Your Project
        </Link>
      </div>
    </motion.div>
  </div>
</section>

    </PageTransition>
  );
};

export default Services;