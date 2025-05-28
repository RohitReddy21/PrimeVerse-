import { Globe, Search, Users, Smartphone, Settings } from 'lucide-react';
import React from 'react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  icon: React.ReactNode;
  image: string;
  imageAlt: string;
  link: string;
  benefits: string[];
  features: Array<{
    title: string;
    description: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Design & Development',
    shortDescription: 'Tailored, brand-centric and mobile-responsive websites built to convert.',
    fullDescription: [
      'We create beautiful, responsive, and SEO-optimized websites that reflect your brand and engage users. Whether it is an e-commerce platform or a landing page funnel, we will help you succeed.',
      'Our development process ensures fast-loading, mobile-friendly, and modern design built on the latest web technologies.',
    ],
    // icon: <Globe size={24} className="text-primary-500" />,
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Web development workstation with code on screen',
    link: '/services/web-development',
    benefits: [
      'Seamless mobile and desktop experiences',
      'Optimized for SEO and fast performance',
      'Custom design tailored to your brand',
      'Built for scalability and security',
      'Designed to increase conversions and leads',
    ],
    features: [
      {
        title: 'Custom Website Design',
        description: 'Unique layouts and branding for a truly custom digital experience.',
      },
      {
        title: 'Responsive Development',
        description: 'Optimized websites that look great on any device.',
      },
      {
        title: 'E-Commerce Solutions',
        description: 'Online stores with payment gateways and inventory systems.',
      },
      {
        title: 'UI/UX Optimization',
        description: 'Streamlined user experience for better engagement and lower bounce rate.',
      },
    ],
    faq: [
      {
        question: 'Do you offer SEO with web development?',
        answer: 'Yes, all our websites are built with SEO best practices included.',
      },
      {
        question: 'Can you build a custom e-commerce site?',
        answer: 'Absolutely. We support full-featured e-commerce development with secure payments.',
      },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Get seen, heard, and remembered with data-driven digital marketing.',
    fullDescription: [
      'We help brands build authority and drive traffic through SEO, PPC, social media, and content strategies.',
      'Our campaigns are crafted to deliver high ROI and help you stand out in a competitive digital landscape.',
    ],
    // icon: <Search size={24} className="text-primary-500" />,
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Digital marketing strategy dashboard',
    link: '/services/digital-marketing',
    benefits: [
      'Increased brand visibility',
      'High-converting landing pages and funnels',
      'Audience engagement across social platforms',
      'SEO and PPC that drive real traffic',
      'Data-backed content marketing strategies',
    ],
    features: [
      {
        title: 'Search Engine Optimization',
        description: 'Boost your Google rankings with technical and on-page SEO.',
      },
      {
        title: 'Social Media Campaigns',
        description: 'Build brand awareness on Instagram, LinkedIn, Twitter, and Facebook.',
      },
      {
        title: 'Email Marketing',
        description: 'Drip campaigns and promotions that convert leads into customers.',
      },
      {
        title: 'Content Creation',
        description: 'Blogs, articles, and multimedia tailored for your brand.',
      },
    ],
    faq: [
      {
        question: 'Which platforms do you advertise on?',
        answer: 'Google, Meta (Facebook/Instagram), LinkedIn, and more based on your audience.',
      },
      {
        question: 'Do you create content too?',
        answer: 'Yes, our services include blog writing, social media posts, and branded content.',
      },
    ],
  },
  {
    id: 'it-recruitment',
    title: 'IT Recruitment',
    shortDescription: 'Hire top-tier tech talent with speed, precision, and confidence.',
    fullDescription: [
      'PrimeVerse helps you scale your engineering teams with vetted tech professionals.',
      'We handle the entire hiring lifecycle—from screening to onboarding—for both contract and full-time roles.',
    ],
    // icon: <Users size={24} className="text-primary-500" />,
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Team of IT professionals in a meeting',
    link: '/services/it-recruitment',
    benefits: [
      'Access to pre-screened IT talent',
      'End-to-end recruitment lifecycle support',
      'Flexible models for hiring (contract/full-time)',
      'Specialized hiring in software, data, cloud, and cybersecurity',
      'Fast turnaround to keep your projects on track',
    ],
    features: [
      {
        title: 'Talent Acquisition',
        description: 'Find professionals who meet both technical and cultural needs.',
      },
      {
        title: 'Technical Assessments',
        description: 'Screen candidates with coding challenges and real-world tasks.',
      },
      {
        title: 'Flexible Hiring Models',
        description: 'Hire for short-term projects or permanent roles.',
      },
      {
        title: 'Fast Turnaround',
        description: 'Minimize delays with an agile recruitment process.',
      },
    ],
    faq: [
      {
        question: 'Do you recruit globally or locally?',
        answer: 'We can source candidates locally or internationally depending on your needs.',
      },
      {
        question: 'Can you help with onboarding?',
        answer: 'Yes, we support the entire recruitment lifecycle including onboarding.',
      },
    ],
  },
  {
    id: 'crm-development',
    title: 'CRM Development',
    shortDescription: 'Custom CRM systems to streamline workflows and grow customer engagement.',
    fullDescription: [
      'We design CRM platforms that automate workflows, centralize customer data, and provide actionable insights.',
      'From lead tracking to sales automation and third-party integration—we build CRM systems tailored to your process.',
    ],
    // icon: <Settings size={24} className="text-primary-500" />,
    image: 'https://images.pexels.com/photos/7654579/pexels-photo-7654579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'CRM dashboard showing analytics and customer data',
    link: '/services/crm-development',
    benefits: [
      'Automate customer interactions and internal workflows',
      'Real-time dashboards and performance tracking',
      'Seamless third-party integration',
      'Centralized customer and billing data',
      'Boost productivity across teams',
    ],
    features: [
      {
        title: 'Contact Management',
        description: 'Organize customer records, invoices, contracts, and communications.',
      },
      {
        title: 'Workflow Automation',
        description: 'Eliminate manual tasks and reduce human error.',
      },
      {
        title: 'Analytics & Reports',
        description: 'Gain insights from real-time performance dashboards.',
      },
      {
        title: 'Integration',
        description: 'Connect with your existing tools (email, marketing, support).',
      },
    ],
    faq: [
      {
        question: 'Can the CRM be integrated with our tools?',
        answer: 'Yes, we support third-party integrations including marketing and support platforms.',
      },
      {
        question: 'Is it possible to scale the CRM later?',
        answer: 'Our CRM systems are built to scale as your business grows.',
      },
    ],
  },
  {
    id: 'app-development',
    title: 'App Development',
    shortDescription: 'Custom iOS and Android apps built for performance, usability, and scale.',
    fullDescription: [
      'We build mobile apps that deliver seamless experiences and powerful features across platforms.',
      'From intuitive UI/UX design to robust backend integration, we offer end-to-end mobile solutions.',
    ],
    // icon: <Smartphone size={24} className="text-primary-500" />,
    image: 'https://images.pexels.com/photos/6177612/pexels-photo-6177612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Mobile app development with UI mockups on screen',
    link: '/services/app-development',
    benefits: [
      'Native and cross-platform compatibility',
      'Secure and scalable backend integrations',
      'Smooth user experiences',
      'Comprehensive testing and QA',
      'Support with deployment and maintenance',
    ],
    features: [
      {
        title: 'iOS & Android Development',
        description: 'Native and cross-platform mobile app development.',
      },
      {
        title: 'UI/UX Design',
        description: 'User-friendly interfaces and navigation for optimal engagement.',
      },
      {
        title: 'App Testing & QA',
        description: 'Bug-free experiences through rigorous device testing.',
      },
      {
        title: 'Deployment & Support',
        description: 'App store submission and maintenance covered.',
      },
    ],
    faq: [
      {
        question: 'Can you handle backend development too?',
        answer: 'Yes, we offer full-stack development including API and database integration.',
      },
      {
        question: 'Do you provide app store support?',
        answer: 'Yes, we handle app deployment, updates, and bug fixing post-launch.',
      },
    ],
  },
];