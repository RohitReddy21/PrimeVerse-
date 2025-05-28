import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Clock, TrendingUp } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const About = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.span 
              className="text-secondary-300 font-semibold mb-2 inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              ABOUT US
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We're Digital Growth Experts
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              PrimeVerse is a full-service digital agency dedicated to helping businesses 
              thrive in the digital landscape with innovative strategies and solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="PrimeVerse Team" 
                className="w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-500 font-semibold mb-2 inline-block">OUR STORY</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Started</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, PrimeVerse began with a simple mission: to help businesses leverage the power of digital 
                to achieve tangible results. What started as a small team of passionate digital marketers has grown into 
                a full-service agency with expertise across web development, digital marketing, and technology solutions.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we've partnered with hundreds of businesses, from startups to established enterprises, 
                helping them navigate the ever-evolving digital landscape and achieve their growth objectives.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Client-Centric Approach</h4>
                    <p className="text-gray-600">We put our clients' needs at the center of everything we do.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Data-Driven Strategies</h4>
                    <p className="text-gray-600">We make decisions based on solid data and analytics.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Continuous Innovation</h4>
                    <p className="text-gray-600">We stay ahead of digital trends to bring the best solutions.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-500 font-semibold mb-2 inline-block">OUR VALUES</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-gray-600">
              Our core values guide every decision we make and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <Users className="text-primary-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Partnership</h3>
              <p className="text-gray-600">
                We see ourselves as an extension of your team, committed to your success as if it were our own.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <Award className="text-primary-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We hold ourselves to the highest standards in everything we do, from strategy to execution.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <TrendingUp className="text-primary-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Mindset</h3>
              <p className="text-gray-600">
                We continuously learn, adapt, and evolve to stay at the forefront of digital innovation.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <Clock className="text-primary-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Timeliness</h3>
              <p className="text-gray-600">
                We respect deadlines and deliver on our promises, ensuring projects stay on track.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-500 font-semibold mb-2 inline-block">OUR TEAM</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet The Experts</h2>
            <p className="text-gray-600">
              Our talented team of professionals is dedicated to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-soft overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Michael Johnson" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Michael Johnson</h3>
                <p className="text-primary-500 mb-4">Founder & CEO</p>
                <p className="text-gray-600">
                  Digital strategy expert with over 15 years of experience in the industry.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-soft overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sarah Williams" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Sarah Williams</h3>
                <p className="text-primary-500 mb-4">Creative Director</p>
                <p className="text-gray-600">
                  Award-winning designer with a passion for creating impactful digital experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-soft overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="David Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">David Chen</h3>
                <p className="text-primary-500 mb-4">Technical Director</p>
                <p className="text-gray-600">
                  Full-stack developer with expertise in building scalable web applications.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-soft overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Emily Rodriguez" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-1">Emily Rodriguez</h3>
                <p className="text-primary-500 mb-4">Marketing Director</p>
                <p className="text-gray-600">
                  Digital marketing strategist with a track record of successful campaigns.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Let's collaborate to take your business to the next level with our innovative digital solutions.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-secondary-500 hover:text-white shadow-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;