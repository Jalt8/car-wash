'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Droplet, Sun, Wind, Clock } from 'lucide-react';

const FeatureCard = ({ icon, number, title, gradient, Icon }) => (
  <motion.div 
    className="relative h-80 rounded-2xl overflow-hidden group shadow-lg"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  >
    <Image 
      src={icon} 
      alt={title} 
      layout="fill" 
      objectFit="cover" 
      className="transition-opacity duration-300 opacity-30 group-hover:opacity-60"
    />
    <div className={`absolute inset-0 ${gradient} transition-opacity duration-300 group-hover:opacity-70`} />
    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
    <div className="relative h-full flex flex-col justify-between p-6 text-white z-10">
      <div className="flex justify-between items-start">
        <span className="text-6xl font-bold italic">{number}</span>
        <Icon className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-semibold mt-auto group-hover:translate-y-2 transition-transform duration-300">{title}</h3>
    </div>
  </motion.div>
);

const FeatureHighlights = () => {
  const features = [
    { icon: '/images/foam.webp', number: '01', title: 'Eco-friendly Luxurious Foam', gradient: 'bg-gradient-to-br from-teal-500 to-teal-700', Icon: Droplet },
    { icon: '/images/african-sun.webp', number: '02', title: 'Ultra Wax Sun Protection', gradient: 'bg-gradient-to-br from-teal-500 to-teal-700', Icon: Sun },
    { icon: '/images/vacuum.webp', number: '03', title: 'Modern Vacuuming Systems', gradient: 'bg-gradient-to-br from-teal-500 to-teal-700', Icon: Wind },
    { icon: '/images/washing.webp', number: '04', title: 'Open 7 Days: 8am-5pm', gradient: 'bg-gradient-to-br from-teal-500 to-teal-700', Icon: Clock },
  ];

  return (
    <section className="py-20 bg-neutral">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-teal-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Our Car Wash?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;