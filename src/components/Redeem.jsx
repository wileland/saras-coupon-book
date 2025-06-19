// File: /src/components/Redeem.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import coupons from '../data/coupons';

export default function Redeem() {
  const { slug } = useParams();
  const decodedTitle = slug.replace(/-/g, ' ').toLowerCase();

  const coupon = coupons.find(c =>
    c.title.toLowerCase() === decodedTitle
  );

  if (!coupon) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-10">
        <h1 className="text-3xl text-rose-600">404 – Coupon Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center text-center p-6">
      <img src={coupon.image} alt={coupon.title} className="w-64 h-64 object-contain object-center rounded-xl shadow border mb-6" />
      <h1 className="text-4xl font-display text-rose-700 mb-4">{coupon.title}</h1>
      <p className="text-lg font-handwriting text-gray-800 max-w-md italic">
        {coupon.caption}
      </p>
    </div>
  );
}
