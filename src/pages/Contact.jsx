import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://sheetdb.io/api/v1/nnx1azsfho67i', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: form })
      });

      if (response.ok) {
        setStatus('Message sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      setStatus('Something went wrong.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Dhirendra Portfolio</title>
        <meta
          name="description"
          content="Get in touch with Dhirendra via the contact form for collaborations or queries."
        />
      </Helmet>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center py-12 px-4"
        aria-labelledby="contact-heading"
      >
        <motion.form 
          onSubmit={handleSubmit} 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full max-w-xl bg-gray-900 p-8 rounded-xl shadow-lg space-y-6"
        >
          <motion.h2 
            id="contact-heading"
            className="text-3xl font-bold text-center text-cyan-400" 
            initial={{ y: -20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 0.4 }}
          >
            Contact Me
          </motion.h2>

          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            aria-label="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            aria-label="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />

          <motion.textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            aria-label="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          ></motion.textarea>

          <motion.button
            type="submit"
            aria-label="Send Message"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-cyan-600 hover:bg-cyan-700 py-3 rounded text-white font-semibold transition"
          >
            Send Message
          </motion.button>

          {status && (
            <p className="text-center text-sm text-gray-200 mt-4" role="status">
              {status}
            </p>
          )}
        </motion.form>
      </motion.div>
    </>
  );
};

export default Contact;
