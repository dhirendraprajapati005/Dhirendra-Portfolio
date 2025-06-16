// components/CookieConsent.jsx
import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setShow(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center z-50 shadow-lg">
      <p className="text-sm mb-2 md:mb-0">We use cookies for better experience and analytics. By using this site, you agree to our Privacy Policy.</p>
      <button onClick={acceptCookies} className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm">
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
