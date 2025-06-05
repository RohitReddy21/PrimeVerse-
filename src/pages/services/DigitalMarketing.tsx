import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Search, 
  Smartphone, 
  BarChart3, 
  Target, 
  TrendingUp, 
  Users,
  Award,
  Clock,
  Globe,
  MessageSquare,
  Mail,
  Eye,
  Zap,
  Phone
} from 'lucide-react';

const DigitalMarketingIndia = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-orange-500" />,
      title: "SEO Services India",
      description: "Improve your search engine rankings with tailored SEO strategies that drive organic traffic and strengthen online authority."
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: "Google Ads Management",
      description: "Maximize your return on investment with expertly managed Google Ads campaigns focused on performance and conversion."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Social Media Marketing",
      description: "Increase brand engagement and visibility across major platforms including Facebook, Instagram, LinkedIn, and more."
    },
    {
      icon: <Mail className="w-8 h-8 text-orange-500" />,
      title: "Email Marketing",
      description: "Nurture leads and boost conversions with personalized email campaigns crafted to align with your brand voice and audience behavior"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: "Digital Analytics",
      description: "Monitor, analyze, and optimize your marketing efforts with comprehensive reporting and actionable insights."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      title: "Content Marketing",
      description: "Deliver high-quality content that informs, engages, and converts, while reinforcing your brand's thought leadership."
    }
  ];

  const process = [
    {
      step: "01",
      title: " Research & Analysis",
      description: "We dive into market trends, audience behavior, and competitor insights",
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "We craft a tailored digital marketing plan aligned with your business goals.",
      duration: "1 week"
    },
    {
      step: "03",
      title: "Execution",
      description: "We implement targeted campaigns across channels like SEO, social media,email, and paid ads.",
      duration: "2-4 weeks"
    },
    {
      step: "04",
      title: "Monitoring & Optimization",
      description: "We track performance, analyze data, and continuously refine strategies for maximum ROI.",
      duration: "Ongoing"
    }
  ];

  const stats = [
    { number: '500+', label: 'Indian Businesses Served', icon: <Award className="w-6 h-6" /> },
    { number: '250%', label: 'Avg. Traffic Growth', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '95%', label: 'Client Retention Rate', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'India Support Team', icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "CEO, Mumbai Tech Solutions",
      location: "Mumbai, Maharashtra",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      testimonial: "Our online visibility in Mumbai market increased dramatically. We're now ranking #1 for key business terms in Mumbai and Maharashtra.",
      metric: "300% Lead Increase"
    },
    {
      name: "Priya Patel",
      role: "Founder, Bangalore Startup Hub",
      location: "Bangalore, Karnataka",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      testimonial: "The team understands Indian market dynamics perfectly. Our digital presence across Bangalore and Karnataka has grown exponentially.",
      metric: "400% Brand Awareness"
    }
  ];

  const pricingPlans = [
    {
      name: "Startup India",
      price: "₹25,000",
      period: "/month",
      description: "Perfect for startups and small businesses in India",
      features: [
        "Local SEO for 1 city",
        "Google My Business optimization",
        "Social media management (2 platforms)",
        "Monthly performance reports",
        "₹10,000 Google Ads credit",
        "Email marketing setup"
      ],
      popular: false
    },
    {
      name: "Business Growth",
      price: "₹50,000",
      period: "/month",
      description: "Ideal for growing businesses across India",
      features: [
        "SEO for multiple cities",
        "Google Ads management",
        "Social media marketing (4 platforms)",
        "Content marketing strategy",
        "₹25,000 Google Ads credit",
        "Bi-weekly strategy calls",
        "Competitor analysis"
      ],
      popular: true
    },
    {
      name: "Enterprise India",
      price: "₹1,00,000",
      period: "/month",
      description: "For large enterprises and national campaigns",
      features: [
        "National SEO strategy",
        "Multi-platform advertising",
        "Advanced analytics & reporting",
        "Dedicated account manager",
        "₹50,000 advertising budget",
        "Custom integrations",
        "24/7 priority support"
      ],
      popular: false
    }
  ];

  // CTA Handler Functions
  const handleGetFreeAudit = () => {
    // Option 1: Navigate to contact page
    window.location.href = '/contact';
    
    // Option 2: Open contact form modal (if you have one)
    // setShowContactModal(true);
    
    // Option 3: Scroll to contact section
    // const contactSection = document.getElementById('contact');
    // if (contactSection) {
    //   contactSection.scrollIntoView({ behavior: 'smooth' });
    // }
    
    // Option 4: Track analytics event
    // gtag('event', 'click', { event_category: 'CTA', event_label: 'Free Audit Request' });
  };

  const handleViewCaseStudies = () => {
    // Navigate to case studies page
    window.location.href = '/case-studies';
  };

  const handleCallClick = () => {
    // Option 1: Open phone dialer
    window.location.href = 'tel:+919876543210';
    
    // Option 2: Show contact modal with phone number
    // setShowPhoneModal(true);
  };

  const handleStartGrowing = (planName) => {
    // Option 1: Navigate to contact with pre-selected plan
    window.location.href = `/contact?plan=${encodeURIComponent(planName)}`;
    
    // Option 2: Open plan-specific contact form
    // setSelectedPlan(planName);
    // setShowContactModal(true);
    
    // Option 3: Track plan selection
    // gtag('event', 'select_item', { item_id: planName, item_category: 'pricing_plan' });
  };

  const handleScheduleCall = () => {
    // Option 1: Open calendar booking widget
    window.open('https://calendly.com/your-calendar-link', '_blank');
    
    // Option 2: Navigate to scheduling page
    // window.location.href = '/schedule-consultation';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              <Globe className="w-4 h-4 mr-2 text-orange-300" />
              <span className="text-sm font-medium">Digital Marketing Services</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Enhance Your Market Reach with Proven Digital Marketing Solutions
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At Primeverse, we deliver data-driven digital marketing strategies designed to expand your online visibility, attract the right audience, and drive sustainable business growth.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <button
                onClick={handleGetFreeAudit}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-semibold hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Get Free Digital Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={handleViewCaseStudies}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                View Case Studies
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
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 font-semibold rounded-full mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Comprehensive Digital Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Primeverse, we offer end-to-end digital marketing services designed to enhance your brand visibility, attract qualified leads, and drive measurable business results. Our strategic approach ensures every campaign delivers impact and value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-600 font-semibold rounded-full mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Strategic Approach to Digital Marketing
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Primeverse, we use data-driven insights and creative strategies to deliver digital marketing campaigns that drive measurable results and lasting growth through four key phases.
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
                  <div className="text-4xl font-bold text-orange-500 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  {/* <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 text-sm font-medium rounded-full">
                    {step.duration}
                  </div> */}
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-300 to-gray-200"></div>
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 font-semibold rounded-full mb-4">
              PRICING PLANS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Affordable Digital Marketing Packages for India
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transparent pricing in Indian Rupees with no hidden costs. Choose the perfect plan for your business size and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  plan.popular ? 'border-orange-500 scale-105' : 'border-gray-100'
                } hover:shadow-xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  {/* <div className="text-4xl font-bold text-orange-600 mb-1">
                    {plan.price}
                    <span className="text-lg text-gray-500 font-normal">{plan.period}</span>
                  </div> */}
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

                <button 
                  onClick={() => handleStartGrowing(plan.name)}
                  className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 shadow-lg hover:shadow-xl' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Start Growing Today
                </button>
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 font-semibold rounded-full mb-4">
              SUCCESS STORIES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Indian Businesses Love Our Results
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              See how we've helped businesses across India grow their online presence and achieve remarkable digital marketing success.
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
                    <p className="text-orange-600 text-xs font-medium">{testimonial.location}</p>
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
      <section id="contact" className="py-24 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
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
              Ready to Dominate Digital India?
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Join 500+ successful Indian businesses who trust us with their digital marketing. Get your free digital audit and discover how we can grow your business online.
            </p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <button
                onClick={handleGetFreeAudit}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-semibold hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Get Free Digital Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={handleCallClick}
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +91-9876543210
              </button>
            </motion.div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Free Strategy Session</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>No Long-term Contracts</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>India-based Support Team</span>
              </div>
            </div>

            {/* Additional CTA - Schedule Consultation */}
            <motion.div
              className="mt-8 pt-8 border-t border-white/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-white/80 mb-4">
                Want to discuss your project personally?
              </p>
              <button
                onClick={handleScheduleCall}
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 border border-white/30"
              >
                <Clock className="w-4 h-4 mr-2" />
                Schedule Free 30-Min Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>  
  );
};

export default DigitalMarketingIndia;