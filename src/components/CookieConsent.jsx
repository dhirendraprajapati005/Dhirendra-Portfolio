import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay to prevent layout shift on initial load
      setTimeout(() => setShow(true), 500);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex flex-col md:flex-row justify-between items-center z-50 shadow-md"
      role="alert"
      aria-live="polite"
    >
      <p className="text-sm text-center md:text-left mb-2 md:mb-0">
        We use cookies for a better experience and analytics. By using this site, you agree to our&nbsp;
        <a
          href="/privacy-policy"
          className="underline text-cyan-400 hover:text-cyan-300 transition"
        >
          Privacy Policy
        </a>.
      </p>
      <button
        onClick={acceptCookies}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded text-sm font-medium transition"
        aria-label="Accept cookie policy"
      >
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
