"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/Outdoor_Seating_2(sunset).png"
          alt="Luxury Villa Outdoor Seating at Sunset"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Where Balinese Serenity Meets Modern Luxury
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-200 italic"
        >
          Your private escape in the heart of Bali.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA - Reserve Now */}
          <motion.button
            onClick={() => scrollToSection('reservation')}
            className="btn bg-accent hover:bg-accent/80 text-white border-none px-8 py-4 text-lg font-semibold"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 15px 35px rgba(200, 161, 78, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Now
          </motion.button>

          {/* Secondary CTA - Explore Villa */}
          <motion.button
            onClick={() => scrollToSection('about')}
            className="btn btn-outline border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 text-lg font-semibold"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(200, 161, 78, 0.2)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Villa
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white cursor-pointer"
          onClick={() => scrollToSection('highlights')}
        >
          <span className="text-sm mb-2 opacity-75">Scroll to explore</span>
          <svg
            className="w-6 h-6 opacity-75"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
