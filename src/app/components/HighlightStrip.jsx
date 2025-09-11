"use client";

import { motion } from "framer-motion";

const HighlightStrip = () => {
  const highlights = [
    {
      icon: "🏊‍♂️",
      title: "Infinity Pool",
      description: "Relax in crystal-clear waters overlooking lush greenery."
    },
    {
      icon: "🧘‍♀️",
      title: "Spa & Wellness",
      description: "Rejuvenate with traditional Balinese therapies."
    },
    {
      icon: "🍽️",
      title: "Private Dining",
      description: "Indulge in flavors crafted by our private chef."
    }
  ];

  return (
    <section id="highlights" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-6xl mb-4"
              >
                {highlight.icon}
              </motion.div>
              
              <motion.h3
                className="text-2xl font-bold text-primary mb-4"
                whileHover={{ color: "var(--accent)" }}
                transition={{ duration: 0.3 }}
              >
                {highlight.title}
              </motion.h3>
              
              <p className="text-primary/80 text-lg leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightStrip;
