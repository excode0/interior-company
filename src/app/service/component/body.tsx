'use client';
import { motion } from 'framer-motion';
import React from 'react';
interface BodyProps {
  portofolio: Portofolio[];
  product: Product[];
}
const Body = ({ portofolio, product }: BodyProps) => {
  return (
    // THIS HEADER
    <main className='flex flex-col bg-background'>
      {/* HEADER */}
      <div className='relative w-full h-screen'>
        <img
          src={portofolio[0].imageUrl[1]}
          alt=''
          className='object-cover w-full h-full'
        />
        <div className='absolute h-full w-full top-0 flex flex-col justify-center items-center text-center text-textThird z-10'>
          <div className='w-[50%] flex flex-col text-center'>
            <span className='text-5xl font-primaryTitle font-bold'>
              Design, Collaborate, Transform: Our Easy Online Process
            </span>
            <span className='text-2xl'>
              Work with our award-winning interior designers to make your dream
              space come true! Interior design has never been so convenient,
              simple and fun!
            </span>
            <div className='mt-10'>
              <span className='border-2 border-primary p-2 font-secondaryTitle'>
                HOW ITS WORK
              </span>
            </div>
          </div>
        </div>
        <div className='absolute w-full h-full top-0 bg-black bg-opacity-50 z-5' />
      </div>
      {/* HOW */}
      <div className='relative flex flex-col overflow-hidden'>
        <div className='w-full flex flex-col md:px-24 md:py-32 bg-background '>
          <div className='flex justify-center items-center text-4xl font-secondaryTitle text-primary mb-16 z-10'>
            <span>HOW OUR DESIGN PROCESS WORKS</span>
          </div>

          {/* Step 1: Tell us your needs */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 z-10'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
              <div className='text-6xl font-extrabold text-primary'>
                <span>01</span>
              </div>
              <div className='lg:col-span-2 text-textThird space-y-6'>
                <p className='text-2xl font-primaryTitle'>
                  Tell us your needs.
                </p>
                <p className='text-lg leading-relaxed'>
                  To start your design project, complete a quick and easy
                  questionnaire. Let us know your preferences, attach photos of
                  your room, and choose the inspiration you love. We’ll use this
                  information to create a personalized design that matches your
                  style.
                </p>
                <p className='text-lg leading-relaxed'>
                  Whether you're seeking an entirely new layout, reimagining a
                  single room, or enhancing your home’s flow, our process starts
                  by understanding your vision and needs.
                </p>
              </div>
            </div>
            <ParallaxImage
              src={product[0].imageUrl[0]}
              alt='Interior Design Questionnaire'
            />
          </div>

          {/* Step 2: Collaborate with a Designer */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 z-10'>
            <ParallaxImage
              src={product[0].imageUrl[0]}
              alt='Designer Collaboration'
            />
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
              <div className='text-6xl font-extrabold text-primary'>
                <span>02</span>
              </div>
              <div className='lg:col-span-2 text-textThird space-y-6'>
                <p className='text-2xl font-primaryTitle'>
                  Collaborate with a Designer.
                </p>
                <p className='text-lg leading-relaxed'>
                  After receiving your questionnaire, you'll be paired with one
                  of our expert designers. Together, you’ll collaborate online
                  or in-person to refine your vision, ensuring every detail
                  aligns with your preferences and lifestyle.
                </p>
                <p className='text-lg leading-relaxed'>
                  Our designers will provide professional insights, suggesting
                  layouts, color schemes, and furniture options to enhance your
                  space. You can interact and review multiple design concepts
                  before making a final decision.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Get your custom design */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16  z-10'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
              <div className='text-6xl font-extrabold text-primary'>
                <span>03</span>
              </div>
              <div className='lg:col-span-2 text-textThird space-y-6'>
                <p className='text-2xl font-primaryTitle'>
                  Get your custom design.
                </p>
                <p className='text-lg leading-relaxed'>
                  Once the collaboration is complete, we’ll provide a detailed
                  design package that includes floor plans, furniture
                  arrangements, and a shopping list for all recommended
                  products. You’ll receive high-resolution 3D visualizations to
                  see how the design comes to life.
                </p>
                <p className='text-lg leading-relaxed'>
                  This custom design is tailored specifically to your space,
                  ensuring functionality and aesthetics meet your needs. Whether
                  you are refreshing a single room or redesigning your entire
                  home, we’ve got you covered.
                </p>
              </div>
            </div>
            <ParallaxImage src={product[0].imageUrl[0]} alt='Custom Design' />
          </div>

          {/* Step 4: Implement with ease */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 z-10'>
            <ParallaxImage
              src={product[0].imageUrl[0]}
              alt='Seamless Implementation'
            />
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
              <div className='text-6xl font-extrabold text-primary'>
                <span>04</span>
              </div>
              <div className='lg:col-span-2 text-textThird space-y-6'>
                <p className='text-2xl font-primaryTitle'>
                  Implement with ease.
                </p>
                <p className='text-lg leading-relaxed'>
                  Once your design is finalized, our team will help with
                  procurement and installation if needed. We ensure that every
                  piece arrives safely and is installed properly, taking the
                  stress out of your home transformation.
                </p>
                <p className='text-lg leading-relaxed'>
                  For clients opting for online services, we offer guidance and
                  support throughout the implementation process. No matter where
                  you are, we ensure your project is executed to perfection.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5: Ongoing Support */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 z-10'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
              <div className='text-6xl font-extrabold text-primary'>
                <span>05</span>
              </div>
              <div className='lg:col-span-2 text-textThird space-y-6'>
                <p className='text-2xl font-primaryTitle'>Ongoing Support.</p>
                <p className='text-lg leading-relaxed'>
                  Our relationship doesn’t end after installation. We provide
                  ongoing support to ensure your space continues to meet your
                  needs. Whether it’s seasonal updates, additional
                  customization, or maintenance, we are always here to assist.
                </p>
                <p className='text-lg leading-relaxed'>
                  Your home evolves, and so do we. We offer continuous design
                  consultations to help you adapt your space as your life
                  changes, ensuring it always feels fresh and reflective of your
                  style.
                </p>
              </div>
            </div>
            <ParallaxImage src={product[0].imageUrl[0]} alt='Ongoing Support' />
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-5 z-5'>
          <span className='text-primary text-3xl font-secondaryTitle uppercase'>
            Enjoy your dream room design!
          </span>
          <video autoPlay loop muted playsInline className='w-[70%]'>
            <source src={portofolio[0].videoUrl} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* QUOTES */}
      <div className='w-full bg-secondary p-10 flex flex-col justify-center text-text items-center mt-10'>
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
    // this FOOTER AVAILABLE
  );
};
interface ParallaxImageProps {
  src: string;
  alt: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt }) => {
  return (
    <motion.div
      className='relative rounded-xl overflow-hidden shadow-xl max-w-lg mx-auto'
      whileHover={{ scale: 1.05 }}
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img src={src} alt={alt} className='w-full h-full object-cover' />
    </motion.div>
  );
};
export default Body;
