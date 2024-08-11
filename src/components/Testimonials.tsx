'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Droplet, Timer, Shield } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  carType: string;
  serviceUsed: string;
  beforeImage: string;
  afterImage: string;
}

const TestimonialCard: React.FC<Testimonial> = ({ name, role, content, rating, carType, serviceUsed, beforeImage, afterImage }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="bg-card text-card-foreground rounded-xl shadow-lg overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img src={beforeImage} alt={`${carType} before wash`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-primary-foreground text-xl font-bold">Before</p>
          </div>
        </motion.div>
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ rotateY: 180 }}
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.6 }}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img src={afterImage} alt={`${carType} after wash`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-primary-foreground text-xl font-bold">After</p>
          </div>
        </motion.div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
          <div className="text-xs font-medium text-primary">{carType}</div>
        </div>
        <p className="text-sm text-muted-foreground mb-2 flex-grow">&ldquo;{content}&rdquo;</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-muted-foreground'}`} fill={i < rating ? 'currentColor' : 'none'} />
            ))}
          </div>
          <div className="text-xs font-medium text-accent">{serviceUsed}</div>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCard: React.FC<{ icon: React.ElementType; title: string; description: string }> = ({ icon: Icon, title, description }) => (
  <div className="text-center p-6 bg-card rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
    <h3 className="text-lg font-semibold mb-2 text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      name: "John Doe",
      role: "Executive",
      content: "The premium detailing service brought my luxury car back to showroom condition. Absolutely phenomenal work!",
      rating: 5,
      carType: "Luxury Sedan",
      serviceUsed: "Premium Detailing",
      beforeImage: "/images/before-luxury-sedan.jpg",
      afterImage: "/images/after-luxury-sedan.jpg"
    },
    {
      name: "Jane Smith",
      role: "Professional Athlete",
      content: "Quick, efficient, and spotless results every time. The express wash is perfect for my busy schedule.",
      rating: 5,
      carType: "Sports Car",
      serviceUsed: "Express Wash",
      beforeImage: "/images/before-sports-car.jpg",
      afterImage: "/images/after-sports-car.jpg"
    },
    {
      name: "Alex Johnson",
      role: "Family Man",
      content: "The interior deep clean removed stains I thought were permanent. My family van has never looked better!",
      rating: 5,
      carType: "Minivan",
      serviceUsed: "Interior Deep Clean",
      beforeImage: "/images/before-minivan.jpg",
      afterImage: "/images/after-minivan.jpg"
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Transformations That Speak</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          See the dramatic before-and-after results our customers rave about. Experience the difference of our premium car wash services.
        </p>
        <div className="relative">
          <AnimatePresence mode="wait">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => {
                const index = (currentIndex + i) % testimonials.length;
                return <TestimonialCard key={index} {...testimonials[index]} />;
              })}
            </div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-card rounded-full p-2 shadow-lg hover:bg-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-card rounded-full p-2 shadow-lg hover:bg-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FeatureCard icon={Droplet} title="Eco-Friendly Products" description="We use environmentally safe cleaning solutions for a greener clean." />
          <FeatureCard icon={Timer} title="Quick Turnaround" description="Get your car sparkling clean in no time with our efficient services." />
          <FeatureCard icon={Shield} title="100% Satisfaction" description="We guarantee you'll love the results or we'll make it right." />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;