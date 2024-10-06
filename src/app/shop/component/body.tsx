'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
interface BodyProps {
  portofolio: Portofolio[];
  product: Product[];
}
const Body = ({ portofolio, product }: BodyProps) => {
  const route = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  const heightHover = {
    default: { opacity: 0, height: '0%' },
    hover: { opacity: 1, height: '100%' },
  };
  return (
    <main className='flex flex-col'>
      <div className='relative h-[80vh] flex justify-center items-center bg-background'>
        <img
          src={product[0]?.imageUrl[0]}
          alt={'alt'}
          className='object-cover w-full h-full opacity-75'
        />
        <div className='absolute h-full top-0 flex flex-col justify-center items-center text-center text-white font-bold text-5xl'>
          <span className='text-2xl font-semibold font-primaryTitle'>
            Exclusive Just for You
          </span>
          <span className='font-primaryTitle uppercase'>
            Up to <span className='text-primary'>99%</span> PRICE SAVINGS
          </span>
          <span
            onClick={() => route.push('/shop/collection')}
            className='relative text-xl font-secondaryTitle border-2 border-primary shadow-xl px-4 py-2 mt-5 cursor-pointer hover:scale-110 hover:bg-primary overflow-hidden '
          >
            SEE NOW
          </span>
        </div>
      </div>
      {/* Tampilkan Promo */}
      <div className='w-full flex flex-col md:p-20 bg-background'>
        <div className='w-full flex items-center gap-2 p-2'>
          <span className='text-2xl font-semibold text-textThird text-nowrap'>
            PROMO NOW
          </span>
          <span className='bg-text bg-opacity-50 h-[2px] w-full' />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {product.slice(0, 3).map((product) => (
            <motion.section
              key={product.id}
              className='relative w-full h-[50vh] md:w-[450px] md:h-[450px] overflow-hidden group'
              whileHover='hover'
            >
              {/* Gambar yang memicu hover */}
              <img
                src={product.imageUrl[0]} // Using the first image from product's image array
                alt={product.name}
                className='object-cover w-full h-full transition-transform duration-300 group-hover:scale-110'
              />
              <motion.div className='absolute h-full w-full top-0 left-0 p-4 text-white flex flex-col justify-end z-20'>
                <div className='flex flex-col gap-0'>
                  <div className='flex flex-nowrap gap-5 items-center overflow-ellipsis'>
                    <span className='text-2xl font-bold'>
                      <i className='fa-solid fa-couch'></i>
                    </span>
                    <span className='whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]'>
                      {product.name}
                    </span>{' '}
                    {/* Product name displayed */}
                  </div>
                  <div className='relative w-full flex justify-between items-center'>
                    <div className='h-[1px] w-[50%] bg-text'></div>
                    <span className='absolute right-0 p-2'>
                      <i className='fa-regular fa-bookmark hover:scale-150 hover:text-red-500 transform duration-300'></i>
                    </span>
                  </div>
                  <span className='text-2xl font-bold'>ENTERTAINMENT</span>
                </div>
              </motion.div>
              {/* Overlay yang berubah tinggi saat hover */}
              <motion.div
                className='group absolute top-0 left-0 w-full h-[0%] bg-black bg-opacity-50  flex flex-col items-center justify-center text-center overflow-hidden'
                variants={heightHover}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <span className='opacity-0 group-hover:opacity-100 transform duration-1000'>
                  {product.description}
                </span>
              </motion.div>
              <div className='absolute bottom-0 h-[20%] bg-black bg-opacity-50 w-full'></div>
            </motion.section>
          ))}
        </div>
      </div>
      {/* Tampilkan Iklan Stek lai Bro */}
      <div className='flex flex-col justify-center items-center gap-5 md:h-[50vh] w-full bg-backgroundSecond'>
        <div className='flex flex-col justify-center items-center text-textThird text-2xl font-secondaryTitle font-semibold'>
          <span>Unique Interior Design? </span>
          <span>Our Custom Service is here to help!</span>
        </div>
        <div className='md:w-[50%] flex justify-center items-center text-center text-textThird font-bodyText p-2'>
          <span>
            We offer interior design services that are not only elegant and
            functional, but also fully customizable. Every detail of the design
            can be tailored to your needs and preferences, from from material
            selection to space organization, ensuring every project reflects
            your unique style and personality. We are dedicated to creating
            spaces that are not only beautiful, but also comfortable and fit
            your vision. in line with your vision.
          </span>
        </div>
        <span className='px-5 py-2 border-2 border-primary text-white font-secondaryTitle text-xl cursor-pointer hover:scale-110'>
          Design It Your Way
        </span>
      </div>
      <div className='w-full flex flex-col gap-5 p-10'>
        <div className='w-full h-full flex justify-start gap-5 overflow-x-auto custom-scrollbar p-5'>
          {/* Wrapper to ensure full width scrolling */}
          <div className='flex justify-start gap-5 w-max'>
            {/* Product Item 1 */}
            <div className='w-[350px] h-[450px] flex flex-col border-2 border-text border-opacity-30 p-5'>
              <img
                src={product[0]?.imageUrl[0]}
                alt='itemMost'
                className='object-cover w-full h-[300px]' // Set explicit height for the img
              />
              <div className='flex flex-col mt-2'>
                <h2 className='text-xl font-semibold'>KURSI</h2>
                <p>tipe-tipe kursi</p>
                <div className='flex gap-2 mt-1'>
                  <span className='line-through text-red-500'>Rp. 3jt</span>
                  <span>Rp. 2.5jt</span>
                </div>
              </div>
            </div>

            {/* Product Item 2 */}
            <div className='w-[350px] h-[450px] flex flex-col border-2 border-text border-opacity-30 p-5'>
              <img
                src={product[0]?.imageUrl[0]}
                alt='itemMost'
                className='object-cover w-full h-[300px]' // Set explicit height for the img
              />
              <div className='flex flex-col mt-2'>
                <h2 className='text-xl font-semibold'>KURSI</h2>
                <p>tipe-tipe kursi</p>
                <div className='flex gap-2 mt-1'>
                  <span className='line-through text-red-500'>Rp. 3jt</span>
                  <span>Rp. 2.5jt</span>
                </div>
              </div>
            </div>
            {/* Product Item 2 */}
            <div className='w-[350px] h-[450px] flex flex-col border-2 border-text border-opacity-30 p-5'>
              <img
                src={product[0]?.imageUrl[0]}
                alt='itemMost'
                className='object-cover w-full h-[300px]' // Set explicit height for the img
              />
              <div className='flex flex-col mt-2'>
                <h2 className='text-xl font-semibold'>KURSI</h2>
                <p>tipe-tipe kursi</p>
                <div className='flex gap-2 mt-1'>
                  <span className='line-through text-red-500'>Rp. 3jt</span>
                  <span>Rp. 2.5jt</span>
                </div>
              </div>
            </div>
            {/* Product Item 2 */}
            <div className='w-[350px] h-[450px] flex flex-col border-2 border-text border-opacity-30 p-5'>
              <img
                src={product[0]?.imageUrl[0]}
                alt='itemMost'
                className='object-cover w-full h-[300px]' // Set explicit height for the img
              />
              <div className='flex flex-col mt-2'>
                <h2 className='text-xl font-semibold'>KURSI</h2>
                <p>tipe-tipe kursi</p>
                <div className='flex gap-2 mt-1'>
                  <span className='line-through text-red-500'>Rp. 3jt</span>
                  <span>Rp. 2.5jt</span>
                </div>
              </div>
            </div>
            {/* Product Item 2 */}
            <div className='w-[350px] h-[450px] flex flex-col border-2 border-text border-opacity-30 p-5'>
              <img
                src={product[0]?.imageUrl[0]}
                alt='itemMost'
                className='object-cover w-full h-[300px]' // Set explicit height for the img
              />
              <div className='flex flex-col mt-2'>
                <h2 className='text-xl font-semibold'>KURSI</h2>
                <p>tipe-tipe kursi</p>
                <div className='flex gap-2 mt-1'>
                  <span className='line-through text-red-500'>Rp. 3jt</span>
                  <span>Rp. 2.5jt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* QUOTES */}
      <div className='w-full bg-secondary p-10 flex flex-col justify-center text-text items-center'>
        <div className='text-3xl p-5 font-secondaryTitle uppercase'>
          <span>our happiness guarantee</span>
        </div>
        <div className='w-[70%] text-xl text-center p-5'>
          <span>
            If you’re not happy, we’re not happy. We know designing your home
            can be an intimidating experience, if you’re not happy with your
            design for whatever reason, let us know, and we’ll make it right.
          </span>
        </div>
      </div>
    </main>
  );
};

export default Body;
