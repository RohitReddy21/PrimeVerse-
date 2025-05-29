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
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Modern web design workspace',
    shortDescription: 'Create stunning, responsive websites that captivate your audience and drive conversions with our cutting-edge design and development expertise.',
    fullDescription: 'Transform your digital presence with our comprehensive web design and development services. We craft visually stunning, user-friendly websites that not only look amazing but also perform exceptionally across all devices and platforms.',
    benefits: [
      'Responsive design that works on all devices',
      'SEO-optimized structure for better rankings',
      'Fast loading speeds and optimal performance',
      'User-friendly content management system',
      'Custom functionality tailored to your needs',
      'Ongoing maintenance and support'
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
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Digital marketing analytics dashboard',
    shortDescription: 'Boost your online visibility and reach your target audience with our comprehensive digital marketing strategies and data-driven campaigns.',
    fullDescription: 'Accelerate your business growth with our comprehensive digital marketing solutions. From social media management to PPC advertising, we create data-driven campaigns that deliver measurable results and maximize your ROI.',
    benefits: [
      'Increased brand awareness and visibility',
      'Targeted audience engagement',
      'Higher conversion rates and sales',
      'Comprehensive analytics and reporting',
      'Multi-channel marketing approach',
      'Cost-effective advertising solutions'
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
    id: 'seo-optimization',
    title: 'SEO Optimization',
    icon: '🔍',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'SEO analytics and optimization tools',
    shortDescription: 'Improve your search engine rankings and drive organic traffic with our proven SEO strategies and technical optimization techniques.',
    fullDescription: 'Dominate search engine results with our advanced SEO optimization services. We use proven strategies and cutting-edge techniques to improve your website\'s visibility, drive organic traffic, and increase your online presence.',
    benefits: [
      'Higher search engine rankings',
      'Increased organic traffic',
      'Better user experience',
      'Improved website authority',
      'Long-term sustainable results',
      'Competitive advantage'
    ],
    features: [
      'Keyword Research',
      'On-Page Optimization',
      'Technical SEO',
      'Link Building',
      'Local SEO',
      'Performance Monitoring'
    ],
    link: '/services/seo-optimization',
    pricing: {
      basic: { price: '$999/mo', features: ['Keyword Research', 'On-Page SEO', 'Monthly Reports', 'Basic Link Building'] },
      standard: { price: '$1,999/mo', features: ['Technical SEO Audit', 'Content Optimization', 'Local SEO', 'Bi-weekly Reports'] },
      premium: { price: '$3,499/mo', features: ['Comprehensive SEO Strategy', 'Advanced Link Building', 'Competitor Analysis', 'Weekly Reports', 'Priority Support'] }
    }
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity & Logo Design',
    icon: '✨',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Creative brand identity design process',
    shortDescription: 'Build a memorable brand identity that resonates with your audience through our creative logo design and comprehensive branding solutions.',
    fullDescription: 'Create a powerful brand identity that sets you apart from the competition. Our expert designers craft memorable logos and comprehensive brand guidelines that reflect your values and resonate with your target audience.',
    benefits: [
      'Memorable and unique brand identity',
      'Professional logo design',
      'Comprehensive brand guidelines',
      'Consistent visual identity',
      'Enhanced brand recognition',
      'Increased customer trust'
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
    id: 'social-media',
    title: 'Social Media Management',
    icon: '📢',
    image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Social media content creation and management',
    shortDescription: 'Engage your audience and build a strong social media presence with our strategic content creation and community management services.',
    fullDescription: 'Build a thriving social media community with our comprehensive management services. We create engaging content, manage your social presence, and help you connect with your audience across all major platforms.',
    benefits: [
      'Consistent brand presence across platforms',
      'Engaging content that drives interaction',
      'Community building and management',
      'Increased brand awareness',
      'Better customer relationships',
      'Data-driven content strategy'
    ],
    features: [
      'Content Creation',
      'Post Scheduling',
      'Community Management',
      'Social Analytics',
      'Hashtag Strategy',
      'Influencer Collaboration'
    ],
    link: '/services/social-media',
    pricing: {
      basic: { price: '$799/mo', features: ['2 Platforms', '10 Posts/Month', 'Basic Analytics', 'Monthly Reports'] },
      standard: { price: '$1,499/mo', features: ['4 Platforms', '20 Posts/Month', 'Community Management', 'Bi-weekly Reports'] },
      premium: { price: '$2,499/mo', features: ['All Major Platforms', 'Daily Posting', 'Advanced Analytics', 'Paid Ad Management', 'Weekly Reports'] }
    }
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    icon: '🛒',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageAlt: 'Modern e-commerce website interface',
    shortDescription: 'Launch and optimize your online store with our comprehensive e-commerce development and marketing solutions designed to maximize sales.',
    fullDescription: 'Transform your business with a powerful e-commerce platform that drives sales and delivers exceptional customer experiences. We build scalable online stores with advanced features and ongoing optimization.',
    benefits: [
      'Custom e-commerce platform',
      'Secure payment processing',
      'Inventory management system',
      'Mobile-optimized shopping experience',
      'SEO-friendly product pages',
      'Advanced analytics and reporting'
    ],
    features: [
      'Custom Store Development',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Processing',
      'Customer Accounts',
      'Analytics Dashboard'
    ],
    link: '/services/ecommerce',
    pricing: {
      basic: { price: '$4,999', features: ['Basic Store Setup', '50 Products', 'Payment Integration', 'Mobile Responsive'] },
      standard: { price: '$7,999', features: ['Custom Design', '500 Products', 'Advanced Features', 'SEO Optimization'] },
      premium: { price: '$12,999', features: ['Enterprise Solution', 'Unlimited Products', 'Custom Integrations', 'Ongoing Support'] }
    }
  }
];