// File: /src/components/CouponCard.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CouponCard({ title, image, caption, qrCode }) {
  const [flipped, setFlipped] = useState(false);

  const slug = title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="w-full max-w-sm h-[430px] perspective"
    >
      <motion.div
        onClick={() => setFlipped(!flipped)}
        className={`relative w-full h-full transition-transform duration-700 ${flipped ? 'rotate-y-180' : ''}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center p-4 text-center bg-white/90 rounded-2xl shadow-md border border-pink-300">
          <img
            src={image}
            alt={title}
            className="w-32 h-32 rounded-xl object-cover mb-4 border border-pink-200 shadow"
          />
          <h2 className="text-xl font-display font-bold text-rose-700 drop-shadow">
            {title}
          </h2>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-rose-200 text-center">
          <p className="text-base font-handwriting text-gray-700 italic leading-snug">
            {caption}
          </p>

          {qrCode && (
            <Link to={`/redeem/${slug}`} className="mt-5 block">
              <img
                src={qrCode}
                alt={`QR Code for ${title}`}
                className="w-20 h-20 hover:scale-110 transition-transform duration-300"
              />
            </Link>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

CouponCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  caption: PropTypes.string,
  qrCode: PropTypes.string,
};
