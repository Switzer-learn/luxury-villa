"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Reservation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent('Villa Reservation Request');
    const body = encodeURIComponent(`
Dear Luxury Villa Bali Team,

I would like to make a reservation with the following details:

Name: ${formData.fullName}
Email: ${formData.email}
Phone/WhatsApp: ${formData.phone}
Check-in Date: ${formData.checkIn}
Check-out Date: ${formData.checkOut}
Number of Guests: ${formData.guests}

Special Requests:
${formData.message}

Looking forward to hearing from you soon.

Best regards,
${formData.fullName}
    `);
    
    window.location.href = `mailto:info@luxuryvilla.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsAppSubmit = () => {
    const message = encodeURIComponent(`Hello! I'd like to make a reservation at Luxury Villa Bali.

Details:
Name: ${formData.fullName}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Guests: ${formData.guests}

${formData.message ? `Special requests: ${formData.message}` : ''}

Please let me know about availability and pricing. Thank you!`);
    
    // Replace with actual WhatsApp number
    window.open(`https://wa.me/62XXXXXXXXXX?text=${message}`, '_blank');
  };

  return (
    <section id="reservation" className="py-20 bg-neutral">
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
            className="text-4xl lg:text-5xl font-bold text-primary mb-6"
            whileHover={{ color: "var(--accent)" }}
            transition={{ duration: 0.3 }}
          >
            Reserve Your Escape
          </motion.h2>
          <motion.p
            className="text-xl text-primary/80 max-w-3xl mx-auto italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let us make your Balinese dream vacation a reality.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image/Room.png"
                alt="Luxury Villa Room"
                fill
                className="object-cover"
              />
              {/* Overlay with room features */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-6 left-6 text-white">
                  <motion.h3
                    className="text-2xl font-bold mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    Luxury Accommodations
                  </motion.h3>
                  <motion.ul
                    className="space-y-1 text-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <li>• Private ensuite bathrooms</li>
                    <li>• Air conditioning & ceiling fans</li>
                    <li>• Premium linens & amenities</li>
                    <li>• Garden or pool views</li>
                  </motion.ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-secondary p-8 rounded-2xl shadow-xl"
          >
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              {/* Full Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-primary font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="input input-bordered w-full bg-neutral text-primary focus:border-accent"
                  placeholder="Enter your full name"
                />
              </motion.div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-primary font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input input-bordered w-full bg-neutral text-primary focus:border-accent"
                    placeholder="your@email.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-primary font-semibold mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="input input-bordered w-full bg-neutral text-primary focus:border-accent"
                    placeholder="+62 XXX-XXXX-XXXX"
                  />
                </motion.div>
              </div>

              {/* Check-in & Check-out */}
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-primary font-semibold mb-2">
                    Check-in Date *
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    required
                    className="input input-bordered w-full bg-neutral text-primary focus:border-accent"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label className="block text-primary font-semibold mb-2">
                    Check-out Date *
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    required
                    className="input input-bordered w-full bg-neutral text-primary focus:border-accent"
                  />
                </motion.div>
              </div>

              {/* Number of Guests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-primary font-semibold mb-2">
                  Number of Guests *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="select select-bordered w-full bg-neutral text-primary focus:border-accent"
                >
                  {[1,2,3,4,5,6,7,8].map(num => (
                    <option key={num} value={num}>
                      {num} Guest{num > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-primary font-semibold mb-2">
                  Special Requests
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="textarea textarea-bordered w-full h-24 bg-neutral text-primary focus:border-accent resize-none"
                  placeholder="Any special requests or dietary requirements..."
                />
              </motion.div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                {/* Email Submit */}
                <motion.button
                  type="submit"
                  className="btn bg-accent hover:bg-accent/80 text-white border-none flex-1"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(200, 161, 78, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send via Email
                </motion.button>

                {/* WhatsApp Submit */}
                <motion.button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="btn btn-outline border-green-accent text-green-accent hover:bg-green-accent hover:text-white flex-1"
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(60, 110, 71, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.126"/>
                  </svg>
                  WhatsApp Us Now
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;