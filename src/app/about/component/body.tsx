'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
  portofolio: Portofolio[];
  bioData: BioData[];
}

const Body = ({ portofolio, bioData }: AboutProps) => {
  return (
    <main className='flex-grow bg-background'>
      <div className='w-full h-screen'>
        <img
          src={portofolio[0]?.imageUrl[0] || ''}
          alt=''
          className='object-cover w-full h-full'
        />
      </div>
      <div>
        <span>ABOUT US</span>
        <span>
          Transforming spaces into luxurious experiences, tailored to your
          unique style.
        </span>
        <span>ABOUT US</span>
        <span>
          Transforming spaces into luxurious experiences, tailored to your
          unique style.
        </span>
      </div>
    </main>
  );
};

export default Body;
