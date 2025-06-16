// src/pages/PrivacyPolicy.jsx
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 shadow-md rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-sm">
          This privacy policy outlines how we collect, use, and protect your data when you use our portfolio website. Your privacy is important to us, and we are committed to safeguarding your personal information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
        <p className="text-sm">
          We do not collect personal data unless you choose to contact us through a form or email. This may include your name, email address, and message content.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Use of Cookies</h2>
        <p className="text-sm">
          We may use cookies for analytics or enhancing user experience. You can accept or decline cookies through the consent banner.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Third-Party Services</h2>
        <p className="text-sm">
          This site may use tools like Google Analytics or Vercel Speed Insights to analyze usage data anonymously. We do not sell or share any personal data with third-party services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
        <p className="text-sm">
          We implement basic security measures to protect your information. However, since this is a personal portfolio, no sensitive user data is stored.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Contact Us</h2>
        <p className="text-sm">
          If you have questions regarding this privacy policy, you can contact us at:  
          <br />
          <strong>prajapatidhirendra005@gmail.com</strong>
        </p>
      </section>

      <p className="text-xs text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} Dhirendra Prajapati. All rights reserved.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
