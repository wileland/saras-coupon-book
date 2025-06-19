// File: /src/components/Redeem.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import slugify from '../utils/slugify.js';
import coupons from '../data/coupons';

export default function Redeem() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const index = coupons.findIndex((c) => slugify(c.title) === slug);
  const coupon = coupons[index];
  const nextSlug = coupons[(index + 1) % coupons.length]
    ? slugify(coupons[(index + 1) % coupons.length].title)
    : null;

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
      <p className="text-lg font-handwriting text-gray-800 max-w-md italic mb-8">
        {coupon.caption}
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-black text-white rounded shadow"
        >
          Back
        </button>
        {nextSlug && (
          <button
            onClick={() => navigate(`/redeem/${nextSlug}`)}
            className="px-4 py-2 bg-rose-600 text-white rounded shadow"
          >
            Next Coupon
          </button>
        )}
      </div>
    </div>
  );
}
