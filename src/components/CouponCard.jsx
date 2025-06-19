// File: /src/components/CouponCard.jsx

import { motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function CouponCard({ title, image, caption, qrCode }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      onClick={() => setFlipped(!flipped)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="cursor-pointer w-64 h-96 rounded-2xl bg-[url('/assets/bg/parchment-texture.jpg')] bg-cover shadow-lg border-[1px] border-amber-300 p-3 transition-transform duration-500"
    >
      <motion.div
        initial={false}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.9 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center p-4 text-center">
          <img src={image} alt={title} className="w-32 h-32 rounded-xl object-cover mb-4 border border-pink-200 shadow" />
          <h2 className="text-xl font-display font-bold text-rose-700 drop-shadow">
            {title}
          </h2>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-rose-200 text-center">
          <p className="text-base font-handwriting text-gray-700 italic leading-snug">
            {caption}
          </p>
          {qrCode && (
            <img src={qrCode} alt="QR Code" className="mt-5 w-20 h-20" />
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
