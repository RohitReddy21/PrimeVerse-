import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, image, link, delay }) => {
  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
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
          duration: 0.4,
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
      {/* Animated background gradient overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(234, 179, 8, 0.1))",
            "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(234, 179, 8, 0.05))",
            "linear-gradient(225deg, rgba(59, 130, 246, 0.05), rgba(234, 179, 8, 0.15))",
            "linear-gradient(315deg, rgba(59, 130, 246, 0.1), rgba(234, 179, 8, 0.1))"
          ],
          transition: {
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      />
      
      {/* Animated border glow effect */}
      <motion.div 
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-yellow-500 opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500"
        animate={{
          rotate: [0, 180, 360],
          transition: {
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }
        }}
        whileHover={{ 
          opacity: 0.4,
          scale: 1.03,
          blur: "8px"
        }}
      />
      
      {/* Floating particles effect */}
      <motion.div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
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
            transition: { duration: 0.5 }
          }}
        />
        
        {/* Animated overlay with ripple effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100"
          whileHover={{
            background: [
              "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
              "radial-gradient(circle at center, rgba(59,130,246,0.3), transparent)",
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
            transition: { duration: 0.6 }
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
            className="w-6 h-6 text-blue-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            whileHover={{ 
              rotate: 45,
              scale: 1.2,
              color: "#eab308"
            }}
            transition={{ duration: 0.3 }}
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
          className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300"
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
            color: "#2563eb",
            transition: { duration: 0.2 }
          }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
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
          className="mt-6 flex items-center text-blue-500 font-semibold group-hover:text-yellow-500 cursor-pointer"
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
            transition: { duration: 0.3 }
          }}
        >
          <motion.span 
            className="mr-2"
            animate={{
              color: ["#3b82f6", "#eab308", "#3b82f6"],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
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
              transition: { duration: 0.4 }
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </motion.svg>
        </motion.div>
      </motion.div>
      
      {/* Animated bottom accent line with wave effect */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-yellow-500"
        initial={{ width: "0%", scaleY: 1 }}
        whileInView={{ 
          width: "100%",
          transition: { delay: delay * 0.1 + 0.8, duration: 1.2, ease: "easeOut" }
        }}
        whileHover={{ 
          height: 4,
          scaleY: 2,
          background: "linear-gradient(90deg, #3b82f6, #eab308, #3b82f6)",
          transition: { duration: 0.4 }
        }}
        animate={{
          background: [
            "linear-gradient(90deg, #3b82f6, #eab308)",
            "linear-gradient(90deg, #eab308, #3b82f6)",
            "linear-gradient(90deg, #3b82f6, #eab308)"
          ],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      />
    </motion.div>
  );
};


export default ServiceCard;