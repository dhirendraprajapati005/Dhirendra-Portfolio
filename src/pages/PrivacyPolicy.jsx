// src/pages/PrivacyPolicy.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Dhirendra Portfolio</title>
        <meta
          name="description"
          content="Read the privacy policy outlining how Dhirendra's portfolio website collects, uses, and protects your data."
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen bg-gray-950 text-white px-6 py-12 flex items-center justify-center"
      >
        <div className="max-w-4xl w-full bg-gray-900 p-8 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold mb-6 text-center text-cyan-400">Privacy Policy</h1>

          {[
            {
              title: '1. Introduction',
              content:
                'This privacy policy outlines how we collect, use, and protect your data when you use our portfolio website. Your privacy is important to us, and we are committed to safeguarding your personal information.'
            },
            {
              title: '2. Information We Collect',
              content:
                'We do not collect personal data unless you choose to contact us through a form or email. This may include your name, email address, and message content.'
            },
            {
              title: '3. Use of Cookies',
              content:
                'We may use cookies for analytics or enhancing user experience. You can accept or decline cookies through the consent banner.'
            },
            {
              title: '4. Third-Party Services',
              content:
                'This site may use tools like Google Analytics or Vercel Speed Insights to analyze usage data anonymously. We do not sell or share any personal data with third-party services.'
            },
            {
              title: '5. Data Security',
              content:
                'We implement basic security measures to protect your information. However, since this is a personal portfolio, no sensitive user data is stored.'
            },
            {
              title: '6. Contact Us',
              content:
                'If you have questions regarding this privacy policy, you can contact us at:\n\nprajapatidhirendra005@gmail.com'
            }
          ].map((section, index) => (
            <section className="mb-6" key={index}>
              <h2 className="text-2xl font-semibold mb-2 text-cyan-300">{section.title}</h2>
              <p className="text-sm leading-relaxed text-gray-300 whitespace-pre-line">{section.content}</p>
            </section>
          ))}

          <p className="text-xs text-center text-gray-500 mt-10">
            © {new Date().getFullYear()} Dhirendra Prajapati. All rights reserved.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default PrivacyPolicy;
