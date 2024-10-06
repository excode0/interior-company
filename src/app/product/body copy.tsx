'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
interface BodyProps {
  product: Product[];
}
const Body = ({ product }: BodyProps) => {
  const route = useRouter();
  return (
    <main className='flex flex-col gap-10'>
      <div className='relative h-[80vh] flex justify-center items-center bg-background'>
        <img
          src={product[0]?.imageUrl[0]}
          alt={'alt'}
          className='object-cover w-full h-full opacity-75'
        />
        <div className='absolute h-full top-0 flex flex-col justify-center items-center text-center text-white font-bold text-5xl'>
          <span className='text-2xl font-semibold font-primaryTitle'>
            Eksklusif Hanya Untuk Anda
          </span>
          <span className='font-primaryTitle'>
            POTONGAN HARGA <span className='text-primary'>99%</span> Untuk
            Produk
          </span>
          <span
            onClick={() => route.push('/product/collections')}
            className='relative text-xl font-display border-2 border-primary shadow-xl px-4 py-2 mt-5 cursor-pointer hover:scale-110 hover:bg-primary overflow-hidden '
          >
            SEE NOW
          </span>
        </div>
      </div>
      {/* Tampilkan Promo */}
      <div className='w-full flex flex-col md:p-20 bg-background'>
        <div className='w-full flex items-center gap-2 p-2'>
          <span className='text-2xl font-semibold text-textThird text-nowrap'>
            PROMO INTERIOR
          </span>
          <span className='bg-text bg-opacity-50 h-[2px] w-full' />
        </div>
        <div className='w-full flex md:justify-center items-center gap-5 md:gap-5 overflow-x-auto p-5'>
          <div className='group relative flex flex-col w-[250px] h-[350px] min-w-[250px] min-h-[350px] overflow-hidden'>
            <img
              src={product[0]?.imageUrl[0]}
              alt='itemPromo'
              className='object-cover w-full h-full group-hover:scale-110 transform duration-300'
            />
            <div className='absolute w-full h-full top-0 flex flex-col text-white text-md font-semibold items-center p-2'>
              <span className='border-2 border-white px-2 mt-5'>Interior</span>
              <span>{product[0]?.name}</span>
            </div>
          </div>
          <div className='group relative flex flex-col w-[250px] h-[350px]  min-w-[250px] min-h-[350px] overflow-hidden'>
            <img
              src={product[0]?.imageUrl[0]}
              alt='itemPromo'
              className='object-cover w-full h-full group-hover:scale-110 transform duration-300'
            />
            <div className='absolute w-full h-full top-0 flex flex-col text-white text-md font-semibold items-center p-2'>
              <span className='border-2 border-white px-2 mt-5'>Interior</span>
              <span>{product[0]?.name}</span>
            </div>
          </div>
          <div className='group relative flex flex-col w-[250px] h-[350px]  min-w-[250px] min-h-[350px] overflow-hidden'>
            <img
              src={product[0]?.imageUrl[0]}
              alt='itemPromo'
              className='object-cover w-full h-full group-hover:scale-110 transform duration-300'
            />
            <div className='absolute w-full h-full top-0 flex flex-col text-white text-md font-semibold items-center p-2'>
              <span className='border-2 border-white px-2 mt-5'>Interior</span>
              <span>{product[0]?.name}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Tampilkan Iklan Stek lai Bro */}
      <div className='flex flex-col justify-center items-center gap-5 md:h-[50vh] w-full bg-background'>
        <div className='flex flex-col justify-center items-center text-text text-2xl font-semibold'>
          <span>Unique Interior Design? </span>
          <span>Our Custom Service is here to help!</span>
        </div>
        <div className='md:w-[50%] flex justify-center items-center text-center p-2'>
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
        <span className='px-5 py-2 border-2 border-primary rounded-xl text-white font-semibold text-xl cursor-pointer hover:scale-110'>
          DESIGN
        </span>
      </div>
      {/* Product Andalan */}
      <div className='min-h-screen flex flex-col gap-5 mb-20'>
        <div className='p-10'>
          <span className='text-xl font-semibold'>Most Popular Products</span>
        </div>
        <div className='h-full grid grid-cols-1 md:grid-cols-2 gap-2 md:p-5'>
          <div className='h-full w-full md:p-5'>
            <img
              src={product[0]?.imageUrl[0]}
              alt='itemMost'
              className='object-cover w-full h-full'
            />
          </div>
          <div className='w-full flex justify-center items-center md:grid md:grid-cols-2 gap-5 md:gap-2 overflow-x-auto p-5'>
            <div className='group relative flex flex-col w-[250px] h-[350px] min-w-[250px] min-h-[350px] md:w-full md:h-full overflow-hidden'>
              <img
                src={product[0]?.imageUrl[0]}
                alt='itemPromo'
                className='object-cover w-full h-full group-hover:scale-110 transform duration-300'
              />
              <div className='absolute w-full h-full top-0 flex flex-col text-white text-md font-semibold items-center p-2'>
                <span className='border-2 border-white px-2 mt-5'>
                  Interior
                </span>
                <span>{product[0]?.name}</span>
              </div>
            </div>
            <div className='group relative flex flex-col w-[250px] h-[350px]  min-w-[250px] min-h-[350px] md:w-full md:h-full overflow-hidden'>
              <img
                src={product[0]?.imageUrl[0]}
                alt='itemPromo'
                className='object-cover w-full h-full group-hover:scale-110 transform duration-300'
              />
              <div className='absolute w-full h-full top-0 flex flex-col text-white text-md font-semibold items-center p-2'>
                <span className='border-2 border-white px-2 mt-5'>
                  Interior
                </span>
                <span>{product[0]?.name}</span>
              </div>
            </div>
            <div className='group relative flex flex-col w-[250px] h-[350px]  min-w-[250px] min-h-[350px] md:w-full md:h-full overflow-hidden'>
              <img
                src={product[0]?.imageUrl[0]}
                alt='itemPromo'
                className='object-cover w-full h-full group-hover:scale-110 transform duration-300'
              />
              <div className='absolute w-full h-full top-0 flex flex-col text-white text-md font-semibold items-center p-2'>
                <span className='border-2 border-white px-2 mt-5'>
                  Interior
                </span>
                <span>{product[0]?.name}</span>
              </div>
            </div>
            <div className='group relative flex flex-col w-[250px] h-[350px]  min-w-[250px] min-h-[350px] md:w-full md:h-full overflow-hidden'>
              <div className='w-full h-full flex justify-center items-center text-center bg-backgroundSecond'>
                <span>SEE MORE PRODUCT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PROMOTE LO LIAK */}
      <div className='relative w-full flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:p-10 bg-secondary'>
        <div className='w-full md:w-[50%] flex flex-col items-center justify-center  gap-10 text-center text-xl'>
          <span className='text-3xl font-semibold'>
            PRODUCT BRAND IN INTERIOR
          </span>
          <span className=''>
            Our products continue to evolve and adapt to the times. timeless not
            weathered by the rain deck &quot; that's how we are, our products
            have been guaranteed by Mr. Itam, the web builder Here you go
          </span>
          <span className='border-2 border-text hover:scale-110 px-3 cursor-pointer'>
            SEE BRAND
          </span>
        </div>
        <div className='w-full md:h-[70vh]'>
          <img
            src={product[0]?.imageUrl[0]}
            alt='item'
            className='object-cover w-full h-full'
          />
        </div>
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
      {/* Section Contact */}
      <div className='w-full bg-background md:p-20'>
        <div className='flex flex-col p-10 w-[70%] gap-5'>
          <span className='text-2xl'>
            STAY INFORMED ON ANNOUNCEMENTS OR CONTACT US
          </span>
          <span>
            The latest designs and trends in luxury custom cabinets are just a
            click away. Sign up for email updates from LXRY to get the latest
            news on our events, trends, and exclusive promotions.
          </span>
          <input type='text' placeholder='your@email.com' className='p-2' />
          <textarea
            name=''
            id=''
            className='p-2 h-[200px]'
            placeholder='Your Text Here...'
          ></textarea>
          <button className='border-2 border-text font-semibold p-2'>
            SEND...
          </button>
        </div>
      </div>
    </main>
  );
};

export default Body;
