// File: /src/components/CouponGrid.jsx

import React from 'react';
import coupons from '../data/coupons';
import CouponCard from './CouponCard';

export default function CouponGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {coupons.map((coupon, index) => (
        <CouponCard
          key={index}
          title={coupon.title}
          image={coupon.image}
          caption={coupon.caption}
          qrCode={coupon.qrCode}
        />
      ))}
    </div>
  );
}
