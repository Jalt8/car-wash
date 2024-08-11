'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/images/gallery/image1.jpg', alt: 'Luxury car being washed', category: 'Exterior' },
  { src: '/images/gallery/image2.jpg', alt: 'Interior detailing', category: 'Interior' },
  { src: '/images/gallery/image3.jpg', alt: 'Car polishing', category: 'Exterior' },
  { src: '/images/gallery/image4.jpg', alt: 'Wheel cleaning', category: 'Exterior' },
  { src: '/images/gallery/image5.jpg', alt: 'Waxing process', category: 'Exterior' },
  { src: '/images/gallery/image6.jpg', alt: 'Final inspection', category: 'Quality Check' },
];

const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev + 1) % filteredImages.length);
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);

  return (
    <div className="bg-gray-100 min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto py-16">
        <motion.h1 
          className="text-5xl font-bold mb-8 text-center text-teal-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Work Gallery
        </motion.h1>
        
        <motion.div 
          className="flex justify-center mb-8 space-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                filter === category
                  ? 'bg-teal-500 text-white'
                  : 'bg-white text-teal-700 hover:bg-teal-100'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4 transition-opacity opacity-0 hover:opacity-100">
                <span className="text-white text-lg font-semibold">{image.alt}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
              onClick={closeLightbox}
            >
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  width={800}
                  height={600}
                  objectFit="contain"
                />
                <button 
                  className="absolute top-4 right-4 text-white"
                  onClick={closeLightbox}
                >
                  <X size={24} />
                </button>
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
                  onClick={prevImage}
                >
                  <ChevronLeft size={36} />
                </button>
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
                  onClick={nextImage}
                >
                  <ChevronRight size={36} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}