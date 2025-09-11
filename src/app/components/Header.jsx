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
    { name: "Testimonial", href: "#testimonial" },
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
              src="/image/logo.png"
              alt="Luxury Villa Bali"
              width={60}
              height={60}
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
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

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center h-full">
          <motion.a
            href="#reservation"
            className="btn bg-accent hover:bg-accent/80 text-white border-none p-4"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(200, 161, 78, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve Now
          </motion.a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center h-full">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Open menu"
          >
            <motion.div
              initial={false}
              animate={isMenuOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Simple Hamburger Icon */}
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <rect y="6" width="24" height="2" rx="1" fill="#C8A14E"/>
                <rect y="11" width="24" height="2" rx="1" fill="#C8A14E"/>
                <rect y="16" width="24" height="2" rx="1" fill="#C8A14E"/>
              </svg>
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-neutral/95 backdrop-blur-sm shadow-lg absolute top-20 left-0 right-0 z-40"
        >
          <ul className="flex flex-col gap-2 px-6 py-4 text-primary font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block hover:text-accent transition-colors duration-300 px-3 py-2 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#reservation"
                className="btn bg-accent hover:bg-accent/80 text-white border-none w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Reserve Now
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;