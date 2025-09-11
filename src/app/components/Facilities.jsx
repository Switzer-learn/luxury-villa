"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Facilities = () => {
  const facilities = [
    {
      title: "Infinity Pool",
      description: "An infinity-edge pool that blends seamlessly with Bali's tropical horizon.",
      image: "/image/Outdoor_Seating.png",
      
    },
    {
      title: "Spa Treatments",
      description: "Balinese massages, facials, and holistic therapies in serene surroundings.",
      image: "/image/Room.png", // Using available image
      
    },
    {
      title: "Fine Dining",
      description: "Exquisite dishes blending local ingredients with global flair.",
      image: "/image/Restaurant.png",
      
    },
    {
      title: "Private Chef",
      description: "Customized dining experiences tailored to your preferences.",
      image: "/image/Food.png",
      
    },
    {
      title: "Yoga Pavilion",
      description: "Peaceful open-air space for sunrise meditation or private yoga sessions.",
      image: "/image/Outdoor_Seating_2(sunset).png",
      
    },
    {
      title: "Concierge & Transfers",
      description: "From airport pickups to curated island tours, we take care of every detail.",
      image: "/image/Staff.png",
      
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🌴</div>
        <div className="absolute top-32 right-20 text-4xl">🌺</div>
        <div className="absolute bottom-20 left-20 text-5xl">🌴</div>
        <div className="absolute bottom-32 right-10 text-3xl">🌺</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-primary mb-6"
            whileHover={{ color: "var(--accent)" }}
            transition={{ duration: 0.3 }}
          >
            Luxury Facilities
          </motion.h2>
          <motion.p
            className="text-xl text-primary/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Immerse yourself in world-class amenities designed for your ultimate comfort and relaxation
          </motion.p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-neutral rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                {/* Icon Overlay */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                  className="absolute top-4 right-4 bg-accent/90 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl"
                >
                  {facility.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-primary mb-3"
                  whileHover={{ color: "var(--accent)" }}
                  transition={{ duration: 0.3 }}
                >
                  {facility.title}
                </motion.h3>
                <p className="text-primary/80 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#reservation"
            className="btn bg-accent hover:bg-accent/80 text-white border-none px-8 py-4 text-lg font-semibold"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 15px 35px rgba(200, 161, 78, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            Experience These Facilities
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;