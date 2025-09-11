"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sophie L.",
    country: "France",
    text: "A magical experience! The staff made us feel like royalty and the villa is breathtaking.",
    image: "/image/Receptionist.png"
  },
  {
    name: "David W.",
    country: "Australia",
    text: "The infinity pool and private dining were highlights. We will definitely return!",
    image: "/image/Restaurant2.png"
  },
  {
    name: "Ayu P.",
    country: "Indonesia",
    text: "Authentic Balinese hospitality, beautiful rooms, and a peaceful atmosphere.",
    image: "/image/Room.png"
  }
];

const Testimonial = () => {
  return (
    <section id="testimonial" className="py-20 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-primary mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          What Our Guests Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="bg-neutral rounded-2xl shadow-lg p-8 flex flex-col items-center"
            >
              <div className="mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover border-4 border-accent"
                />
              </div>
              <p className="text-lg text-primary/80 italic mb-4">“{t.text}”</p>
              <div className="font-semibold text-primary">{t.name}</div>
              <div className="text-sm text-accent">{t.country}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
