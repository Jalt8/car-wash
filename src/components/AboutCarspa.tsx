import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutCarspa = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-neutral">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img 
          src="/images/background3.webp" 
          alt="Carspa Car Wash" 
          className="rounded-lg shadow-lg"
        />
        <div className="bg-primary text-primary-foreground p-4 mt-4 rounded-lg">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
            <h3 className="text-lg font-semibold">Founded in 2002</h3>
          </div>
          <p className="mt-2 text-sm">Helping Our Clients From Past 20 Years!</p>
        </div>
      </div>
      
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Professional Washing and Cleaning of Your Car</h2>
        <p className="text-dark-gray mb-6">
          Carspa is the carwash of the future, sophisticated, modern, automated, ultra-efficient car washing system will leave your car looking and smelling like it just left the showroom.
        </p>
        
        <ul className="space-y-2 mb-6">
          {['Loyalty Program', 'Membership Program', '100% Satisfaction', 'Flexible and Cost-Effective'].map((item, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="text-secondary mr-2" />
              <span className="text-dark-gray">{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center mb-6">
          <div className="text-4xl font-bold text-primary">100<sup className="text-xl">%</sup></div>
          <div className="ml-4">
            <div className="font-semibold text-secondary">Satisfaction</div>
            <div className="text-sm text-dark-gray">Guarantee</div>
          </div>
        </div>
        
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-secondary hover:text-secondary-foreground transition-colors">
          Watch Our Video
        </button>
      </div>
    </div>
  );
};

export default AboutCarspa;