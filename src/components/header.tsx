'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
// import MyLogo from '@/assets/icons/mrlogo.svg';
// import { categories } from '@/services/api';
import { useRouter } from 'next/navigation';
import GalleryHeader from './galleryHeader';
import { fetchCategoryProduct, fetchStyleProduct } from '@/services/api';
// Definisikan tipe untuk props yang diterima
interface HeaderProps {
  bioData: BioData[];
  categoryData: CategoryProduct[];
  styleData: StyleProduct[];
  isFixed: Boolean;
}
const Header = ({ bioData, categoryData, styleData, isFixed }: HeaderProps) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile view if screen is less than 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleOpenMenu = (menuIndex: number) => {
    setIsOpenMenu(menuIndex);
  };
  useEffect(() => {
    const mainContent: HTMLElement | null =
      document.querySelector('.main-content');
    if (mainContent) {
      if (isOpen) {
        mainContent.style.maxHeight = '100vh';
        mainContent.style.overflow = 'hidden';
      } else {
        mainContent.style.maxHeight = '';
        mainContent.style.overflow = 'auto';
      }
    }
  }, [isOpen]);
  return (
    <nav
      className={`${
        isFixed || isOpen ? 'fixed h-screen' : 'sticky'
      } w-full top-0 flex flex-col justify-start items-center z-30 transition-all duration-300 text-text `}
    >
      <div
        className={`w-full h-[10vh] grid grid-cols-3 text-text ${
          isFixed
            ? isOpen || scrollNav
              ? 'bg-backgroundSecond/100'
              : 'bg-backgroundSecond/50'
            : 'bg-backgroundSecond/100'
        }`}
      >
        <div className='flex justify-start items-center ml-5 p-5'>
          <div
            className='group flex gap-2 max-h-10 max-w-12 justify-center items-center cursor-pointer'
            onClick={toggleMenu}
          >
            <div className=' w-full  flex flex-col justify-center items-center gap-1.5'>
              <div
                className={`h-[2px] w-6 rounded-full transition-transform duration-300 ${
                  isOpen
                    ? 'rotate-45 translate-y-2 bg-red-600'
                    : 'bg-secondary/100'
                }`}
              />
              <div
                className={`h-[2px] w-6 rounded-full bg-secondary transition-transform duration-300 ${
                  isOpen ? 'scale-0 bg-background/100' : ''
                }`}
              />
              <div
                className={`h-[2px] w-6 rounded-full transition-transform duration-300 ${
                  isOpen
                    ? '-rotate-45 -translate-y-2 bg-red-600'
                    : 'bg-secondary'
                }`}
              />
            </div>
            <span className='group-hover:font-semibold'>Menu</span>
          </div>
        </div>

        <div className='flex justify-center items-center gap-2'>
          <img
            src={'/icons/mrlogo.svg'}
            width='50'
            height='50'
            className='bg-black rounded-full'
          />
        </div>
        <div className='flex justify-end items-center mr-5'>
          <span className='cursor-pointer hover:underline'>
            <i className='fa-solid fa-user'></i>
          </span>
        </div>
      </div>
      {isOpen ? (
        <div className='w-full h-full flex '>
          <div className='w-full h-full grid md:grid-cols-[0.5fr_2fr] bg-black bg-opacity-75'>
            <div className='w-full flex flex-col border-r-2 border-primary gap-10 p-10 bg-backgroundSecond'>
              <Link
                href='/'
                passHref
                className='group relative flex gap-2'
                onClick={toggleMenu}
              >
                <div className=' w-[2.5px] transform duration-300'></div>
                <div className=' absolute left-0 bottom-0 h-0 group-hover:h-full w-[2.5px] bg-primary transform duration-300'></div>
                <span className='cursor-pointer font-semibold text-2xl hover:underline'>
                  HOME
                </span>
              </Link>
              <Link
                href='/service'
                passHref
                className='group relative flex gap-2'
                onClick={toggleMenu}
              >
                <div className=' w-[2.5px] transform duration-300'></div>
                <div className=' absolute left-0 bottom-0 h-0 group-hover:h-full w-[2.5px] bg-primary transform duration-300'></div>
                <span className='cursor-pointer font-semibold text-2xl hover:underline'>
                  HOW ITS WORK
                </span>
              </Link>
              {isMobile ? (
                <Link
                  href='/interior-design-ideas'
                  passHref
                  className='group relative flex gap-2'
                >
                  <div className=' w-[2.5px] transform duration-300'></div>
                  <div className=' absolute left-0 bottom-0 h-0 group-hover:h-full w-[2.5px] bg-primary transform duration-300'></div>
                  <span className='cursor-pointer font-semibold text-2xl hover:underline'>
                    PORTOFOLIO
                  </span>
                </Link>
              ) : (
                <>
                  <div
                    className='group relative flex gap-2'
                    onClick={() => toggleOpenMenu(2)}
                    onDoubleClick={() =>
                      (window.location.href = '/interior-design-ideas')
                    }
                  >
                    <div className=' w-[2.5px] transform duration-300'></div>
                    <div className=' absolute left-0 bottom-0 h-0 group-hover:h-full w-[2.5px] bg-primary transform duration-300'></div>
                    <span className='cursor-pointer font-semibold text-2xl hover:underline'>
                      PORTOFOLIO
                    </span>
                  </div>
                </>
              )}
              {/* {isMobile ? (
                <Link
                  href='/product/rooms'
                  passHref
                  className='group relative flex gap-2'
                >
                  <div className=' w-[2.5px] transform duration-300'></div>
                  <div className=' absolute left-0 bottom-0 h-0 group-hover:h-full w-[2.5px] bg-primary transform duration-300'></div>
                  <span className='cursor-pointer font-semibold text-2xl hover:underline'>
                    PORTOFOLIO
                  </span>
                </Link>
              ) : (
                <>
                  <div
                    className='group relative flex gap-2'
                    onClick={() => toggleOpenMenu(2)}
                    onDoubleClick={() =>
                      (window.location.href = '/product/rooms')
                    }
                  >
                    <div className=' w-[2.5px] transform duration-300'></div>
                    <div className=' absolute left-0 bottom-0 h-0 group-hover:h-full w-[2.5px] bg-primary transform duration-300'></div>
                    <span className='cursor-pointer font-semibold text-2xl hover:underline'>
                      PORTOFOLIO
                    </span>
                  </div>
                </>
              )} */}
              {isMobile ? (
                <>
                  <Link
                    href='/shop'
                    passHref
                    className='group relative flex gap-2'
                    onClick={toggleMenu}
                  >
                    <div className=' w-[2.5px] transform duration-300'></div>
                    <div className=' absolute left-0 bottom-0 h-0 group-hover:h-full w-[2.5px] bg-primary transform duration-300'></div>
                    <span className='cursor-pointer font-semibold text-2xl hover:underline'>
                      Shop
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  <div
                    className='group relative flex gap-2'
                    onClick={() => toggleOpenMenu(1)}
                    onDoubleClick={() => {
                      router.push('/shop');
                      toggleMenu();
                    }}
                  >
                    <div className=' w-[2.5px] transform duration-300'></div>
                    <div className=' absolute left-0 bottom-0 h-0 group-hover:h-full w-[2.5px] bg-primary transform duration-300'></div>
                    <span className='cursor-pointer font-semibold text-2xl hover:underline'>
                      Shop
                    </span>
                  </div>
                </>
              )}
              {/* <Link
                href='/about'
                passHref
                className='group relative flex gap-2'
                onClick={toggleMenu}
              >
                <div className=' w-[2.5px] transform duration-300'></div>
                <div className=' absolute left-0 bottom-0 h-0 group-hover:h-full w-[2.5px] bg-primary transform duration-300'></div>
                <span className='cursor-pointer font-semibold text-2xl hover:underline'>
                  ABOUT
                </span>
              </Link> */}

              {/* {isMobile ? (
                <>
                  <Link
                    href='/product'
                    passHref
                    className='group relative flex gap-2'
                    onClick={toggleMenu}
                  >
                    <div className=' w-[2.5px] transform duration-300'></div>
                    <div className=' absolute left-0 bottom-0 h-0 group-hover:h-full w-[2.5px] bg-primary transform duration-300'></div>
                    <span className='cursor-pointer font-semibold text-2xl hover:underline'>
                      PRODUCT
                    </span>
                  </Link>
                </>
              ) : (
                <>
                  <div
                    className='group relative flex gap-2'
                    onClick={() => toggleOpenMenu(1)}
                    onDoubleClick={() => {
                      router.push('/product');
                      toggleMenu();
                    }}
                  >
                    <div className=' w-[2.5px] transform duration-300'></div>
                    <div className=' absolute left-0 bottom-0 h-0 group-hover:h-full w-[2.5px] bg-primary transform duration-300'></div>
                    <span className='cursor-pointer font-semibold text-2xl hover:underline'>
                      PRODUCT
                    </span>
                  </div>
                </>
              )} */}

              <Link
                href='/product'
                passHref
                className='group relative flex gap-2'
              >
                <div className=' w-[2.5px] transform duration-300'></div>
                <div className=' absolute left-0 bottom-0 h-0 group-hover:h-full w-[2.5px] bg-primary transform duration-300'></div>
                <span className='cursor-pointer font-semibold text-2xl hover:underline'>
                  CONTACT
                </span>
              </Link>
              {/* <Link
                href='/product'
                passHref
                className='group relative flex gap-2'
              >
                <div className=' w-[2.5px] transform duration-300'></div>
                <div className=' absolute left-0 bottom-0 h-0 group-hover:h-full w-[2.5px] bg-primary transform duration-300'></div>
                <span className='cursor-pointer font-semibold text-2xl hover:underline'>
                  PARTNER
                </span>
              </Link> */}
            </div>
            {!isMobile ? (
              isOpenMenu === 1 ? (
                <div className='h-full w-full grid grid-cols-[1fr_2fr]'>
                  <div className='w-full'>
                    <div className='flex flex-col h-full bg-backgroundSecond gap-6 p-10 overflow-y-scroll max-h-[100vh]'>
                      {categoryData.map((items, index) => (
                        <div
                          className='group flex justify-between'
                          onClick={() => setSelectedCategory(items.id)}
                          onDoubleClick={() =>
                            router.push('/product/category/' + items.name)
                          }
                        >
                          <span className='text-xl cursor-pointer'>
                            {items.name}
                          </span>
                          <div className='hidden group-hover:block'>
                            <i className=' fa-solid fa-chevron-right text-primary'></i>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='h-[100vh]  '>
                    <GalleryHeader
                      selectedCollection={'products'}
                      selectedCategory={selectedCategory}
                    />
                  </div>
                </div>
              ) : isOpenMenu === 2 ? (
                <div className='h-full w-full grid grid-cols-[1fr_2fr]'>
                  <div className='w-full'>
                    <div className='flex flex-col h-full bg-backgroundSecond gap-6 p-10 overflow-y-scroll max-h-[100vh]'>
                      {styleData.map((items, index) => (
                        <div
                          className='group flex justify-between'
                          onClick={() => setSelectedCategory(items.id)}
                          onDoubleClick={() =>
                            router.push('/product/category/' + items.name)
                          }
                        >
                          <span className='text-xl cursor-pointer'>
                            {items.name}
                          </span>
                          <div className='hidden group-hover:block'>
                            <i className=' fa-solid fa-chevron-right text-primary'></i>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='h-[100vh]  '>
                    <GalleryHeader
                      selectedCollection={'rooms'}
                      selectedCategory={selectedCategory}
                    />
                  </div>
                </div>
              ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 h-full md:h-[100vh] w-full bg-backgroundSecond md:bg-opacity-50 md:p-10'>
                  {/* Address Section */}
                  <div className='flex items-center justify-center md:justify-start'>
                    <div className='space-y-4'>
                      <h2 className='text-3xl font-bold tracking-wide text-gold'>
                        Our Address
                      </h2>
                      <p className='text-lg text-gray-400'>
                        {bioData[0].address}
                      </p>
                      <p className='text-sm italic text-gray-500'>
                        Open Hours: Mon - Sat, 10am - 8pm
                      </p>
                    </div>
                  </div>

                  {/* Social Media Section */}
                  <div className='flex items-center justify-center md:justify-end'>
                    <div className='md:space-y-4'>
                      <h2 className='text-3xl font-bold tracking-wide text-gold'>
                        Connect with Us
                      </h2>
                      <div className='flex space-x-6'>
                        <a
                          href='#'
                          className='text-gray-400 hover:text-gold transition duration-300'
                        >
                          <i className='fab fa-facebook fa-2x'></i>
                        </a>
                        <a
                          href='#'
                          className='text-gray-400 hover:text-gold transition duration-300'
                        >
                          <i className='fab fa-instagram fa-2x'></i>
                        </a>
                        <a
                          href='#'
                          className='text-gray-400 hover:text-gold transition duration-300'
                        >
                          <i className='fab fa-twitter fa-2x'></i>
                        </a>
                        <a
                          href='#'
                          className='text-gray-400 hover:text-gold transition duration-300'
                        >
                          <i className='fab fa-pinterest fa-2x'></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ) : null}
          </div>
        </div>
      ) : null}
      {/* <div className='w-full h-full'></div> */}
    </nav>
  );
};

export default Header;
