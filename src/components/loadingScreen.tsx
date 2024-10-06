import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className='absolute top-0 w-full h-screen flex justify-center items-center bg-background z-30'>
      <div className='text-center'>
        {/* Logo or loading animation */}
        <img
          src='/path-to-your-logo.png' // replace with your logo's path
          alt='Loading Logo'
          className='animate-pulse w-32 h-32' // animation effect
        />
        <p className='mt-4 text-lg text-primary'>Loading, please wait...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
