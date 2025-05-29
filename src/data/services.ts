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
    id: 'web-design',
    title: 'Web Design & Development',
    icon: '🎨',
    image: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?uid=R191946801&ga=GA1.1.1304083209.1747895911&semt=ais_hybrid&w=740',
    imageAlt: 'Modern web design workspace',
    shortDescription: 'Beautiful, functional websites that engage visitors and drive conversions.',
    fullDescription: 'Our web development team creates custom websites that are not only visually stunning but also highly functional and optimized for performance. We focus on creating user-friendly experiences that engage visitors and drive conversions.',
    benefits: [
      'Custom Website Design: Tailored, brand-centric designs to reflect your unique identity.',
      'Responsive & Mobile-Friendly Websites: Optimized for seamless performance across all devices.',
      'E-Commerce Solutions: Integrated online stores with secure payment gateways.',
      'UI/UX Optimization: Enhanced user interfaces for improved engagement and navigation.',
      'SEO-Optimized Websites: Built to achieve higher rankings on search engines.',
      ' Landing Pages & Funnels: Designed to maximize lead generation and conversions. '
    ],
    features: [
      'Custom Design',
      'Mobile Responsive',
      'SEO Ready',
      'Fast Loading',
      'CMS Integration',
      'Analytics Setup'
    ],
    link: '/services/web-development',
    pricing: {
      basic: { price: '$2,999', features: ['5 Pages', 'Responsive Design', 'Basic SEO', '3 Revisions'] },
      standard: { price: '$4,999', features: ['10 Pages', 'Custom Design', 'Advanced SEO', 'CMS Integration', '5 Revisions'] },
      premium: { price: '$7,999', features: ['Unlimited Pages', 'Custom Functionality', 'E-commerce Ready', 'Priority Support', 'Unlimited Revisions'] }
    }
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: '📱',
    image: 'https://img.freepik.com/free-photo/marketing-ideas-share-research-planning-concept_53876-127431.jpg?uid=R191946801&ga=GA1.1.1304083209.1747895911&semt=ais_hybrid&w=740',
    imageAlt: 'Digital marketing analytics dashboard',
    shortDescription: 'Strategic campaigns that reach your target audience and drive results.',
    fullDescription: 'Our digital marketing strategies are designed to help you reach your target audience and achieve your business goals. We develop customized campaigns across multiple channels to maximize your online presence and drive measurable results.',
    benefits: [
      'Search Engine Optimization (SEO): Strategies to boost website visibility and organic traffic.',
      'Social Media Marketing (SMM): Targeted campaigns on platforms like Instagram, Facebook, LinkedIn, and Twitter.',
      'Pay-Per-Click Advertising (PPC): ROI-focused ads on Google and social media platforms.',
      'Content Marketing: Creation of high-quality blogs, articles, and social media content to establish authority.',
      'Email Marketing: Personalized campaigns aimed at nurturing leads and driving sales.',
      'Google Analytics: is a free tool that tracks and analyzes website traffic, user behavior, and conversions in real time. It helps businesses make data-driven decisions to improve performance and optimize marketing strategies.'
    ],
    features: [
      'Social Media Marketing',
      'PPC Advertising',
      'Email Marketing',
      'Content Marketing',
      'Influencer Partnerships',
      'Performance Analytics'
    ],
    link: '/services/digital-marketing',
    pricing: {
      basic: { price: '$1,499/mo', features: ['Social Media Management', 'Basic Analytics', 'Content Creation', 'Monthly Reports'] },
      standard: { price: '$2,999/mo', features: ['Multi-Platform Management', 'PPC Campaigns', 'Email Marketing', 'Bi-weekly Reports'] },
      premium: { price: '$4,999/mo', features: ['Full Digital Strategy', 'Advanced Analytics', 'Influencer Outreach', 'Weekly Reports', 'Dedicated Manager'] }
    }
  },
  {
    id: 'it-recruitment',
    title: 'IT RECRUITMENT',
    icon: '🔍',
    image: 'https://img.freepik.com/free-photo/woman-selecting-pictures-people_1134-466.jpg?uid=R191946801&ga=GA1.1.1304083209.1747895911&semt=ais_hybrid&w=740',
    imageAlt: 'SEO analytics and optimization tools',
    shortDescription: 'Improve your search rankings and drive organic traffic to your website.',
    fullDescription: 'Our SEO experts will help you improve your search engine rankings and drive more organic traffic to your website. We use proven techniques and best practices to optimize your content and build your online authority.',
    benefits: [
      'Talent Acquisition: We help you find skilled IT professionals that match your technical and cultural requirements.',
      'End-to-End Hiring Support: From job posting to final on boarding, we manage the complete recruitment life cycle.',
      'Specialized Tech Hiring: Expertise in recruiting for software development,data science, cybersecurity, cloud computing, and more.',
      ' Contract & Full-Time Roles: We provide flexible hiring models for both permanent and contract-based positions.',
      'Pre-Screened Candidates: Every candidate is thoroughly vetted through technical assessments and interviews.',
      'Fast Turnaround Time: Swift recruitment process to ensure minimal downtime for your projects.'
    ],
    features: [
      'Keyword Research',
      'On-Page Optimization',
      'Technical SEO',
      'Link Building',
      'Local SEO',
      'Performance Monitoring'
    ],
    link: '/services/it-recruitment',
    pricing: {
      basic: { price: '$999/mo', features: ['Keyword Research', 'On-Page SEO', 'Monthly Reports', 'Basic Link Building'] },
      standard: { price: '$1,999/mo', features: ['Technical SEO Audit', 'Content Optimization', 'Local SEO', 'Bi-weekly Reports'] },
      premium: { price: '$3,499/mo', features: ['Comprehensive SEO Strategy', 'Advanced Link Building', 'Competitor Analysis', 'Weekly Reports', 'Priority Support'] }
    }
  },
  {
    id: 'crm-development',
    title: 'CRM DEVELOPMENT',
    icon: '✨',
    image: 'https://img.freepik.com/free-photo/customer-relationship-management-concept_23-2150038399.jpg?uid=R191946801&ga=GA1.1.1304083209.1747895911&semt=ais_hybrid&w=740',
    imageAlt: 'Creative brand identity design process',
    shortDescription: ' We specialize in developing custom Customer Relationship Management (CRM) systems designed for your unique business operation.',
    fullDescription: 'We specialize in developing custom Customer Relationship Management (CRM) systems designed for your unique business operation. Our CRM solutions are designed to streamline operations and enhance team productivity, and deepen customer engagement through automation, analytics, and seamless integration.',
    benefits: [
      'Contact Management: A centralized, organized, and searchable database of all your customers, and the required operational data like accounts, spending, invoices, contracts etc.',
      'Workflow Automation: streamlines repetitive tasks and processes using technology, improving efficiency and reducing human error.',
      'Reporting & Analytics: Track performance, gain insights, and make data-driven decisions with real-time dashboards and reports.',
      'Third-Party Integrations: Seamlessly integrate with your existing tools and platforms for a unified ecosystem.',
    ],
    features: [
      'Logo Design',
      'Brand Guidelines',
      'Color Palette',
      'Typography Selection',
      'Business Cards',
      'Marketing Materials'
    ],
    link: '/services/brand-identity',
    pricing: {
      basic: { price: '$1,499', features: ['Logo Design', '3 Concepts', 'Basic Brand Colors', '5 Revisions'] },
      standard: { price: '$2,999', features: ['Complete Brand Identity', 'Brand Guidelines', 'Business Card Design', 'Unlimited Revisions'] },
      premium: { price: '$4,999', features: ['Full Brand Package', 'Marketing Materials', 'Social Media Kit', 'Brand Strategy', 'Ongoing Support'] }
    }
  },
  {
    id: 'app-development',
    title: 'APP DEVELOPMENT',
    icon: '📱',
    image: 'https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104516.jpg?uid=R191946801&ga=GA1.1.1304083209.1747895911&semt=ais_hybrid&w=740',
    imageAlt: 'Social media content creation and management',
    shortDescription: 'Engage your audience and build a strong social media presence with our strategic content creation and community management services.',
    fullDescription: 'Build a thriving social media community with our comprehensive management services. We create engaging content, manage your social presence, and help you connect with your audience across all major platforms.',
    benefits: [
      'Custom Mobile App Solutions : Tailored apps designed to meet your business goals and user needs.',
      ' iOS & Android Development: Native and cross-platform apps built for maximum performance on all major devices.',
      'UI/UX Design : Intuitive, user-centric designs focused on seamless navigation and engagement.',
      ' Backend Integration : Secure and scalable backend systems to power your app’s functionality.',
      'App Testing & QA : Rigorous testing to ensure bug-free, high-performance experiences across devices.',
      ' Deployment & Support : End-to-end support from app store submission to ongoing updates and maintenance.'
    ],
    features: [
      'Content Creation',
      'Post Scheduling',
      'Community Management',
      'Social Analytics',
      'Hashtag Strategy',
      'Influencer Collaboration'
    ],
    link: '/services/app-development',
    pricing: {
      basic: { price: '$799/mo', features: ['2 Platforms', '10 Posts/Month', 'Basic Analytics', 'Monthly Reports'] },
      standard: { price: '$1,499/mo', features: ['4 Platforms', '20 Posts/Month', 'Community Management', 'Bi-weekly Reports'] },
      premium: { price: '$2,499/mo', features: ['All Major Platforms', 'Daily Posting', 'Advanced Analytics', 'Paid Ad Management', 'Weekly Reports'] }
    }
  },
  // {
  //   id: 'ecommerce',
  //   title: 'E-commerce Solutions',
  //   icon: '🛒',
  //   image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   imageAlt: 'Modern e-commerce website interface',
  //   shortDescription: 'Launch and optimize your online store with our comprehensive e-commerce development and marketing solutions designed to maximize sales.',
  //   fullDescription: 'Transform your business with a powerful e-commerce platform that drives sales and delivers exceptional customer experiences. We build scalable online stores with advanced features and ongoing optimization.',
  //   benefits: [
  //     'Custom e-commerce platform',
  //     'Secure payment processing',
  //     'Inventory management system',
  //     'Mobile-optimized shopping experience',
  //     'SEO-friendly product pages',
  //     'Advanced analytics and reporting'
  //   ],
  //   features: [
  //     'Custom Store Development',
  //     'Payment Gateway Integration',
  //     'Inventory Management',
  //     'Order Processing',
  //     'Customer Accounts',
  //     'Analytics Dashboard'
  //   ],
  //   link: '/services/ecommerce',
  //   pricing: {
  //     basic: { price: '$4,999', features: ['Basic Store Setup', '50 Products', 'Payment Integration', 'Mobile Responsive'] },
  //     standard: { price: '$7,999', features: ['Custom Design', '500 Products', 'Advanced Features', 'SEO Optimization'] },
  //     premium: { price: '$12,999', features: ['Enterprise Solution', 'Unlimited Products', 'Custom Integrations', 'Ongoing Support'] }
  //   }
  // }
];