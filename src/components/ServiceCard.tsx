import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, image, link, delay }) => {
  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
      initial={{ opacity: 0, y: 80, scale: 0.8, rotateX: 25 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: delay * 0.15,
        type: "spring",
        stiffness: 120,
        damping: 12
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 8,
        rotateX: 5,
        z: 50,
        transition: { 
          duration: 0.2,
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }}
      whileTap={{ scale: 0.95, rotateY: 0, rotateX: 0 }}
      animate={{
        y: [0, -5, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: delay * 0.2
        }
      }}
    >

      
      {/* Floating particles effect */}
      <motion.div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gray-300/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
      
      {/* Image container with enhanced animations */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{
            scale: [1, 1.02, 1],
            transition: {
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
          whileHover={{ 
            scale: 1.12,
            filter: "brightness(1.2) saturate(1.3) contrast(1.1)",
            transition: { duration: 0.3 }
          }}
        />
        
        {/* Animated overlay with ripple effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100"
          whileHover={{
            background: [
              "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
              "radial-gradient(circle at center, rgba(128,128,128,0.3), transparent)",
              "linear-gradient(to top, rgba(0,0,0,0.4), transparent)"
            ],
            transition: { duration: 2, repeat: Infinity }
          }}
        />
        
        {/* Floating action icon with complex animation */}
        <motion.div 
          className="absolute top-4 right-4 w-12 h-12 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl"
          initial={{ opacity: 0, scale: 0, rotate: -360, y: -20 }}
          whileInView={{ 
            opacity: 1, 
            scale: 1, 
            rotate: 0, 
            y: 0,
            transition: { 
              delay: delay * 0.1 + 0.6,
              duration: 0.8,
              type: "spring",
              stiffness: 200 
            }
          }}
          whileHover={{ 
            scale: 1.2,
            rotate: 360,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
            transition: { duration: 0.3 }
          }}
          animate={{
            y: [0, -3, 0],
            rotate: [0, 5, -5, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay * 0.3
            }
          }}
        >
          <motion.svg 
            className="w-6 h-6 text-gray-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            whileHover={{ 
              rotate: 45,
              scale: 1.2,
              color: "#374151"
            }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </motion.svg>
        </motion.div>
      </div>
      
      {/* Content section with advanced staggered animations */}
      <motion.div 
        className="p-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay * 0.1 + 0.4, duration: 0.6 }}
      >
        <motion.h3 
          className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-200"
          initial={{ opacity: 0, x: -30, rotateX: 90 }}
          whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
          transition={{ 
            delay: delay * 0.1 + 0.3, 
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{
            scale: 1.05,
            color: "#111827",
            transition: { duration: 0.15 }
          }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-200"
          initial={{ opacity: 0, x: -30, rotateX: 90 }}
          whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
          transition={{ 
            delay: delay * 0.1 + 0.4, 
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
        >
          {description}
        </motion.p>
        
        {/* Animated CTA button with complex hover effects */}
        <motion.div 
          className="mt-6 flex items-center text-gray-600 font-semibold group-hover:text-gray-800 cursor-pointer"
          initial={{ opacity: 0, y: 30, rotateX: 90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ 
            delay: delay * 0.1 + 0.5, 
            duration: 0.6,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{
            scale: 1.05,
            x: 10,
            transition: { duration: 0.2 }
          }}
        >
          <motion.span 
            className="mr-2"
          >
            Learn More
          </motion.span>
          <motion.svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ 
              x: [0, 5, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ 
              x: 12,
              rotate: 360,
              scale: 1.2,
              transition: { duration: 0.25 }
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </motion.div>
      </motion.div>
      

    </motion.div>
  );
};


export default ServiceCard;