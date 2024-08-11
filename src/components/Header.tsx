'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Home, Droplet, Camera, Info, PhoneCall, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/services', label: 'Services', icon: Droplet },
  { href: '/gallery', label: 'Gallery', icon: Camera },
  { href: '/about', label: 'About', icon: Info },
  { href: '/contact', label: 'Contact', icon: PhoneCall },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
          setIsVisible(false);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlHeader);

    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 bg-secondary text-secondary-foreground shadow-md`}
      initial={{ top: 0 }}
      animate={{ top: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.5 }} // Increased from 0.3 to 0.5 for slower animation
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="CarSpa Logo" width={120} height={120} className="rounded-full" />
            <span className="text-2xl font-bold text-primary">CarSpa</span>
          </Link>
          
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex items-center hover:text-primary transition duration-300">
                    <item.icon className="w-5 h-5 mr-2" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/booking" className="bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground px-6 py-2 rounded-full transition duration-300 flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Now
                </Link>
              </li>
            </ul>
          </nav>
          
          <button 
            className="lg:hidden text-secondary-foreground focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }} // Increased from 0.3 to 0.5 for slower animation
            className="lg:hidden bg-secondary border-t border-secondary-foreground/10"
          >
            <ul className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <motion.li 
                  key={item.href}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href={item.href} className="flex items-center py-2 hover:text-primary transition duration-300" onClick={() => setIsMenuOpen(false)}>
                    <item.icon className="w-5 h-5 mr-3" />
                    <span>{item.label}</span>
                  </Link>
                </motion.li>
              ))}
              <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/booking" className="block bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded-full transition duration-300 text-center mt-4" onClick={() => setIsMenuOpen(false)}>
                  <span className="flex items-center justify-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Now
                  </span>
                </Link>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;