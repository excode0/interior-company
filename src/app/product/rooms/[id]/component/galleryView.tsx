import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';

interface RoomsImage {
  mainImage: string[];
}

const GalleryView = ({ mainImage }: RoomsImage) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       nextImage();
  //     }, 5000); // Ganti gambar setiap 5 detik
  //     return () => clearInterval(interval);
  //   }, [currentImageIndex]);

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + mainImage.length) % mainImage.length,
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mainImage.length);
  };

  return (
    <div className='relative w-full h-screen'>
      {/* Wrapper for Images */}
      <AnimatePresence initial={false}>
        <motion.img
          key={mainImage[currentImageIndex]}
          src={mainImage[currentImageIndex]}
          alt='Room Image'
          className='absolute w-full h-full object-cover'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70'></div>

      {/* Previous and Next Buttons */}
      <div className='absolute left-5 top-1/2 transform -translate-y-1/2'>
        <button
          onClick={prevImage}
          className='p-4 bg-gradient-to-r from-black to-transparent text-text rounded-md shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out'
        >
          <i className='fa-solid fa-chevron-left text-2xl'></i>
        </button>
      </div>

      <div className='absolute right-5 top-1/2 transform -translate-y-1/2'>
        <button
          onClick={nextImage}
          className='p-4 bg-gradient-to-l from-black to-transparent text-text rounded-md shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out'
        >
          <i className='fa-solid fa-chevron-right text-2xl'></i>
        </button>
      </div>
    </div>
  );
};

export default GalleryView;
