import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
// import ThreeScene from '../components/ThreeScene';
import ServiceCard from '../components/ServiceCard';
import PageTransition from '../components/PageTransition';
import { services } from '../data/services';
import HowItWorksSection from '../components/HowItWorksSection';
import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
  <>
    <Helmet>
      <title>Primeverse | Digital Solutions for Marketing, Development & Recruitment</title>
      <meta name="description" content="Primeverse empowers businesses with ROI-driven digital marketing, innovative web & app
development, CRM solutions, and expert IT recruitment. Scale smarter with us."></meta>
      <meta name="keywords" content="Primeverse, digital marketing, web development, app development, IT recruitment, CRM
development"></meta>
     <meta property="og:title" content="Primeverse | Digital Marketing, Web & IT Solutions"/>
     <meta property="og:description" content="Partner with Primeverse for ROI-driven digital marketing, web & app development, CRM systems, and expert IT recruitment. Let's grow your business."></meta>
     <meta property="og:url" content="https://www.primeverse.in"></meta>
     <meta property="og:type" content="website"></meta>
     <meta property="og:image" content="https://www.primeverse.in/assets/og-image.jpg"></meta>
     <meta property="og:site_name" content="Primeverse"></meta>

    </Helmet>
    <PageTransition>
      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center">
  {/* Video Background */}
  <div className="absolute inset-0 w-full h-full ">
    <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="https://cdn.pixabay.com/video/2023/05/31/165232-832460011_tiny.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center py-20 sm:py-24 lg:py-32 mt-4 mb:mt-2">
    <div className="max-w-4xl mx-auto">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Primeverse <br className="hidden sm:block" />
        <span className="text-secondary-500">Empowering </span> 
        Your Digital Future
      </motion.h1>
      
      <motion.p
        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        We don't just build websites or run ads — we build <b className='font-bold'>brands</b>. 
        At Primeverse, we blend <b className='font-bold'>technology, creativity, and strategy</b> to 
        create digital experiences that grow with your business. Whether you're a startup finding 
        your feet or an enterprise scaling fast — we are your digital partner for the long run.
      </motion.p>
      
      <motion.div
        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-md sm:max-w-none mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          to="/contact"
          className="btn btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-transform w-full sm:w-auto min-w-[160px] sm:min-w-[180px]"
        >
          Get Started
        </Link>
        <Link
          to="/services"
          className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-primary-500 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 hover:scale-105 transition-transform w-full sm:w-auto min-w-[160px] sm:min-w-[180px]"
        >
          Our Services
        </Link>
      </motion.div>
    </div>
  </div>

  {/* Scroll Indicator */}
  {/* <motion.div
    className="absolute bottom-6 sm:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 z-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 0.5 }}
  >
    <motion.div
      className="w-6 h-10 sm:w-8 sm:h-12 border-2 border-white rounded-full flex items-start justify-center p-1"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <motion.div className="w-1 h-2 sm:h-3 bg-white rounded-full" />
    </motion.div>
  </motion.div> */}
</section>
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* <span className="text-primary-500 font-semibold mb-2 inline-block">We EXPERTISE</span> */}
            <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            OUR{' '}
            <span
  className="bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(to right, #287C96, #F59E0B)'
  }}
>
  SERVICES
</span>

          </h2>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>

            <p className="text-gray-600">
            We offer smart digital solutions — from web and app development to marketing, CRM, and IT recruitment — to help your business grow and succeed online.            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                image={service.image}
                link={service.link}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>
      <HowItWorksSection />
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* <span className="text-primary-500 font-semibold text-center mb-2 inline-block">WHY CHOOSE US</span> */}
              <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Why Choose{' '}
            <span className="bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(to right, #287C96, #F59E0B)'
  }}>
              PrimeVerse?
            </span>
          </h2>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>
              <p className="text-gray-600 mb-8">
              At Primeverse, we blend creativity, technology, and strategy to deliver solutions that
