import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Database, 
  BarChart3, 
  Zap, 
  Shield, 
  Target,
  TrendingUp,
  Clock,
  Award,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  PieChart,
  MessageSquare
} from 'lucide-react';

const CRMManagement = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Contact & Lead Management",
      description: "Organize, track, and nurture customer interactions from first touch to conversion."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: "Sales Pipeline Tracking",
      description: "Monitor every stage of your sales process for better forecasting and deal management"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Task & Workflow Automation",
      description: "Automate repetitive tasks and streamline daily operations to save time and improve efficiency."
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-500" />,
      title: "Customer Support Integration",
      description: "Manage support tickets, communication, and service history from one centralized platform."
    },
    {
      icon: <PieChart className="w-8 h-8 text-blue-500" />,
      title: "Analytics & Reporting",
      description: "Gain deep insights into customer behavior, sales performance, and business trends."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: "Email & Campaign Management",
      description: "Run targeted marketing campaigns and follow-ups directly within the CRM."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy Planning",
      description: "We evaluate your current customer management workflows, identify key challenges, and define a tailored CRM strategy aligned with your business goals.",
      duration: "1-2 weeks"
    },
    {
      step: "02",
      title: "Platform Setup & Customization",
      description: "Customize the CRM environment with specific fields, workflows, and integrations to align with your unique operational needs.",
      duration: "2-3 weeks"
    },
    {
      step: "03",
      title: "Data Migration & User Training",
      description: "Securely migrate all existing data and equip your team with hands-on training to ensure confident, effective CRM usage.",
      duration: "1-2 weeks"
    },
    {
      step: "04",
      title: "Go-Live & Continuous Optimization",
      description: "Launch the platform organization-wide, followed by performance monitoring, support, and iterative enhancements for maximum ROI. Partner with Primeverse to unlock the full potential of your digital presence.",
      duration: "1 week + ongoing"
    }
  ];

  const stats = [
    { number: '500+', label: 'CRM Implementations', icon: <Award className="w-6 h-6" /> },
    { number: '95%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '300%', label: 'Avg. Sales Increase', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '24/7', label: 'CRM Support', icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Sales Director, Global Solutions Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      testimonial: "Our CRM implementation transformed our sales process. We've seen a 250% increase in lead conversion rates and our team productivity has skyrocketed!",
      metric: "250% Lead Conversion Increase"
    },
    {
      name: "David Thompson",
      role: "CEO, TechVenture Corp",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      testimonial: "The CRM management solution provided by PrimeVerse has revolutionized how we handle customer relationships. Our customer retention improved by 40%.",
      metric: "40% Better Customer Retention"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter CRM",
      price: "$3,999",
      description: "Perfect for small businesses starting with CRM",
      features: [
        "Up to 1,000 contacts",
        "Basic sales pipeline",
        "Email integration",
        "Contact management",
        "Mobile app access",
        "3 months support"
      ],
      popular: false
    },
    {
      name: "Professional CRM",
      price: "$6,999",
      description: "Ideal for growing sales teams",
      features: [
        "Up to 10,000 contacts",
        "Advanced sales automation",
        "Custom reporting & analytics",
        "Third-party integrations",
        "Lead scoring & nurturing",
        "Team collaboration tools",
        "12 months support"
      ],
      popular: true
    },
    {
      name: "Enterprise CRM",
      price: "$12,999",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited contacts",
        "Custom workflow automation",
        "Advanced analytics & AI",
        "Multi-department integration",
        "Custom field & modules",
        "Dedicated account manager",
        "24/7 priority support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-600">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Users className="w-4 h-4 mr-2 text-cyan-300" />
              <span className="text-sm font-medium">CRM Management Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
              Transform Customer Relationships Into Revenue
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Boost sales productivity by 300% with our comprehensive CRM management platform. Streamline customer data, automate sales processes, and drive sustainable business growth.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl inline-block"
              >
                Start Your CRM Journey
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 inline-block"
              >
                View CRM Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-12 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 font-semibold rounded-full mb-4">
              CRM FEATURES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Robust CRM Management Solutions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
            Our all-in-one CRM platform equips you with the tools to effectively manage customer
relationships, enhance sales productivity, and accelerate business growth through smart
automation and data-driven insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 font-semibold rounded-full mb-4">
              IMPLEMENTATION PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            CRM Integration Journey
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
            A structured, end-to-end approach to implementing your CRM—ensuring seamless
setup, smooth data migration, and successful adoption across your team

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-bold text-blue-500 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-gray-200"></div>
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-100 to-purple-100 text-cyan-600 font-semibold rounded-full mb-4">
              CRM PRICING PLANS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Flexible CRM Solutions for Every Business
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose from our comprehensive CRM packages designed to scale with your business growth. All plans include setup, training, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                  plan.popular ? 'border-blue-500 scale-105' : 'border-gray-100'
                } hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  {/* <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div> */}
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
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 font-semibold rounded-full mb-4">
              SUCCESS STORIES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              CRM Success Stories From Our Clients
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              See how businesses like yours have transformed their customer relationships and boosted sales performance with our CRM management solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to streamline your customer management?

            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            Let's implement a CRM solution that aligns with your business goals and drives long-term
success. Contact us today to get started.</p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Start Your CRM Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300 inline-block"
              >
                Schedule CRM Demo
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Free CRM Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Data Migration Included</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>24/7 CRM Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRMManagement;