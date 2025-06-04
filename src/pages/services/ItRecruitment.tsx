import React from 'react';
import { useState } from 'react';

import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Briefcase, 
  Search, 
  Zap, 
  Shield, 
  BarChart3,
  Target,
  Award,
  TrendingUp,
  Clock,
  Globe,
  Code,
  Database,
  Monitor
} from 'lucide-react';

const ItRecruitment = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Software Engineer Hiring",
      description: "Discover skilled software developers and full-stack engineers who bring your technology projects to life."
    },
    {
      icon: <Database className="w-8 h-8 text-blue-600" />,
      title: "Data Science & Analytics Talent",
      description: "Attract data scientists, machine learning experts, and analytics professionals to unlock insights and drive innovation."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Cybersecurity Experts",
      description: "Recruit specialists in cybersecurity, ethical hacking, and information security to protect your critical assets"
    },
    {
      icon: <Monitor className="w-8 h-8 text-blue-600" />,
      title: "DevOps & Cloud Professionals",
      description: "Find experienced DevOps engineers, cloud architects, and infrastructure experts to streamline your IT infrastructure."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "IT Project Leadership",
      description: "Hire proficient IT project managers and scrum master’s to ensure smooth delivery of your tech initiatives"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Technical Executive Search",
      description: "Locate visionary CTOs, technical directors, and senior architects to lead your technology roadmap and growth."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Understanding your technical needs and business goals.",
      duration: "1-2 days"
    },
    {
      step: "02",
      title: "Talent Sourcing",
      description: "Identifying qualified candidates through extensive networks",
      duration: "1-2 weeks"
    },
    {
      step: "03",
      title: "Screening & Assessment",
      description: "Evaluating skills and experience to ensure fit.",
      duration: "3-5 days"
    },
    {
      step: "04",
      title: "Candidate Shortlisting ",
      description: "Presenting top candidates for your consideration.",
      duration: "1-2 weeks"
    },
    {
      step: "05",
      title: "Interview Coordination",
      description: "Managing scheduling and communication.",
      duration: "1-2 weeks"
    },
    {
      step: "06",
      title: "Onboarding Support",
      description: "Assisting with smooth integration into your team.",
      duration: "1-2 weeks"
    }
  ];

  const stats = [
    { number: '500+', label: 'IT Professionals Placed', icon: <Users className="w-6 h-6" /> },
    { number: '95%', label: 'Successful Placements', icon: <Target className="w-6 h-6" /> },
    { number: '72hrs', label: 'Average Time-to-Match', icon: <Clock className="w-6 h-6" /> },
    { number: '150+', label: 'Tech Companies Served', icon: <Briefcase className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "David Rodriguez",
      role: "CTO, FinTech Solutions",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      testimonial: "Their IT recruitment expertise helped us build an exceptional development team. The quality of candidates and speed of delivery exceeded our expectations.",
      metric: "Team Built in 3 Weeks"
    },
    {
      name: "Emily Watson",
      role: "VP Engineering, CloudTech Inc",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2",
      testimonial: "Outstanding technical recruiting service. They understand the nuances of IT roles and consistently deliver top-tier talent for our scaling needs.",
      metric: "15 Senior Developers Hired"
    }
  ];

  const pricingPlans = [
    {
      name: "Contract Staffing",
      price: "15-20%",
      priceLabel: "of contractor rate",
      description: "Perfect for short-term projects and temporary IT needs",
      features: [
        "Contract-to-hire options",
        "Flexible engagement terms",
        "Quick turnaround time",
        "Specialized skill matching",
        "Performance guarantees",
        "Ongoing support"
      ],
      popular: false
    },
    {
      name: "Permanent Placement",
      price: "20-25%",
      priceLabel: "of annual salary",
      description: "Ideal for building your core IT team",
      features: [
        "Comprehensive candidate screening",
        "Cultural fit assessment",
        "Technical skill validation",
        "Reference verification",
        "90-day placement guarantee",
        "Replacement warranty"
      ],
      popular: true
    },
    {
      name: "Retained Search",
      price: "25-35%",
      priceLabel: "of annual salary",
      description: "For executive and specialized IT leadership roles",
      features: [
        "Dedicated search consultant",
        "Executive-level candidates",
        "Confidential search process",
        "Market intelligence reports",
        "Unlimited candidate presentations",
        "12-month guarantee"
      ],
      popular: false
    }
  ];

  const specializations = [
    "Software Development",
    "Data Science & AI",
    "Cybersecurity",
    "Cloud Computing",
    "DevOps Engineering",
    "Mobile Development",
    "Web Development",
    "Database Administration",
    "Network Engineering",
    "IT Project Management",
    "Quality Assurance",
    "Business Intelligence"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-800">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Users className="w-4 h-4 mr-2 text-blue-300" />
              <span className="text-sm font-medium">IT Recruitment & Technology Staffing</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Matching top tech talent with the right opportunities.
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            We connect top tech talent with leading companies, ensuring the perfect fit for your IT
needs. Our streamlined recruitment process saves you time and helps build highperforming teams.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Find IT Talent Now
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Browse IT Jobs
              </button>
            </div>

            {/* SEO Keywords Display */}
            {/* <div className="flex flex-wrap justify-center gap-2 text-sm mt-8">
              {specializations.slice(0, 6).map((spec, index) => (
                <span key={index} className="px-3 py-1 bg-white/10 text-white/70 rounded-full backdrop-blur-sm">
                  {spec}
                </span>
              ))}
            </div> */}
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
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-800 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 font-semibold rounded-full mb-4">
              IT RECRUITMENT SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Specialized Technology Recruitment
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our expert IT recruiters specialize in finding the best technical talent across all areas of information technology, 
              from software development to cybersecurity and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 font-semibold rounded-full mb-4">
              OUR RECRUITMENT PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Comprehensive Hiring Approach
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
            At Primeverse, we follow a structured recruitment process to ensure you get the right tech
talent efficiently and effectively. Each step is designed to align candidates with your
specific needs and company culture.            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-bold text-blue-600 mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
                  {/* <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    {step.duration}
                  </div> */}
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 font-semibold rounded-full mb-4">
              RECRUITMENT PRICING
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Flexible IT Staffing Solutions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose from our range of IT recruitment services. Transparent pricing with guaranteed results and no hidden fees.
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
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  {/* <div className="text-4xl font-bold text-blue-600 mb-1">{plan.price}</div> */}
                  <div className="text-sm text-gray-500 mb-3">{plan.priceLabel}</div>
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
                  className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get Started
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
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 font-semibold rounded-full mb-4">
              CLIENT SUCCESS STORIES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Hear from technology leaders who have successfully built their teams through our IT recruitment expertise.
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

      {/* Specializations Section */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Recruitment Specializations</h3>
            <p className="text-gray-600">We recruit across all major technology domains and specializations</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {specializations.map((spec, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-white text-gray-700 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to secure top technology talent for your business?
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
            Partner with Primeverse today to streamline your hiring process and build a highperforming team. Contact us for a consultation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Start Recruiting Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                Schedule Free Consultation
              </button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Free Talent Assessment</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>90-Day Placement Guarantee</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Dedicated Account Manager</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItRecruitment;