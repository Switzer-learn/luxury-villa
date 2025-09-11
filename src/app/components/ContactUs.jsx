"use client";

import { motion } from "framer-motion";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Address",
      content: "Jl. Villa Paradise, Ubud, Bali – Indonesia",
      action: () => window.open("https://maps.google.com/?q=Ubud,Bali,Indonesia", "_blank")
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.126"/>
        </svg>
      ),
      title: "WhatsApp",
      content: "+62 XXX-XXXX-XXXX",
      action: () => window.open("https://wa.me/62XXXXXXXXXX", "_blank")
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: "info@luxuryvilla.com",
      action: () => window.location.href = "mailto:info@luxuryvilla.com"
    }
  ];

  const socialMedia = [
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.533-.758-.936-1.205-2.215-1.205-3.605s.447-2.669 1.205-3.605c.757-.937 1.908-1.533 3.205-1.533 1.297 0 2.448.596 3.205 1.533.758.936 1.205 2.215 1.205 3.605s-.447 2.669-1.205 3.605c-.757.937-1.908 1.533-3.205 1.533zm7.138 0c-1.297 0-2.448-.596-3.205-1.533-.758-.936-1.205-2.215-1.205-3.605s.447-2.669 1.205-3.605c.757-.937 1.908-1.533 3.205-1.533 1.297 0 2.448.596 3.205 1.533.758.936 1.205 2.215 1.205 3.605s-.447 2.669-1.205 3.605c-.757.937-1.908 1.533-3.205 1.533z"/>
        </svg>
      ),
      url: "https://instagram.com/luxuryvillabali"
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: "https://facebook.com/luxuryvillabali"
    },
    {
      name: "TripAdvisor",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353L1.374 4.295 0 5.669l1.374 1.374C.491 8.646.001 10.319.001 12.006c0 6.627 5.373 12 12.005 12s12.005-5.373 12.005-12c0-1.687-.49-3.36-1.374-4.963L24.011 5.669 22.637 4.295l-2.987 2.353c-2.307-1.569-4.975-2.353-7.644-2.353zM6.654 8.646c1.506-1.506 3.516-2.338 5.646-2.338s4.14.832 5.646 2.338c1.506 1.506 2.338 3.516 2.338 5.646s-.832 4.14-2.338 5.646c-1.506 1.506-3.516 2.338-5.646 2.338s-4.14-.832-5.646-2.338c-1.506-1.506-2.338-3.516-2.338-5.646s.832-4.14 2.338-5.646z"/>
        </svg>
      ),
      url: "https://tripadvisor.com/luxuryvillabali"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Map */}
      <div className="absolute inset-0 opacity-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.40020857734!2d115.26238995820312!3d-8.50920345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd237d48654c5cd%3A0x64e9caaa93e99e9c!2sUbud%2C%20Gianyar%20Regency%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
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
            Contact Us
          </motion.h2>
          <motion.p
            className="text-xl text-primary/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to experience paradise? Get in touch with us to plan your perfect getaway.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-neutral p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={info.action}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mb-6 mx-auto"
              >
                {info.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold text-primary mb-3 text-center">
                {info.title}
              </h3>
              
              <p className="text-primary/80 text-center leading-relaxed">
                {info.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Social Media & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          {/* Social Media */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Follow Our Journey
            </h3>
            <div className="flex justify-center space-x-6">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 300 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Get Directions CTA */}
          <motion.button
            onClick={() => window.open("https://maps.google.com/?q=Ubud,Bali,Indonesia", "_blank")}
            className="btn bg-accent hover:bg-accent/80 text-white border-none px-8 py-4 text-lg font-semibold"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 15px 35px rgba(200, 161, 78, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Get Directions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;