// File: /src/components/CouponCard.jsx

import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import slugify from '../utils/slugify.js';

export default function CouponCard({
  title,
  image,
  caption,
  qrCode,
  couponType,
}) {
  const [flipped, setFlipped] = useState(false);

  const slug = slugify(title);
  const usedCoupons = JSON.parse(localStorage.getItem('usedCoupons') || '[]');
  const isUsed = usedCoupons.includes(slug);

  return (
    <Motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative w-full max-w-sm h-[430px] perspective rounded-2xl pb-8 z-10"
    >
      <Motion.div
        onClick={() => {
          setFlipped(!flipped);
        }}
        className={`relative w-full h-full cursor-pointer transition-transform duration-700 preserve-3d ${flipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-4 text-center bg-white/90 rounded-2xl shadow-md border border-pink-300">
          {isUsed && (
            <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 text-xs rounded shadow">
              Redeemed
            </div>
          )}
          <img
            src={image}
            alt={title}
            className="w-full h-full max-h-56 object-contain object-center mb-4 rounded-xl border border-pink-200 shadow-2xl brightness-110 contrast-125 saturate-150 pointer-events-none"
          />
          {couponType && (
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-none mt-1 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full px-4 py-1 shadow-md backdrop-blur-sm"
            >
              This coupon is valid for: {couponType}
            </Motion.div>
          )}
          <h2
            className={`text-xl font-display font-bold drop-shadow ${isUsed ? 'text-emerald-400' : 'text-rose-700'}`}
          >
            {title}
          </h2>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-rose-200 text-center">
          <p className="text-base font-handwriting text-gray-700 italic leading-snug">
            {caption}
          </p>

          {qrCode && (
            <Link
              to={`/redeem/${slug}`}
              className="mt-5 block"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={qrCode}
                alt={`QR Code for ${title}`}
                className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
              />
            </Link>
          )}
        </div>
      </Motion.div>
    </Motion.div>
  );
}

CouponCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  caption: PropTypes.string,
  qrCode: PropTypes.string,
  couponType: PropTypes.string,
}; 
