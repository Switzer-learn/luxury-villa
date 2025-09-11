"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Facilities", href: "#facilities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Reservation", href: "#reservation" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-neutral/95 backdrop-blur-sm shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20 border">
        {/* Logo */}
        <div className="flex items-center h-full">
          <motion.div transition={{ type: "spring", stiffness: 300 }}>
            <Image
              src="/image/Villa_Logo_Photo.png"
              alt="Luxury Villa Bali"
              width={60}
              height={60}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-8 text-primary font-medium">
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.a
                  href={item.href}
                  className="hover:text-accent transition-colors duration-300 px-3 py-2 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center h-full">
          <motion.a
            href="#reservation"
            className="btn bg-accent hover:bg-accent/80 text-white border-none p-4"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(200, 161, 78, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Now
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;