"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    {
      src: "/image/Outdoor_Seating.png",
      alt: "Outdoor Seating Area"
    },
    {
      src: "/image/Outdoor_Seating_2(sunset).png",
      alt: "Outdoor Seating at Sunset"
    },
    {
      src: "/image/Room.png",
      alt: "Luxury Room"
    },
    {
      src: "/image/Restaurant3.png",
      alt: "Restaurant Interior"
    },
    {
      src: "/image/Restaurant4.png",
      alt: "Restaurant Dining"
    },
    {
      src: "/image/Restaurant.png",
      alt: "Fine Dining"
    },
    {
      src: "/image/Restaurant2.png",
      alt: "Restaurant Ambiance"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section id="gallery" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-neutral mb-6"
            whileHover={{ color: "var(--accent)" }}
            transition={{ duration: 0.3 }}
          >
            A Glimpse Into Paradise
          </motion.h2>
          <motion.p
            className="text-xl text-neutral/80 max-w-3xl mx-auto italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Every corner of our villa tells a story of elegance and serenity.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image Display */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7 }}
              className="relative w-full h-full"
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-accent hover:bg-accent/80 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-accent hover:bg-accent/80 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>

            {/* Auto-play indicator */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {isAutoPlaying ? "Auto" : "Manual"}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center space-x-3 mt-6 overflow-x-auto pb-2 max-w-full"
            style={{ scrollbarWidth: 'thin' }}
          >
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-4 ring-accent scale-110' 
                    : 'ring-2 ring-transparent hover:ring-accent/50'
                }`}
                whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                {index === currentIndex && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-accent/20"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Dot Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center space-x-2 mt-4"
          >
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-accent scale-125' : 'bg-neutral/30 hover:bg-accent/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;