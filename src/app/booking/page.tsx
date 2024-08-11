'use client';

import React from 'react';
import { Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FeatureIcon = ({ Icon, title }) => (
  <div className="flex items-center space-x-2 text-primary">
    <Icon size={20} />
    <span className="font-semibold">{title}</span>
  </div>
);

export default function BookingPage() {
  const phoneNumber = "+1 (555) 123-4567"; // Replace with your actual phone number

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber.replace(/\D/g,'')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100 py-20">
      <div className="container mx-auto py-16 px-4">
        <motion.h1 
          className="text-5xl font-bold mb-4 text-center text-teal-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Book Your Car Spa Appointment
        </motion.h1>
        <motion.p 
          className="text-xl text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          One call away from a sparkling clean car
        </motion.p>
        
        <Card className="max-w-2xl mx-auto bg-white shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Ready to Book?</h2>
            <p className="text-center text-gray-600 mb-8">
              Our team is ready to assist you in scheduling your perfect car spa experience.
            </p>
            <Button 
              onClick={handleCallClick} 
              className="w-full py-6 text-xl font-semibold bg-teal-500 hover:bg-teal-600 transition-colors duration-300"
            >
              <Phone className="w-6 h-6 mr-2" />
              Call Now to Book: {phoneNumber}
            </Button>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <FeatureIcon Icon={Calendar} title="Flexible Scheduling" />
              <FeatureIcon Icon={Clock} title="Instant Confirmation" />
              <FeatureIcon Icon={MapPin} title="Multiple Locations" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}