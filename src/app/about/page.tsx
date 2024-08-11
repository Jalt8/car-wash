'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Users, Droplet, Zap, MapPin, Clock, Star } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Icon size={40} className="text-teal-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const AnimatedSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-14">
      <div className="container mx-auto py-24 px-4">
        <AnimatedSection>
          <h1 className="text-5xl font-bold mb-8 text-center text-teal-700">About CarSpa</h1>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Elevating the art of car care since 2010, CarSpa is where passion meets precision in automotive detailing.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <AnimatedSection>
            <div className="relative">
              <Image
                src="/images/logo2.webp"
                alt="CarSpa Team"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <Star className="text-yellow-400 inline mr-2" />
                <span className="font-bold text-lg">4.9 Rating</span>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="space-y-8">
              {['Our Story', 'Our Mission', 'Why Choose Us'].map((section) => (
                <motion.div key={section} className="border-b border-gray-300 pb-4">
                  <button
                    onClick={() => toggleSection(section)}
                    className="flex justify-between items-center w-full text-left"
                  >
                    <h2 className="text-2xl font-semibold text-teal-700">{section}</h2>
                    <ChevronDown
                      className={`transform transition-transform text-teal-500 ${
                        activeSection === section ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeSection === section && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-gray-600"
                      >
                        {section === 'Our Story' && (
                          <p>
                            Founded in 2010, CarSpa emerged from a simple yet powerful idea: to revolutionize the car wash experience. Our journey began with a small team of car enthusiasts who believed that every vehicle deserves more than just a quick rinse. Today, we've grown into a beacon of excellence in the automotive care industry, setting new standards with our innovative techniques and unwavering commitment to quality.
                          </p>
                        )}
                        {section === 'Our Mission' && (
                          <p>
                            At CarSpa, our mission transcends the ordinary. We're not just cleaning cars; we're curating experiences. Every vehicle that enters our facility is treated as a canvas, and every service we provide is a brushstroke in creating a masterpiece. We're committed to delivering an unparalleled blend of cutting-edge technology and personalized care, ensuring that each client drives away not just with a clean car, but with a renewed sense of pride in their vehicle.
                          </p>
                        )}
                        {section === 'Why Choose Us' && (
                          <ul className="list-disc list-inside space-y-2">
                            <li>Expertly trained professionals with a passion for perfection</li>
                            <li>Eco-conscious practices and biodegradable products</li>
                            <li>State-of-the-art equipment for superior results</li>
                            <li>Meticulous attention to every detail, inside and out</li>
                            <li>Convenient location and flexible hours to fit your schedule</li>
                          </ul>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center text-teal-700">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Users}
              title="Expert Team"
              description="Our skilled professionals are passionate about delivering exceptional results."
            />
            <FeatureCard
              icon={Droplet}
              title="Eco-Friendly"
              description="We use sustainable practices and environmentally conscious products."
            />
            <FeatureCard
              icon={Zap}
              title="Cutting-Edge Tech"
              description="Our state-of-the-art equipment ensures the best care for your vehicle."
            />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-20 text-center bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-teal-700">Visit Us Today</h2>
            <p className="text-xl mb-8 text-gray-600">Experience the CarSpa difference for yourself!</p>
            <div className="flex justify-center space-x-12">
              <div className="flex items-center">
                <MapPin className="text-teal-500 mr-3" size={24} />
                <span className="text-lg">123 Main St, Anytown, USA</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-teal-500 mr-3" size={24} />
                <span className="text-lg">Open 7 days a week, 8AM - 8PM</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}