import React, { useState, useEffect } from 'react';
import {Handshake,
  Lightbulb,
  ShieldCheck,
  BadgeCheck } from 'lucide-react';

// Animated Counter Component
function AnimatedCounter({ target, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count}{suffix}</span>;
}

// Enhanced Value Card Component
function ValueCard({ title, description, index, lucideIcon: LucideIcon }) {
  const [isHovered, setIsHovered] = useState(false);

  const getCardColor = (idx) => {
    const colors = [
      'from-cyan-500 to-teal-400',
      'from-orange-500 to-amber-400',
      'from-teal-400 to-cyan-300',
      'from-amber-400 to-orange-300',
    ];
    return colors[idx % colors.length];
  };

  return (
    <div
      className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 cursor-pointer group relative overflow-hidden
        ${isHovered ? 'shadow-2xl scale-105 -translate-y-4' : 'hover:shadow-xl hover:scale-102 hover:-translate-y-2'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.05) translateY(-16px)' : 'scale(1) translateY(0)',
        transition: 'all 0.5s ease'
      }}
    >
      {/* Animated background gradient */}
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-500
        ${isHovered ? 'opacity-10' : 'group-hover:opacity-5'}
        bg-gradient-to-br ${getCardColor(index)}`}></div>
      
      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-white font-bold text-2xl
        bg-gradient-to-br ${getCardColor(index)} transition-all duration-500
        ${isHovered ? 'scale-110 rotate-12' : 'group-hover:scale-105 group-hover:rotate-6'}`}>
        {LucideIcon && <LucideIcon size={28} />}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className={`text-xl font-bold text-gray-800 mb-4 transition-all duration-300
          ${isHovered ? 'text-blue-600 scale-105' : 'group-hover:text-blue-600'}`}>
          {title}
        </h3>
        
        <p className={`text-gray-600 leading-relaxed transition-all duration-300
          ${isHovered ? 'text-gray-700' : 'group-hover:text-gray-700'}`}>
          {description}
        </p>
      </div>

      {/* Decorative element */}
      <div className={`absolute top-4 right-4 w-6 h-6 rounded-full transition-all duration-500
        ${isHovered ? 'scale-150 opacity-30' : 'scale-100 opacity-20'}
        bg-gradient-to-br ${getCardColor(index)}`}>
      </div>
    </div>
  );
}

