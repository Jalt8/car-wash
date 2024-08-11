'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Droplets, Sparkles, Shield, ChevronDown, Check } from 'lucide-react';

const services = [
  {
    name: 'Express Wash',
    description: 'Quick and efficient exterior wash to keep your car clean on the go.',
    icon: Car,
    price: '$19.99',
    features: ['Exterior Wash', 'Wheel Cleaning', 'Spot-Free Rinse', 'Air Dry'],
  },
  {
    name: 'Deluxe Shine',
    description: 'Comprehensive wash and wax for a lasting shine and protection.',
    icon: Droplets,
    price: '$39.99',
    features: ['Express Wash +', 'Hand Wax', 'Tire Shine', 'Interior Vacuum'],
  },
  {
    name: 'Ultimate Detail',
    description: 'Full interior and exterior detailing for the perfectionist car owner.',
    icon: Sparkles,
    price: '$79.99',
    features: ['Deluxe Shine +', 'Interior Deep Clean', 'Leather Conditioning', 'Paint Correction'],
  },
  {
    name: 'Paint Protection',
    description: 'Advanced ceramic coating for long-lasting paint protection.',
    icon: Shield,
    price: '$299.99',
    features: ['Ultimate Detail +', 'Ceramic Coating', '1-Year Warranty', 'Free Touch-ups'],
  },
];

const ServiceCard = ({ name, description, icon: Icon, price, features }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="p-6">
        <Icon className="w-16 h-16 text-teal-500 mb-4 mx-auto" />
        <h3 className="text-2xl font-semibold mb-2 text-center">{name}</h3>
        <p className="text-gray-600 mb-4 text-center">{description}</p>
        <div className="text-3xl font-bold text-teal-600 text-center mb-4">{price}</div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition duration-300 flex items-center justify-center"
        >
          {isExpanded ? 'Hide Details' : 'View Details'}
          <ChevronDown className={`ml-2 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 px-6 py-4"
          >
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-teal-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ServicesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto py-16">
          <motion.h1 
            className="text-5xl font-bold mb-4 text-center text-teal-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience the CarSpa difference with our range of premium car care services.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-teal-700">Can't decide? We're here to help!</h2>
            <p className="text-xl text-gray-600 mb-8">Our experts can recommend the perfect service for your car's needs.</p>
            <a 
              href="/contact" 
              className="bg-teal-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300 inline-block"
            >
              Get a Consultation
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}