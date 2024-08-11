'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Car, Droplets, Sparkles, Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Express Wash",
    price: 19.99,
    icon: Car,
    features: [
      "Exterior Wash",
      "Spot-Free Rinse",
      "Power Dry",
      "Vacuum Access (5 mins)"
    ]
  },
  {
    name: "Deluxe Shine",
    price: 39.99,
    icon: Droplets,
    recommended: true,
    features: [
      "Express Wash Features",
      "Tire Shine",
      "Triple Foam Polish",
      "Undercarriage Wash",
      "Vacuum Access (10 mins)"
    ]
  },
  {
    name: "Ultimate Detail",
    price: 79.99,
    icon: Sparkles,
    features: [
      "Deluxe Shine Features",
      "Hand Wax",
      "Interior Detailing",
      "Clay Bar Treatment",
      "Unlimited Vacuum Access"
    ]
  }
];

const PricingCard = ({ plan }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`bg-card rounded-lg shadow-lg overflow-hidden border-2 ${
      plan.recommended ? 'border-accent' : 'border-transparent'
    }`}
  >
    <div className={`p-6 ${plan.recommended ? 'bg-accent bg-opacity-10' : ''}`}>
      <plan.icon className="w-16 h-16 text-primary mb-4" />
      <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
      <div className="text-3xl font-bold text-primary mb-4">
        ${plan.price.toFixed(2)}
        <span className="text-lg font-normal text-muted-foreground">/month</span>
      </div>
      <ul className="space-y-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center text-foreground">
            <Check className="w-5 h-5 mr-2 text-accent" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {plan.recommended && (
        <div className="mt-4 bg-accent text-accent-foreground text-center py-2 rounded-full font-semibold">
          RECOMMENDED
        </div>
      )}
    </div>
  </motion.div>
);

const PricingSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-4">Our Washing Plans</h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Choose the perfect plan to keep your ride sparkling clean
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;