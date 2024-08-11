'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Clock, Car, Sparkles, Brush, LucideIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  duration: string;
  price: string;
}

interface ServiceCardProps extends Service {
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, duration, price, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl border border-border"
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="bg-primary p-3 rounded-full mr-4">
            <Icon className="text-primary-foreground" size={24} />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <AnimatePresence initial={false}>
          {isExpanded ? (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-muted-foreground mb-4"
            >
              {description}
            </motion.p>
          ) : (
            <motion.p
              initial={{ opacity: 1, height: 'auto' }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-muted-foreground mb-4 line-clamp-2"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
        <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{duration}</span>
          </div>
          <div className="font-semibold text-primary">{price}</div>
        </div>
        <motion.button
          className="mt-4 flex items-center text-primary font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="mr-1">{isExpanded ? 'Show less' : 'Learn more'}</span>
          <ChevronRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Express Wash",
      description: "Quick and efficient cleaning for your car, perfect for a regular maintenance wash. Our express service ensures a spotless exterior in just 15 minutes, ideal for busy professionals on the go.",
      icon: Car,
      duration: "15 min",
      price: "$15"
    },
    {
      title: "Full Service Wash",
      description: "Comprehensive cleaning inside and out, leaving your car spotless and refreshed. This service includes exterior wash, interior vacuuming, dashboard cleaning, and window polishing for a complete refresh.",
      icon: Sparkles,
      duration: "45 min",
      price: "$30"
    },
    {
      title: "Detail Services",
      description: "Meticulous attention to every detail, restoring your car to showroom-quality condition. Our detailing service covers deep cleaning, paint correction, waxing, and interior detailing for a truly immaculate finish.",
      icon: Brush,
      duration: "2-3 hours",
      price: "From $100"
    },
    {
      title: "Interior Deep Clean",
      description: "Thorough interior cleaning, eliminating odors and leaving your car fresh and pristine. We use premium products to clean and condition all surfaces, including hard-to-reach areas, ensuring a hygienic and comfortable cabin.",
      icon: Sparkles,
      duration: "1-2 hours",
      price: "$60"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-4 text-foreground text-teal-700"
        >
          Our Services
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Choose from our range of professional car care services designed to keep your vehicle looking its best.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;