actually work. We're all about real results, strong partnerships, and making your digital
journey smooth, scalable, and successful.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Human-first approach</h4>
                    {/* <p className="text-gray-600">Human-first approach
                    </p> */}
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Industry-grade tools & techniques</h4>
                    {/* <p className="text-gray-600">We focus on delivering measurable outcomes for your business.</p> */}
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Scalable solutions for every stage of business</h4>
                    {/* <p className="text-gray-600">Every business is unique, and so are our strategies and solutions.</p> */}
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Transparent communication & quick delivery</h4>
                    {/* <p className="text-gray-600">We focus on delivering measurable outcomes for your business.</p> */}
                  </div>
                 
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                  <h4 className="font-semibold mb-1">We win only when you win?</h4>
                    {/* <p className="text-gray-600">We focus on delivering measurable outcomes for your business.</p> */}
                  </div>
                 
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                  <h4 className="font-semibold mb-1">We offer digital marketing services based on a percentage of the deal size rather than upfront fixed fees.</h4>
                    {/* <p className="text-gray-600">We focus on delivering measurable outcomes for your business.</p> */}
                  </div>
                 
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                  <h4 className="font-semibold mb-1">No heavy retainers. No vague ROI promises. 100% aligned incentives.</h4>
                    {/* <p className="text-gray-600">We focus on delivering measurable outcomes for your business.</p> */}
                  </div>
                 
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-primary-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                  <h4 className="font-semibold mb-1">We tie our success directly to the revenue we help you generate. Because we believe in partnerships, not transactions.</h4>
                    {/* <p className="text-gray-600">We focus on delivering measurable outcomes for your business.</p> */}
                  </div>
                 
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center text-primary-500 font-medium hover:text-primary-700 transition-colors group"
              >
                Learn More About Us
                <motion.span
                  className="ml-2 inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="PrimeVerse Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent flex items-end">
                <div className="p-8">
                  <p className="text-white text-xl font-semibold">Meet Our Team</p>
                  <p className="text-white/80">Passionate professionals dedicated to your success</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary-300 font-semibold mb-2 inline-block">OUR IMPACT</span>
            {/* <div className="text-center mb-16 animate-fade-in-up"> */}
          <h2 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6">
            Results{' '}
            <span className="bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(to right, #287C96, #F59E0B)'
  }}>
              That Speak
            </span>
          </h2>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
            <p className="text-white/80">
              We're proud of the results we've delivered for our clients over the years.
              Here's a snapshot of our impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl font-bold mb-2">250+</div>
              <div className="text-lg text-white/80">Happy Clients</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-lg text-white/80">Projects Completed</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2">150%</div>
              <div className="text-lg text-white/80">Average ROI</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-lg text-white/80">Years Experience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-500 font-semibold mb-2 inline-block">TESTIMONIALS</span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            What{' '}
            <span className="bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(to right, #287C96, #F59E0B)'
  }}>
              Our Clients Say
            </span>
          </h2>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
            <p className="text-gray-600">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-xl shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "PrimeVerse transformed our online presence completely. Their web design and SEO services have increased our traffic by 150% and significantly improved our conversion rates."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Robert Turner" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Robert Turner</p>
                  <p className="text-gray-500 text-sm">CEO, Turner Industries</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "Working with PrimeVerse on our social media strategy has been a game-changer. Their team is responsive, creative, and delivers real results. Our engagement has increased by over 200%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Amanda Lewis" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Amanda Lewis</p>
                  <p className="text-gray-500 text-sm">Marketing Director, Bloom Retail</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-xl shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent-500 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "The PrimeVerse team managed our Google Ads campaign with exceptional expertise. Their strategic approach helped us reduce our cost per acquisition by 40% while increasing conversions."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="David Patel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">David Patel</p>
                  <p className="text-gray-500 text-sm">Founder, TechSolve</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
<section className="py-20 bg-white text-gray-900">
  <div className="container mx-auto px-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl md:text-6xl font-bold mb-6">
        Let’s Build{' '}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(to right, #287C96, #F59E0B)',
          }}
        >
          Something That Works.
        </span>
      </h2>

      <div className="mt-8 w-24 h-1 bg-gradient-to-r from-[#287C96] to-yellow-500 mx-auto rounded-full"></div>

      <p className="max-w-2xl mx-auto mb-8 text-gray-700">
        From strategy to execution, we’re here to make your brand thrive in the digital world
      </p>

      <Link
        to="/contact"
        className="btn bg-[#287C96] text-white hover:bg-yellow-500 hover:text-gray-900 shadow-lg"
      >
        Contact Us Today
      </Link>
    </motion.div>
  </div>
</section>

    </PageTransition>
    </>
  );
};

export default Home;