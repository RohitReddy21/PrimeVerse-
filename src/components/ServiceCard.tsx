import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  delay?: number;
}

const ServiceCard: FC<ServiceCardProps> = ({ 
  title, 
  description, 
  image, 
  link, 
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="card group h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-950/50"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-dark-900">{title}</h3>
        <p className="text-dark-600 mb-5 flex-grow">{description}</p>
        <Link 
          to={link}
          className="inline-flex items-center font-medium text-primary-500 hover:text-primary-600 transition-colors mt-auto group"
        >
          Explore Service
          <motion.span
            className="ml-2 inline-block"
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight size={18} />
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;