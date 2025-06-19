// File: /src/components/CouponGrid.jsx

import React, { useState } from 'react';
import coupons from '../data/coupons';
import CouponCard from './CouponCard';

export default function CouponGrid() {
  const [index, setIndex] = useState(0);
  const current = coupons[index];

  const nextCoupon = () => {
    setIndex((i) => (i + 1) % coupons.length);
  };

  return (
    <div className="w-full flex flex-col items-center px-6 py-10">
      <CouponCard
        key={index}
        title={current.title}
        image={current.image}
        caption={current.caption}
        qrCode={current.qrCode}
        showInstruction={index > 0}
      />
      {coupons.length > 1 && (
        <button
          onClick={nextCoupon}
          className="fixed bottom-4 right-4 px-4 py-2 bg-black text-white rounded-full shadow-lg"
        >
          Next Coupon
        </button>
      )}
    </div>
  );
}
