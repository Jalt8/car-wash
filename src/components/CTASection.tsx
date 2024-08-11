'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Car, Droplet, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const CTASection = () => {
  return (
    <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/path/to/water-texture.png')] opacity-10"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready for a Spotless Shine?
        </h2>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          Experience the finest car wash service in town. Quick, thorough, and always gleaming results!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <MotionLink 
            href="/booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-teal-700 py-3 px-8 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center w-full sm:w-auto cursor-pointer"
          >
            <Car className="mr-2 w-5 h-5" />
            Book Now
          </MotionLink>
          <MotionLink 
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-teal-700 transition duration-300 flex items-center justify-center w-full sm:w-auto group cursor-pointer"
          >
            Our Services
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </MotionLink>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm"
        >
          <div className="flex items-center">
            <Droplet className="w-5 h-5 mr-2" />
            <span>Eco-friendly products</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2" />
            <span>Quick 15-minute express wash available</span>
          </div>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-teal-800 to-transparent opacity-20"></div>
    </section>
  );
};

export default CTASection;