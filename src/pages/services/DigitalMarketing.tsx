import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Code, 
  Smartphone, 
  Search, 
  Zap, 
  Shield, 
  BarChart3,
  Users,
  Award,
  TrendingUp,
  Clock,
  Target
} from 'lucide-react';

const DigitalMarketing = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary-500" />,
      title: "Custom Development",
      description: "Tailored solutions built from scratch to match your unique business requirements."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary-500" />,
      title: "Mobile Responsive",
      description: "Perfect display and functionality across all devices and screen sizes."
    },
    {
      icon: <Search className="w-8 h-8 text-primary-500" />,
      title: "SEO Optimized",
      description: "Built-in SEO best practices to help your website rank higher in search results."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-500" />,
      title: "Lightning Fast",
      description: "Optimized for speed with advanced caching and performance techniques."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-500" />,
      title: "Secure & Reliable",
      description: "Enterprise-level security measures and reliable hosting solutions."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary-500" />,
      title: "Analytics Ready",
      description: "Integrated tracking and analytics to monitor your website's performance."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation and research.",
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes and high-fidelity designs that align with your brand identity and user experience goals.",
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build your website using modern technologies and conduct thorough testing across all devices and browsers.",
      duration: "3-4 weeks"
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "Deploy your website and provide ongoing support, maintenance, and performance optimization.",
      duration: "1 week + ongoing"
    }
  ];

  const stats = [
    { number: '200+', label: 'Websites Built', icon: <Award className="w-6 h-6" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '150%', label: 'Avg. Traffic Increase', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      testimonial: "The website PrimeVerse created for us exceeded all expectations. Our online conversions increased by 180% within the first month!",
      metric: "180% Conversion Increase"
    },
    {
      name: "Michael Chen",
      role: "Founder, Creative Studio",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      testimonial: "Professional, creative, and results-driven. They delivered a stunning website that perfectly represents our brand.",
      metric: "300% More Inquiries"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Basic SEO setup",
        "Contact form",
        "3 rounds of revisions",
        "30 days support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$4,999",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10 pages",
        "Custom design",
        "Advanced SEO",
        "CMS integration",
        "E-commerce ready",
        "5 rounds of revisions",
        "90 days support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$7,999",
      description: "For large businesses and complex projects",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Performance optimization",
        "Security features",
        "Unlimited revisions",
        "1 year support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-72 h-72 bg-secondary-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Code className="w-4 h-4 mr-2 text-accent-300" />
              <span className="text-sm font-medium">Web Design & Development</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Beautiful Websites That Convert
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Create stunning, responsive websites that captivate your audience and drive conversions with our cutting-edge design and development expertise.
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
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                View Portfolio
              </button>
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

      {/* Features Section */}
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
              WHAT WE OFFER
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Features That Drive Results
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Every website we create is built with modern technologies and best practices to ensure optimal performance and user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-accent-100 to-secondary-100 text-accent-600 font-semibold rounded-full mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              How We Create Your Website
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our proven 4-step process ensures your project is delivered on time, on budget, and exceeds your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-bold text-primary-500 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                    {step.duration}
                  </div>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-300 to-gray-200"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-secondary-100 to-accent-100 text-secondary-600 font-semibold rounded-full mb-4">
              PRICING PLANS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transparent pricing with no hidden fees. Choose the plan that best fits your business needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  plan.popular ? 'border-primary-500 scale-105' : 'border-gray-100'
                } hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary-600 mb-2">{plan.price}</div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-accent-100 to-primary-100 text-accent-600 font-semibold rounded-full mb-4">
              CLIENT SUCCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Don't just take our word for it. Here's what some of our satisfied clients have to say about their experience with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">"{testimonial.testimonial}"</p>
                
                <div className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                  {testimonial.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-72 h-72 bg-secondary-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Let's create a website that not only looks amazing but also drives real results for your business. Get started with a free consultation today.
            </p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-full font-semibold hover:from-secondary-600 hover:to-secondary-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Schedule Free Consultation
              </button>
            </motion.div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>30-Day Money Back Guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Ongoing Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;