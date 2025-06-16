import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SpeedInsights />
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <Navbar />
        <main className="flex-grow">
          <App />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
