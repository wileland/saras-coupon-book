// File: /src/App.jsx

import React from 'react';
import CouponGrid from './components/CouponGrid';
import Header from './components/Header';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-rose-50 text-gray-800 font-handwriting">
      <Header />
      <CouponGrid />
    </div>
  );
}
