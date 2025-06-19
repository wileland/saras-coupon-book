// File: /src/components/CouponGrid.jsx

import React from 'react';
import coupons from '../data/coupons';
import CouponCard from './CouponCard';

export default function CouponGrid() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
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