// Enhanced Team Card Component
function TeamCard({ member, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 group
        ${isHovered ? 'shadow-2xl scale-105 -translate-y-4' : 'hover:shadow-xl'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.05) translateY(-16px)' : 'scale(1) translateY(0)',
        transition: 'all 0.5s ease'
      }}
    >
      <div className="h-64 overflow-hidden relative">
        <img 
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.5s ease'
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500
          ${isHovered ? 'opacity-100' : ''}`}></div>
      </div>
      <div className="p-6 text-center">
        <h3 
          className="text-xl font-semibold mb-1 transition-colors duration-300"
          style={{
            color: isHovered ? '#3B82F6' : '#1F2937',
            transition: 'color 0.3s ease'
          }}
        >
          {member.name}
        </h3>
        <p className="text-cyan-500 mb-4 font-medium">{member.role}</p>
        <p className="text-gray-600 leading-relaxed">{member.description}</p>
      </div>
    </div>
  );
}

// Section Component with enhanced animations
function Section({ children, className = '', bgPattern = false }) {
  return (
    <section className={`relative py-20 ${className}`}>
      {bgPattern && (
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-10 left-10 w-24 h-24 bg-cyan-100 rounded-full opacity-20 animate-pulse"
            style={{
              animation: 'pulse 4s ease-in-out infinite'
            }}
          />
          <div 
            className="absolute bottom-20 right-20 w-32 h-32 bg-orange-100 rounded-full opacity-15 animate-pulse"
            style={{
              animation: 'pulse 5s ease-in-out infinite',
              animationDelay: '1s'
            }}
          />
          <div 
            className="absolute top-1/2 left-1/3 w-16 h-16 bg-cyan-100 rounded-full opacity-25 animate-bounce"
            style={{
              animation: 'bounce 3s ease-in-out infinite',
              animationDelay: '2s'
            }}
          />
        </div>
      )}
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  );
}

const About = () => {
  const coreValues = [
    {
      lucideIcon: Handshake,
      title: 'Client-First',
      description: 'Your goals shape our work. We listen, adapt, and deliver what matters most to your business.',
    },
    {
      lucideIcon: Lightbulb,
      title: 'Innovation',
      description: 'We use fresh ideas and smart tech to create standout digital experiences.',
    },
    {
      lucideIcon: ShieldCheck,
      title: 'Integrity',
      description: 'Honest communication, transparent processes, and trust are at the heart of what we do.',
    },
    {
      lucideIcon: BadgeCheck,
      title: 'Excellence',
      description: 'We don’t settle. Every project is built for quality, performance, and real results.',
    }

  ];

  const teamMembers = [
    {
      name: 'Michael Johnson',
      role: 'Founder & CEO',
      description: 'Digital strategy expert with over 15 years of experience in the industry.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Sarah Williams',
      role: 'Creative Director',
      description: 'Award-winning designer with a passion for creating impactful digital experiences.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'David Chen',
      role: 'Technical Director',
      description: 'Full-stack developer with expertise in building scalable web applications.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      description: 'Digital marketing strategist with a track record of successful campaigns.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
        {/* Hero Section */}
        <Section className="pt-32 pb-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white" bgPattern>
          <div className="max-w-3xl">
            <span className="text-cyan-300 font-semibold mb-2 inline-block">
              ABOUT US
            </span>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              About{' '} <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent text-6xl md:text-5xl">
                Prime Verse
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 opacity-90 max-w-4xl leading-relaxed">
              We're Digital Growth Experts dedicated to turning visions into impactful brands
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-amber-300 rounded-full mb-12" />
            
            {/* Stats with enhanced animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2 text-orange-300">
                  <AnimatedCounter target={100} suffix="+" />
                </div>
                <p className="text-lg opacity-80">Projects Completed</p>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2 text-orange-300">
                  <AnimatedCounter target={50} suffix="+" />
                </div>
                <p className="text-lg opacity-80">Happy Clients</p>
              </div>
              <div className="text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2 text-orange-300">
                  <AnimatedCounter target={10} suffix="+" />
                </div>
                <p className="text-lg opacity-80">Years Experience</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Our Story Section */}
        <Section bgPattern>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="PrimeVerse Team" 
                className="w-full h-auto"
              />
            </div>
            
            <div>
              <span className="text-cyan-500 font-semibold mb-2 inline-block">Our Approach
              </span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Built on Strategy {' '}
                <span className="bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(to right, #287C96, #F59E0B)',
  }}>
                  and Driven by Results
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#287C96] to-yellow-500 rounded-full mb-8" />
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              At Primeverse, we combine smart strategy, creative thinking, and the latest tech to craft
digital solutions that work. Every project is collaborative, transparent, and focused on
helping your business grow the right way.

              </p>
              <span className="text-cyan-500 font-semibold mb-2 inline-block"> Our Mission
              </span>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              To empower businesses with innovative digital solutions in marketing, web development,
              App Development and IT recruitment—driving measurable growth and meaningful impact.

              </p>
              <span className="text-cyan-500 font-semibold mb-2 inline-block">Our Vision
              </span>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              To be a trusted digital partner, shaping the future by building smarter brands, stronger
platforms, and standout talent worldwide.

              </p>
              <div className="space-y-4">
              <h2 className="text-5xl md:text-3xl font-bold text-gray-800 mb-4">
              Who  {' '}
                <span className="bg-gradient-to-r from-cyan-500 to-orange-500 bg-clip-text text-transparent">
                   We Are
                </span>
              </h2>
              <span className="text-cyan-500 font-semibold mb-2 inline-block">Creative Minds. Tech Experts. Growth Partners
              </span>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Primeverse is a digital solutions company helping brands grow through smart web
development, impactful marketing, and strategic IT recruitment. We're a passionate team
that blends innovation with execution focused on delivering real value, not just services

              </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Values Section */}
        <Section className="bg-gradient-to-br from-gray-50 to-cyan-50" bgPattern>
          <div className="text-center mb-16">
            <span className="text-cyan-500 font-semibold mb-2 inline-block">OUR VALUES</span>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              What{' '}
              <span className="bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(to right, #287C96, #F59E0B)',
  }}>
                Drives Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <ValueCard
                key={index}
                lucideIcon={value.lucideIcon}
                title={value.title}
                description={value.description}
                index={index}
              />
            ))}
          </div>
        </Section>

        {/* Team Section */}
        {/* <Section bgPattern>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-500 font-semibold mb-2 inline-block">OUR TEAM</span>
            <h2 className="text-5xl font-bold text-gray-800 mb-8">
              Meet The{' '}
              <span className="bg-clip-text text-transparent"
  style={{
    backgroundImage: 'linear-gradient(to right, #287C96, #F59E0B)',
  }}>
                Experts
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Our talented team of professionals is dedicated to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </Section> */}

        {/* CTA Section */}
        <Section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Grow Smarter with{' '}
              <span className="text-orange-400">Primeverse</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-300 mx-auto rounded-full mb-8" />
            <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
              Have a project in mind? Let's talk and turn your vision into a digital success story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="hover:scale-105 transition-transform duration-300">
                <a 
                  href="/contact"
                  className="relative inline-block bg-gradient-to-r from-orange-500 to-amber-400 text-gray-900 px-12 py-5 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform group overflow-hidden"
                >
                  <span className="relative z-10">Get in Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
              </div>
              
              {/* <div className="hover:scale-105 transition-transform duration-300">
                <a 
                  href="/projects"
                  className="relative inline-block border-2 border-white text-white px-12 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-500 transform"
                >
                  View Our Work
                </a>
              </div> */}
            </div>
          </div>
        </Section>
      </div>
    // </div>
  );
};

export default About;