'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare, User, Send, Clock, CheckCircle } from 'lucide-react';

const ContactInfo = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg p-6 space-y-4"
  >
    <h2 className="text-2xl font-bold text-teal-700 mb-4">Visit Us</h2>
    {[
      { icon: MapPin, text: "123 Sparkle Street, Cleanville, CV 12345" },
      { icon: Phone, text: "(555) 123-4567" },
      { icon: Mail, text: "info@sparklewash.com" },
    ].map((item, index) => (
      <motion.div 
        key={index}
        className="flex items-center space-x-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <item.icon className="text-teal-500 w-5 h-5" />
        <p className="text-gray-700">{item.text}</p>
      </motion.div>
    ))}
    <motion.div 
      className="mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <h3 className="text-lg font-semibold mb-2 text-teal-700">Business Hours</h3>
      <div className="flex items-center space-x-3">
        <Clock className="text-teal-500 w-5 h-5" />
        <div>
          <p className="text-gray-700">Monday - Friday: 8:00 AM - 8:00 PM</p>
          <p className="text-gray-700">Saturday - Sunday: 9:00 AM - 6:00 PM</p>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <motion.form 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-4 bg-white p-6 rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Send Us a Message</h2>
      {['name', 'email', 'message'].map((field, index) => (
        <motion.div 
          key={field}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
        >
          <label htmlFor={field} className="block mb-2 font-medium text-gray-700 capitalize">{field}</label>
          <div className="relative">
            {field === 'name' && <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500 w-5 h-5" />}
            {field === 'email' && <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500 w-5 h-5" />}
            {field === 'message' && <MessageSquare className="absolute left-3 top-3 text-teal-500 w-5 h-5" />}
            {field === 'message' ? (
              <textarea 
                id={field} 
                name={field} 
                rows={4} 
                className="w-full pl-10 pr-3 py-2 bg-gray-50 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
                required
              ></textarea>
            ) : (
              <input 
                type={field === 'email' ? 'email' : 'text'}
                id={field} 
                name={field} 
                className="w-full pl-10 pr-3 py-2 bg-gray-50 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" 
                required 
              />
            )}
          </div>
        </motion.div>
      ))}
      <motion.button 
        type="submit" 
        className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition duration-300 flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={formStatus === 'submitting' || formStatus === 'success'}
      >
        {formStatus === 'idle' && <>
          <Send className="mr-2 w-5 h-5" /> Send Message
        </>}
        {formStatus === 'submitting' && 'Sending...'}
        {formStatus === 'success' && <>
          <CheckCircle className="mr-2 w-5 h-5" /> Message Sent!
        </>}
      </motion.button>
    </motion.form>
  );
};

const Map = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="h-64 md:h-full rounded-lg overflow-hidden shadow-lg"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2208143838583!2d-73.98641708459377!3d40.75798797932636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1560412335495!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    ></iframe>
  </motion.div>
);

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4">
      <div className="container mx-auto py-24">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center text-teal-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get Your Car Sparkling Clean
        </motion.h1>
        <motion.p
          className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We're here to make your car shine! Reach out to us for top-notch car wash services or any questions you might have.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <ContactInfo />
            <ContactForm />
          </div>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;