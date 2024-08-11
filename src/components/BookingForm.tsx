'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BookingForm = () => {
  const phoneNumber = '+1234567890'; // Replace with your actual phone number

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Ready to Book?</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-center text-gray-600">
          Our team is ready to assist you in scheduling your appointment.
        </p>
        <Button 
          onClick={handleCall} 
          className="w-full py-6 text-lg font-semibold"
        >
          <Phone className="w-6 h-6 mr-2" />
          Call Now to Book
        </Button>
        <p className="text-sm text-center text-gray-500">
          Our friendly staff will help you choose the perfect time and service.
        </p>
      </CardContent>
    </Card>
  );
};

export default BookingForm;