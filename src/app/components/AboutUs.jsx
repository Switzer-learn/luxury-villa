"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section 1 - Authentic Balinese Retreat */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/image/Receptionist.png"
                alt="Luxury Villa Reception"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 border-4 border-accent rounded-full opacity-20"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-primary leading-tight"
              whileHover={{ color: "var(--accent)" }}
              transition={{ duration: 0.3 }}
            >
              An Authentic Balinese Retreat
            </motion.h2>
            
            <motion.p
              className="text-lg lg:text-xl text-primary/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Nestled in the heart of Bali, our villa combines timeless Balinese architecture 
              with modern comfort. Crafted with teak wood and natural stone, every detail 
              reflects harmony, tradition, and understated elegance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-1 bg-accent"></div>
              <span className="text-accent font-semibold">Luxury Redefined</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Section 2 - Hospitality from the Heart */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content - Left side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:order-1"
          >
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-primary leading-tight"
              whileHover={{ color: "var(--accent)" }}
              transition={{ duration: 0.3 }}
            >
              Hospitality from the Heart
            </motion.h2>
            
            <motion.p
              className="text-lg lg:text-xl text-primary/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our dedicated team embodies the warmth of Balinese culture, ensuring every 
              guest feels at home from the moment they arrive.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-1 bg-green-accent"></div>
              <span className="text-green-accent font-semibold">Balinese Warmth</span>
            </motion.div>
          </motion.div>

          {/* Image - Right side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:order-2"
          >
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/image/Staff.png"
                alt="Luxury Villa Staff"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-green-accent rounded-full opacity-20"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;