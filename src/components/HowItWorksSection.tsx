import React, { useState } from 'react';

// Animated Icon Component
function AnimatedIcon({ number, isHovered }) {
  const getGradientClass = (num) => {
    switch(num) {
      case '01': return 'from-blue-500 to-cyan-400';
      case '02': return 'from-yellow-500 to-yellow-300';
      case '03': return 'from-cyan-400 to-blue-300';
      case '04': return 'from-yellow-300 to-yellow-200';
      default: return 'from-blue-500 to-cyan-400';
    }
  };

  return (
    <div className={`relative w-20 h-20 mx-auto mb-6 transition-all duration-500 transform
      ${isHovered ? 'scale-125 rotate-12' : 'hover:scale-110 hover:rotate-6'}`}>
      <div className={`w-full h-full rounded-2xl shadow-lg transition-all duration-500
        bg-gradient-to-br ${getGradientClass(number)}
        ${isHovered ? 'shadow-2xl animate-pulse' : 'shadow-md animate-bounce'}`}>
        <div className="absolute inset-0 rounded-2xl bg-white bg-opacity-20 backdrop-blur-sm"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-xl drop-shadow-lg">{number}</span>
        </div>
        {isHovered && (
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-400 to-yellow-400 opacity-30 blur-lg animate-pulse"></div>
        )}
      </div>
    </div>
  );
}

// Step Card Component
function StepCard({ number, title, description, isHovered, onHover, onLeave, index }) {
  const getBgClass = (num) => {
    switch(num) {
      case '01': return 'from-blue-100 to-blue-50';
      case '02': return 'from-yellow-100 to-yellow-50';
      case '03': return 'from-cyan-100 to-cyan-50';
      case '04': return 'from-amber-100 to-amber-50';
      default: return 'from-blue-100 to-blue-50';
    }
  };

  const getAccentClass = (num) => {
    switch(num) {
      case '01': return 'bg-blue-500';
      case '02': return 'bg-yellow-500';
      case '03': return 'bg-cyan-400';
      case '04': return 'bg-amber-400';
      default: return 'bg-blue-500';
    }
  };

  const getDecorClass = (num, isSecondary = false) => {
    if (isSecondary) {
      switch(num) {
        case '01': return 'bg-yellow-400';
        case '02': return 'bg-blue-400';
        case '03': return 'bg-amber-200';
        case '04': return 'bg-cyan-200';
        default: return 'bg-yellow-400';
      }
    }
    switch(num) {
      case '01': return 'bg-blue-400';
      case '02': return 'bg-yellow-400';
      case '03': return 'bg-cyan-200';
      case '04': return 'bg-amber-200';
      default: return 'bg-blue-400';
    }
  };

  return (
    <div
      className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 cursor-pointer group relative overflow-hidden
        ${isHovered ? 'shadow-2xl scale-105 -translate-y-4' : 'hover:shadow-xl hover:scale-102 hover:-translate-y-1'}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-500
        ${isHovered ? 'opacity-10' : 'group-hover:opacity-5'}
        bg-gradient-to-br ${getBgClass(number)}`}></div>
      
      {/* Content */}
      <div className="relative z-10">
        <AnimatedIcon number={number} isHovered={isHovered} />
        
        <div className="text-center mb-6">
          <div className={`inline-block h-1 rounded-full transition-all duration-500
            ${isHovered ? 'w-24 scale-110' : 'w-16 group-hover:w-20'}
            ${getAccentClass(number)}`}>
          </div>
        </div>
        
        <h3 className={`text-2xl font-bold text-gray-800 mb-4 text-center transition-all duration-300
          ${isHovered ? 'text-blue-600 scale-105' : 'group-hover:text-blue-600'}`}>
          {title}
        </h3>
        
        <p className={`text-gray-600 leading-relaxed text-center transition-all duration-300
          ${isHovered ? 'text-gray-700' : 'group-hover:text-gray-700'}`}>
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className={`absolute top-4 right-4 w-8 h-8 rounded-full transition-all duration-500
        ${isHovered ? 'scale-150 opacity-30' : 'scale-100 opacity-20'}
        ${getDecorClass(number)}`}>
      </div>
      
      <div className={`absolute bottom-4 left-4 w-6 h-6 rounded-full transition-all duration-700
        ${isHovered ? 'scale-125 opacity-40' : 'scale-100 opacity-15'}
        ${getDecorClass(number, true)}`}>
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by getting to know your brand, goals, and audience deeply through a detailed consultation.'
    },
    {
      number: '02',
      title: 'Strategy Crafting',
      description: 'Using market insights and data, we design a customized plan tailored to your unique needs.'
    },
    {
      number: '03',
      title: 'Execution',
      description: 'We bring the plan to life, carefully aligning every action with your business objectives.'
    },
    {
      number: '04',
      title: 'Review & Improve',
      description: 'We track performance, collect feedback, and fine-tune the strategy for continuous growth.'
    }
  ];

  const getDotClass = (index) => {
    switch(index) {
      case 0: return 'bg-blue-500';
      case 1: return 'bg-yellow-500';
      case 2: return 'bg-cyan-400';
      case 3: return 'bg-amber-400';
      default: return 'bg-blue-500';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-yellow-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-100 rounded-full opacity-40 animate-pulse" 
             style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-100 rounded-full opacity-20 animate-ping" 
             style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-amber-100 rounded-full opacity-25 animate-spin" 
             style={{animationDelay: '1s', animationDuration: '8s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            HOW IT{' '}
            <span className="bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(to right, #287C96, #F59E0B)'
  }}>
              WORKS
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            How We Turn Ideas into Results
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 150}ms`}}>
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
                isHovered={hoveredStep === index}
                onHover={() => setHoveredStep(index)}
                onLeave={() => setHoveredStep(null)}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Process Flow Visualization */}
        <div className="flex justify-center items-center space-x-4 mb-16">
          {[0, 1, 2, 3].map((index) => (
            <React.Fragment key={index}>
              <div 
                className={`w-5 h-5 rounded-full transition-all duration-500 cursor-pointer
                  ${hoveredStep === index ? 'scale-150 shadow-lg animate-pulse' : 'scale-100 hover:scale-125'}
                  ${getDotClass(index)}`}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}>
              </div>
              {index < 3 && (
                <div className={`h-px w-16 transition-all duration-500 relative overflow-hidden
                  ${hoveredStep === index || hoveredStep === index + 1 ? 'bg-blue-400' : 'bg-gray-300'}`}>
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-yellow-500 transform transition-transform duration-1000
                    ${hoveredStep === index || hoveredStep === index + 1 ? 'translate-x-0' : '-translate-x-full'}`}></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <a 
            href="/contact" 
            className="relative inline-block bg-gradient-to-r from-blue-500 to-yellow-500 text-white px-12 py-5 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform group overflow-hidden"
          >
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
}