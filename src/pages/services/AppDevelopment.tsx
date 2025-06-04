import React from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Zap, 
  Shield, 
  BarChart3,
  Users,
  Award,
  TrendingUp,
  Clock,
  Target,
  Globe,
  Database,
  Layers,
  Cpu
} from 'lucide-react';

const AppDevelopment = () => {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-emerald-500" />,
      title: "iOS App Development",
      description: "Designing sleek, reliable iOS apps that deliver exceptional performance and usability for Apple devices."
    },
    {
      icon: <Monitor className="w-8 h-8 text-emerald-500" />,
      title: "Android App Development",
      description: "Creating scalable Android applications built for speed, security, and optimal performance on all Android devices."
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-500" />,
      title: "Cross-Platform App Development",
      description: "Developing versatile apps that provide a unified experience across both iOS and Android, using a single codebase"
    },
    {
      icon: <Database className="w-8 h-8 text-emerald-500" />,
      title: "Hybrid App Development",
      description: "Merging native capabilities with web technologies to build cost-effective, featurerich hybrid mobile apps."
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-500" />,
      title: "App Maintenance & Support",
      description: "Providing ongoing updates, bug fixes, and performance enhancements to keep your apps secure and running smoothly."
    },
    // {
    //   icon: <BarChart3 className="w-8 h-8 text-emerald-500" />,
    //   title: "Analytics & Insights",
    //   description: "Providing ongoing updates, bug fixes, and performance enhancements to keep your apps secure and running smoothly."
    // }
  ];

  const process = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "Understand your goals, target audience, and technical needs.",
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create intuitive and engaging UI/UX designs with interactive prototypes.",
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Development",
      description: "Build scalable, secure, and high-performance applications.",
      duration: "4-8 weeks"
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Conduct rigorous testing to ensure a flawless user experience.",
      duration: "1 week + ongoing"
    },
    {
      step: "05",
      title: "Deployment",
      description: "Launch the app smoothly on relevant platforms.",
      duration: "1 week + ongoing"
    },
    {
      step: "06",
      title: "Maintenance & Support",
      description: "Provide ongoing updates, improvements, and technical support.",
      duration: "1 week + ongoing"
    }
    
    
  ];

  const stats = [
    { number: '150+', label: 'Apps Developed', icon: <Award className="w-6 h-6" /> },
    { number: '99%', label: 'App Store Approval', icon: <Star className="w-6 h-6" /> },
    { number: '250%', label: 'Avg. User Engagement', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '24/7', label: 'Technical Support', icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "David Rodriguez",
      role: "CTO, FinTech Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      testimonial: "PrimeVerse delivered a robust mobile banking app that exceeded security standards and user expectations. Our daily active users increased by 300%!",
      metric: "300% DAU Increase"
    },
    {
      name: "Lisa Thompson",
      role: "Founder, HealthTech Startup",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      testimonial: "The team's expertise in healthcare app development and regulatory compliance made our FDA-approved app launch seamless and successful.",
      metric: "FDA Approved in 6 months"
    }
  ];

  const pricingPlans = [
    {
      name: "MVP Starter",
      price: "$15,999",
      description: "Perfect for startups and proof of concept apps",
      features: [
        "Single platform (iOS or Android)",
        "Core functionality development",
        "Basic UI/UX design",
        "API integration",
        "App store submission",
        "3 months support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$29,999",
      description: "Ideal for growing businesses and feature-rich apps",
      features: [
        "Cross-platform development",
        "Advanced UI/UX design",
        "Backend development",
        "Push notifications",
        "Analytics integration",
        "6 months support",
        "App store optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$49,999",
      description: "For complex enterprise applications",
      features: [
        "Multi-platform deployment",
        "Custom integrations",
        "Advanced security features",
        "Scalable architecture",
        "Admin dashboard",
        "12 months support",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-800">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-bounce">
              <Smartphone className="w-4 h-4 mr-2 text-emerald-300" />
              <span className="text-sm font-medium">Mobile App Development Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-teal-200 animate-pulse">
            Transforming Ideas into Seamless Mobile Experiences
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            We specialize in developing high-performance mobile apps that combine intuitive design,
robust functionality, and smooth user experiences—turning your concepts into powerful
digital products that drive results.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Start Your App Project
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-emerald-300">
                View App Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-12 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-all duration-500">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-emerald-600 mb-1 group-hover:text-teal-600 transition-colors duration-300">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 font-semibold rounded-full mb-4">
              APP DEVELOPMENT SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Innovative App Solutions to Empower Your Business

            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
            We craft high-performance mobile applications tailored to your business objectives—
delivering intuitive design, robust functionality, and seamless user experience across
platforms.

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 group hover:-translate-y-2"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-emerald-100 text-orange-600 font-semibold rounded-full mb-4">
              DEVELOPMENT PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Reliable App Development Framework

            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
            A dependable and efficient approach that ensures your app is delivered on time, within
scope, and meets the highest quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="text-4xl font-bold text-emerald-500 mb-4 group-hover:text-teal-500 transition-colors duration-300">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  {/* <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full group-hover:bg-teal-100 group-hover:text-teal-700 transition-colors duration-300">
                    {step.duration}
                  </div> */}
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-300 to-teal-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-teal-100 to-orange-100 text-teal-600 font-semibold rounded-full mb-4">
              APP DEVELOPMENT PRICING
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Transparent App Development Packages
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose from our flexible mobile app development packages designed to fit different business needs, from MVP startups to enterprise-grade applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular 
                    ? 'border-emerald-500 scale-105 shadow-xl hover:shadow-2xl' 
                    : 'border-gray-100 hover:border-emerald-200 hover:shadow-xl'
                } group`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">{plan.name}</h3>
                  {/* <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:text-teal-600 transition-colors duration-300">{plan.price}</div> */}
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-teal-500 transition-colors duration-300" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-xl' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gradient-to-r hover:from-emerald-100 hover:to-teal-100 hover:text-emerald-700'
                  }`}
                >
                  Start Development
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-teal-100 text-orange-600 font-semibold rounded-full mb-4">
              CLIENT SUCCESS STORIES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Proven Results from Our App Development
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how our mobile app development expertise has helped businesses achieve remarkable growth and user engagement across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-current group-hover:text-orange-500 transition-colors duration-300" />
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">"{testimonial.testimonial}"</p>
                
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full group-hover:bg-teal-100 group-hover:text-teal-700 transition-colors duration-300">
                  {testimonial.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-200 to-teal-200">
            Ready to bring your app idea to life?
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            Partner with us for a seamless development experience that guarantees quality and timely
delivery. Get in touch today to start your project.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Start App Development
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-emerald-300">
                Get Free App Consultation
              </button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60">
              <div className="flex items-center group">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 group-hover:text-teal-300 transition-colors duration-300" />
                <span className="group-hover:text-white/80 transition-colors duration-300">Free App Consultation</span>
              </div>
              <div className="flex items-center group">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 group-hover:text-teal-300 transition-colors duration-300" />
                <span className="group-hover:text-white/80 transition-colors duration-300">No Hidden Development Costs</span>
              </div>
              <div className="flex items-center group">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2 group-hover:text-teal-300 transition-colors duration-300" />
                <span className="group-hover:text-white/80 transition-colors duration-300">Post-Launch Support Included</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;