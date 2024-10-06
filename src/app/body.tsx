'use client';
import { useAnimationFrame, useMotionValue, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
interface BodyProps {
  portofolio: Portofolio[];
  product: Product[];
}
const Body = ({ portofolio, product }: BodyProps) => {
  const testimoniData = [
    {
      id: 1,
      text: 'This is the best service I have ever used!, i alwasy buy in this company bro!!!',
      name: 'John Doe',
      image: '/images/sid.jpg',
      position: 'CO FOUNDER YOUTUBE',
    },
    {
      id: 2,
      text: 'Amazing experience with this company!, great company',
      name: 'Jane Smith',
      image: '/images/sid.jpg',
      position: 'CO FOUNDER YOUTUBE',
    },
    {
      id: 3,
      text: 'High-quality products and friendly staff!',
      name: 'Michael Johnson',
      image: '/images/sid.jpg',
      position: 'CO FOUNDER YOUTUBE',
    },
    {
      id: 4,
      text: 'I will definitely recommend this to my friends!',
      name: 'Emily Davis',
      image: '/images/sid.jpg',
      position: 'CO FOUNDER YOUTUBE',
    },
  ];
  const x = useMotionValue(0); // Kontrol animasi secara langsung
  const [isHovered, setIsHovered] = useState(false);
  const speed = 0.5; // Kecepatan pergerakan carousel
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [currentHeaderImageIndex, setCurrentHeaderImageIndex] = useState(0);
  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeaderImageIndex(
        (prevIndex) => (prevIndex + 1) % portofolio[0].imageUrl.length,
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [portofolio[0].imageUrl]);
  useEffect(() => {
    // Hitung lebar total carousel berdasarkan jumlah item
    const handleResize = () => {
      setCarouselWidth(testimoniData.length * 550);
    };

    handleResize(); // Set initial width

    window.addEventListener('resize', handleResize); // Update width on resize
    return () => window.removeEventListener('resize', handleResize);
  }, [testimoniData.length]);

  useAnimationFrame(() => {
    if (!isHovered) {
      x.set(x.get() - speed); // Pindahkan sesuai kecepatan yang ditentukan
    }
  });

  useEffect(() => {
    // Reset posisi carousel untuk loop yang seamless
    if (x.get() <= -carouselWidth) {
      x.set(0);
    }
  }, [x, carouselWidth]);

  const heightHover = {
    default: { opacity: 0, height: '0%' },
    hover: { opacity: 1, height: '100%' },
  };
  return (
    <main className='flex-grow bg-background'>
      {/* Fullscreen Header Section with Background Image */}
      <div className='relative w-full h-screen'>
        {portofolio[0].imageUrl.length > 0 ? (
          <motion.img
            key={currentHeaderImageIndex} // Key helps Framer Motion to track the current image for animation
            src={portofolio[0].imageUrl[currentHeaderImageIndex]} // Display the current image
            alt={`Slide ${currentHeaderImageIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }} // Smooth transition between images
            className='object-cover w-full h-full opacity-75'
          />
        ) : (
          <p>Gambar tidak tersedia.</p>
        )}

        <div className='absolute top-0 w-full h-screen flex flex-col justify-center items-center p-10'>
          <div className='flex flex-col justify-center items-center gap-5'>
            <span className='text-[5em] font-bold text-text font-primaryTitle'>
              LET'S DESIGN YOUR DREAM
            </span>
            <span className='border-2 border-primary text-xl text-text font-secondaryTitle  hover:bg-primary hover:scale-110 duration-150 cursor-pointer p-2'>
              ORDER NOW
            </span>
          </div>
        </div>

        {/* Indicators */}
        <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2'>
          {portofolio[0].imageUrl.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentHeaderImageIndex ? 'bg-primary' : 'bg-white'
              }`}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              onClick={() => setCurrentHeaderImageIndex(index)} // Click to jump to a specific image
            />
          ))}
        </div>
      </div>
      {/* Section with About Us VISI AND MISI and Border Box */}
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-background opacity-100 md:p-10'>
        {/* LEFT */}
        <div className='min-h-screen flex flex-col gap-20 bg-background opacity-100 text-textThird p-10 md:p-20'>
          <div className='flex items-center relative mt-10 ml-10 md:mt-0 md:ml-0'>
            <div className='border-4 border-primary w-16 h-16 absolute -left-5 z-0' />
            <span className='text-2xl font-secondaryTitle bg-background opacity-100 z-10 pl-3 relative'>
              VISION AND MISSION
            </span>
            {/* Corner Squares */}
            <div className='absolute -top-10 -left-10 border-4 border-primary w-4 h-4'></div>
            <div className='absolute -bottom-10 -left-10 border-4 border-primary w-4 h-4'></div>
          </div>
          <div className='text-lg font-bodyText flex flex-col gap-2 '>
            <span>
              to be the first choice in providing interior design solutions that
              combine luxury, elegance, and affordability for every level of
              society. We are committed to delivering high-quality designs with
              a blend of elegant and functional aesthetics, providing
              personalized and professional services that reflect each client's
              unique vision. With the finest materials and innovation in design,
              we create alluring spaces without compromising on budget, offering
              transparent competitive pricing. We believe that luxury should be
              accessible to everyone, making elegance part of everyday life,
              while building long-term relationships based on trust and
              satisfaction.
            </span>
            <span>
              Our team of professional design consultants will collaborate with
              architects, interior designers, builders, and homeowners every
              step of the way to realize the vision of each custom creation.
            </span>
          </div>
          <div>
            <span className='text-2xl font-secondaryTitle text-primary'>
              Elegant and Luxurious, Budget Safe
            </span>
          </div>
          {/* <div className='w-full'>
            <div className=' bottom-0 grid grid-cols-3 gap-2 bg-background rounded-t-xl p-2 text-text shadow-xl z-5'>
              <div className='w-full flex flex-col justify-center itemns-center text-center border-[5px] border-text border-opacity-5 rounded-xl p-2'>
                <span className='text-xl font-semibold'>300+</span>
                <span>Project</span>
              </div>
              <div className='w-full flex flex-col justify-center itemns-center text-center border-[5px] border-text border-opacity-5 rounded-xl p-2'>
                <span className='text-xl font-semibold'>1000+</span>
                <span>Clients</span>
              </div>
              <div className='w-full flex flex-col justify-center itemns-center text-center border-[5px] border-text border-opacity-5 rounded-xl p-2'>
                <span className='text-xl font-semibold'>1000+</span>
                <span>Styles</span>
              </div>
            </div>
          </div> */}
        </div>
        {/* RIGHT */}
        <div className='hidden relative md:flex items-start p-10'>
          <div className='border-l-2 border-t-2 border-primary p-5'>
            <img
              src={portofolio[0].imageUrl[0]}
              alt='item1'
              className='shadow-xl w-[350px] hover:scale-90 hover:rounded-xl transform duration-300'
            />
          </div>
          <div className='absolute right-20 top-40 border-r-2 border-b-2 border-primary rounded-tl-xl p-5 bg-background'>
            <img
              src={portofolio[0].imageUrl[1]}
              alt='item1'
              className='shadow-xl w-[350px] hover:scale-90 hover:rounded-xl transform duration-300'
            />
          </div>
        </div>
      </div>
      {/* Section  line */}
      <div className='relative w-full bg-background flex items-center justify-evenly text-secondary text-2xl'>
        {/* SVG untuk menggambar garis melengkung */}
        <div className='w-full absolute bg-primary h-1 z-5'></div>

        {/* Elemen-elemen yang akan dihubungkan */}
        <div className='absolute w-full flex justify-evenly'>
          <div className='bg-text rounded-full p-6 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center shadow-xl border-t-2 border-b-2 border-primary z-10'>
            <span>
              <i className='fa-solid fa-compass-drafting'></i>
            </span>
          </div>
          <div className='bg-text rounded-full p-6 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center shadow-xl border-t-2 border-b-2 border-primary z-10'>
            <span>
              <i className='fa-solid fa-user-tie'></i>
            </span>
          </div>
          {/*

          <div className='bg-text rounded-full p-6 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center shadow-xl border-t-2 border-b-2 border-primary z-10'>
            <span>
              <i className='fa-solid fa-cubes-stacked'></i>
            </span>
          </div>

          <div className='bg-text rounded-full p-6 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center shadow-xl border-t-2 border-b-2 border-primary z-10'>
            <span>
              <i className='fa-brands fa-unity'></i>
            </span>
          </div> */}

          <div className='bg-text rounded-full p-6 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center shadow-xl border-t-2 border-b-2 border-primary z-10'>
            <span>
              <i className='fa-solid fa-percent'></i>
            </span>
          </div>
        </div>
      </div>

      <div className='bg-backgroundSecond md:p-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 text-textThird md:gap-10  md:p-5'>
          <div className='relative flex flex-col justify-center items-center gap-10 text-center bg-background p-5'>
            <span className='font-primaryTitle text-xl z-10'>DESIGN</span>
            <span className=' z-10'>
              Because creating a home is more than one puzzle piece at a time.
              It's about looking at your home as a whole to understand why the
              things you want are important.
            </span>
            <span className='absolute top-[20%] text-8xl text-secondary z-0'>
              <i className='fa-solid fa-compass-drafting'></i>
            </span>
          </div>
          <div className='relative flex flex-col justify-center items-center gap-10 text-center bg-background p-5'>
            <span className='font-primaryTitle text-xl z-10'>TRUSTED</span>
            <span className=' z-10'>
              We believe in transparency and clear communication, ensuring that
              you always feel comfortable and confident in our design process.
            </span>
            <span className='absolute top-[20%] text-8xl text-secondary z-0'>
              <i className='fa-solid fa-user-tie'></i>
            </span>
          </div>

          <div className='relative flex flex-col justify-center items-center gap-10 text-center bg-background p-5'>
            <span className='font-primaryTitle text-xl z-10'>DISCOUNT</span>
            <span className=' text-lg z-10'>
              Our discounts are designed to meet your needs, making every design
              project more affordable without compromising on quality.
            </span>
            <span className='absolute top-[20%] text-8xl text-secondary z-0'>
              <i className='fa-solid fa-percent'></i>
            </span>
          </div>
        </div>
      </div>
      {/* Section How */}
      <div className='w-full flex flex-col md:p-20 bg-background'>
        <div className='flex justify-center items-center text-2xl font-secondaryTitle text-primary mb-10'>
          <span>HOW WE WORK</span>
        </div>

        {/* Point 1 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-center'>
            <div className='text-5xl font-bold text-primary'>
              <span>01</span>
            </div>
            <div className='lg:col-span-2 text-textThird space-y-4'>
              <p className='text-xl font-primaryTitle'>
                Match with one of our talented designers and get inspired.
              </p>
              <p className='text-lg leading-relaxed'>
                With over a decade of experience across all 50 states and more
                than 100,000 designs, our team will help you refine your style,
                get inspired, and bring your design visions to life for any
                space.
              </p>
            </div>
          </div>
          <div className='relative rounded-lg overflow-hidden shadow-lg max-w-md mx-auto'>
            <img
              src={product[0].imageUrl[0]}
              alt='Design Inspiration'
              className='w-full h-full object-cover transition-transform duration-500 transform hover:scale-105'
            />
          </div>
        </div>

        {/* Point 2 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12'>
          <div className='relative rounded-lg overflow-hidden shadow-lg max-w-md mx-auto order-2 lg:order-1'>
            <img
              src={product[0].imageUrl[0]}
              alt='Custom Furniture'
              className='w-full h-full object-cover transition-transform duration-500 transform hover:scale-105'
            />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-center order-1 lg:order-2'>
            <div className='text-5xl font-bold text-primary'>
              <span>02</span>
            </div>
            <div className='lg:col-span-2 text-textThird space-y-4'>
              <p className='text-xl font-primaryTitle'>
                Customize your furniture to fit your unique space.
              </p>
              <p className='text-lg leading-relaxed'>
                Our design process ensures that every piece is tailored to your
                needs, providing both style and functionality in harmony.
              </p>
            </div>
          </div>
        </div>

        {/* Point 3 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 items-center'>
            <div className='text-5xl font-bold text-primary'>
              <span>03</span>
            </div>
            <div className='lg:col-span-2 text-textThird space-y-4'>
              <p className='text-xl font-primaryTitle'>
                Enjoy seamless delivery and installation.
              </p>
              <p className='text-lg leading-relaxed'>
                From concept to completion, we manage every aspect of your
                project, ensuring a hassle-free experience with precision and
                care.
              </p>
            </div>
          </div>
          <div className='relative rounded-lg overflow-hidden shadow-lg max-w-md mx-auto'>
            <img
              src={product[0].imageUrl[0]}
              alt='Delivery and Installation'
              className='w-full h-full object-cover transition-transform duration-500 transform hover:scale-105'
            />
          </div>
        </div>
      </div>

      {/* Section Pembayaran */}
      <div className='flex justify-center items-center text-textThird mt-10'>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:p-10'>
          {/* Grid pertama untuk menampilkan gambar */}
          <div className='grid grid-cols-3 gap-4 border-t-[2px] md:border-r-[2px] border-text border-opacity-80 p-5'>
            <img
              src={
                'https://p7.hiclipart.com/preview/326/856/1009/bank-negara-indonesia-bank-rakyat-indonesia-bank-permata-sms-banking-bank-thumbnail.jpg'
              }
              alt='bank'
              className='w-full'
            />
            <img
              src={
                'https://p7.hiclipart.com/preview/326/856/1009/bank-negara-indonesia-bank-rakyat-indonesia-bank-permata-sms-banking-bank-thumbnail.jpg'
              }
              alt='bank'
              className='w-full'
            />
            <img
              src={
                'https://p7.hiclipart.com/preview/326/856/1009/bank-negara-indonesia-bank-rakyat-indonesia-bank-permata-sms-banking-bank-thumbnail.jpg'
              }
              alt='bank'
              className='w-full'
            />
            <img
              src={
                'https://p7.hiclipart.com/preview/326/856/1009/bank-negara-indonesia-bank-rakyat-indonesia-bank-permata-sms-banking-bank-thumbnail.jpg'
              }
              alt='bank'
              className='w-full'
            />
            <img
              src={
                'https://p7.hiclipart.com/preview/326/856/1009/bank-negara-indonesia-bank-rakyat-indonesia-bank-permata-sms-banking-bank-thumbnail.jpg'
              }
              alt='bank'
              className='w-full'
            />
            <img
              src={
                'https://p7.hiclipart.com/preview/326/856/1009/bank-negara-indonesia-bank-rakyat-indonesia-bank-permata-sms-banking-bank-thumbnail.jpg'
              }
              alt='bank'
              className='w-full'
            />
          </div>
          {/* Grid kedua untuk menampilkan teks */}
          <div className='flex flex-col items-start justify-start gap-5 border-t-[2px] md:border-l-[2px] border-text border-opacity-80 p-5'>
            <span className='text-5xl font-semibold'>
              0% Financing for Up to 36 Months
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              autem sequi culpa odio vel, ad nobis laudantium ut eum incidunt
              minima debitis aliquam numquam suscipit, saepe natus distinctio
              ipsam facere.
            </span>
            <span className='border-2 border-primary p-2 cursor-pointer font-semibold'>
              See more
            </span>
          </div>
        </div>
      </div>
      {/* Section Testimoni */}
      <div className='relative w-full mt-10'>
        {/* Parallax Background */}
        <div
          className='absolute inset-0 w-full h-full bg-fixed bg-cover bg-center opacity-50'
          style={{ backgroundImage: 'url(' + portofolio[0].imageUrl[0] + ')' }}
        ></div>

        {/* Content with z-index to appear above parallax background */}
        <div className='relative z-10 p-10'>
          <div className='w-full flex flex-col p-5 text-textThird text-center'>
            <span className='text-xl text-primary'>REVIEWS</span>
            <span className='text-3xl'>
              Over 100,000 designs completed for happy clients.
            </span>
          </div>
          <div className='relative w-full mt-10 overflow-hidden'>
            <motion.div
              className='flex'
              style={{ x }}
              animate={{ x: [0, -carouselWidth] }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: 'linear',
              }}
            >
              {testimoniData.map((testimoni, index) => (
                <motion.div
                  key={index}
                  className='flex-shrink-0 w-[550px] h-[250px] flex items-center justify-center relative px-6 py-8'
                  onHoverStart={() => setIsHovered(true)} // Pause animasi saat hover
                  onHoverEnd={() => setIsHovered(false)} // Lanjutkan animasi setelah hover
                  whileHover={{ scale: 1.05 }} // Efek zoom saat hover
                >
                  {/* Image with shadow */}
                  <motion.div
                    className='absolute w-[150px] h-[150px] top-0 left-[15%] z-10 rounded-full overflow-hidden shadow-lg'
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={testimoni.image} // Ganti dengan gambar sesuai data
                      alt={`Testimoni dari ${testimoni.name}`}
                      className='w-full h-full object-cover'
                    />
                  </motion.div>

                  {/* Testimoni Text */}
                  <div className='ml-20 bg-background p-6 rounded-lg shadow-xl z-20 w-[60%] flex flex-col items-center justify-center'>
                    <span className='text-base italic text-textThird mb-3 leading-relaxed'>
                      "{testimoni.text}"
                    </span>
                    <span className='font-bold text-primary text-lg'>
                      {testimoni.name}
                    </span>
                    <span className='text-sm text-textThird'>
                      {testimoni.position}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Copy data untuk seamless loop */}
              {testimoniData.map((testimoni, index) => (
                <motion.div
                  key={index + testimoniData.length}
                  className='flex-shrink-0 w-[550px] h-[250px] flex items-center justify-center relative px-6 py-8'
                  onHoverStart={() => setIsHovered(true)} // Pause animasi saat hover
                  onHoverEnd={() => setIsHovered(false)} // Lanjutkan animasi setelah hover
                  whileHover={{ scale: 1.05 }} // Efek zoom saat hover
                >
                  {/* Image with shadow */}
                  <motion.div
                    className='absolute w-[150px] h-[150px] top-0 left-[15%] z-10 rounded-full overflow-hidden shadow-lg'
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={testimoni.image} // Ganti dengan gambar sesuai data
                      alt={`Testimoni dari ${testimoni.name}`}
                      className='w-full h-full object-cover'
                    />
                  </motion.div>

                  {/* Testimoni Text */}
                  <div className='ml-20 bg-background p-6 rounded-lg shadow-xl z-20 w-[60%] flex flex-col items-center justify-center'>
                    <span className='text-base italic text-textThird mb-3 leading-relaxed'>
                      "{testimoni.text}"
                    </span>
                    <span className='font-bold text-primary text-lg'>
                      {testimoni.name}
                    </span>
                    <span className='text-sm text-textThird'>
                      {testimoni.position}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
