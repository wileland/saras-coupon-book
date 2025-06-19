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
  showInstruction,
}) {
  const [flipped, setFlipped] = useState(false);
  const [hintHidden, setHintHidden] = useState(false);

  const slug = slugify(title);

  return (
    <Motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="relative w-full max-w-sm h-[430px] perspective rounded-2xl pb-8 z-10"
    >
      <Motion.div
        onClick={() => {
          setFlipped(!flipped);
          setHintHidden(true);
        }}
        className={`relative w-full h-full cursor-pointer transition-transform duration-700 preserve-3d ${flipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-4 text-center bg-white/90 rounded-2xl shadow-md border border-pink-300">
          {couponType && (
            <Motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-full px-6 py-2 shadow-lg backdrop-blur-sm z-30"
            >
              This coupon is valid for: {couponType}
            </Motion.div>
          )}
          <img
            src={image}
            alt={title}
            className="w-full h-full max-h-56 object-contain object-center mb-4 rounded-xl border border-pink-200 shadow pointer-events-none"
          />
          <h2 className="text-xl font-display font-bold text-rose-700 drop-shadow">
            {title}
          </h2>
          {showInstruction && !flipped && !hintHidden && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1 rounded pointer-events-none">
              Tap image for QR code
            </div>
          )}
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
  showInstruction: PropTypes.bool,
};
