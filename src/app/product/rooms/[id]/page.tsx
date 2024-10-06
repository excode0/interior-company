'use client';
import {
  fetchCategoryById,
  fetchPortofolioById,
  fetchProductById,
  fetchRecommendedRooms,
  fetchStyleById,
} from '@/services/api';
import React, { useEffect, useState } from 'react';
import GalleryView from './component/galleryView';
import Link from 'next/link';

interface Params {
  id: string;
}

const Page = ({ params }: { params: Params }) => {
  const { id } = params;
  const [rooms, setRooms] = useState<Portofolio | null>(null);
  const [categoryProduct, setCategoryProduct] = useState<CategoryProduct[]>([]);
  const [styleProduct, setStyleProduct] = useState<StyleProduct[]>([]);
  const [product, setProduct] = useState<Product[]>([]);
  const [recommendedRooms, setRecommendedRooms] = useState<Portofolio[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRooms: Portofolio | null = await fetchPortofolioById(id);
      if (!fetchedRooms) {
        setRooms(null);
        return;
      }
      setRooms(fetchedRooms);

      const fetchedProduct: Product[] = await Promise.all(
        fetchedRooms.idProduct.map(async (idProduct) => {
          const product = await fetchProductById(idProduct);

          return (
            product || {
              id: idProduct,
              name: 'Unknown Product',
              description: '-',
              imageUrl: [],
              price: 0,
              colors: [],
              modelUrl: '',
              category: ['Unknown Category'],
              interiorType: ['Unknown Style'],
              materials: ['Unknown Style'],
              ratings: 0,
              tags: [''],
              discount: 0,
              stock: 0,
              dimensions: '',
              brand: 'Unknown',
            }
          );
        }),
      );

      setProduct(fetchedProduct);

      const fetchedCategory: CategoryProduct[] = await Promise.all(
        fetchedRooms.category.map(async (categoryId) => {
          const category = await fetchCategoryById(categoryId);
          return (
            category || {
              id: categoryId,
              name: 'Unknown Category',
              description: '-',
              imageUrl: '',
            }
          );
        }),
      );
      setCategoryProduct(fetchedCategory);

      const fetchedStyle: StyleProduct[] = await Promise.all(
        fetchedRooms.interiorType.map(async (styleId) => {
          const style = await fetchStyleById(styleId);
          return (
            style || {
              id: styleId,
              name: 'Unknown Category',
              description: '-',
              imageUrl: '',
            }
          );
        }),
      );
      setStyleProduct(fetchedStyle);

      if (fetchedRooms.category && fetchedRooms.category.length > 0) {
        const fetchedRecommendations = await fetchRecommendedRooms(
          fetchedRooms.category[0],
        );
        if (fetchedRecommendations.length > 0) {
          setRecommendedRooms(fetchedRecommendations);
        }
      }
    };

    fetchData();
  }, [id]);

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + rooms!.imageUrl.length) % rooms!.imageUrl.length,
    );
  };

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % rooms!.imageUrl.length,
    );
  };

  if (!rooms) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-black'>
        <p className='text-4xl font-semibold text-gray-500'>Room Not Found</p>
      </div>
    );
  }

  return (
    <main className='w-full flex flex-col gap-10'>
      {/* Hero Section with Ferrari Style */}
      <div className='relative flex'>
        {/* Show Image Or 3D View */}
        <GalleryView mainImage={rooms.imageUrl} />
        <div className='absolute flex bottom-0 right-0 gap-5  p-5'>
          <span className='bg-backgroundSecond p-5 rounded-lg text-2xl cursor-pointer'>
            <i className='fa-solid fa-images hover:scale-110'></i>
          </span>
          <span className='bg-backgroundSecond p-5 rounded-lg text-2xl cursor-pointer'>
            <i className='fa-solid fa-cubes hover:scale-110'></i>
          </span>
        </div>
      </div>

      {/* Room Details Section */}
      <div className='px-10'>
        <div className='grid grid-cols-2'>
          <div className='flex gap-2 items-end'>
            <span className='text-2xl font-bold tracking-wider text-text uppercase'>
              {rooms.name}
            </span>
            <span>By Mr.Itam</span>
          </div>
          <div className='flex justify-end '>
            <span className='border-2 border-primary p-2 text-text font-semibold'>
              Get Design
            </span>
          </div>
        </div>
        <p className='md:w-[70%] text-xl leading-relaxed mb-10'>
          {rooms.description} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Unde natus neque consequuntur libero? Distinctio mollitia illo
          minus quisquam, dolores aperiam cumque omnis officiis nihil est odit
          vitae totam ducimus ex.
        </p>

        {/* Category Display */}
        <div className='flex gap-5 mb-5'>
          {categoryProduct.map((category) => (
            <span
              key={category.id}
              className='px-6 py-2 text-sm text-white border-2 border-text rounded-md shadow-md transition-all duration-300'
            >
              {category.name}
            </span>
          ))}
        </div>

        {/* Styles */}
        <div className='flex gap-5'>
          {styleProduct.map((style) => (
            <span
              key={style.id}
              className='px-6 py-2 text-sm border-2 border-text text-white rounded-md shadow-md transition-all duration-300'
            >
              {style.name}
            </span>
          ))}
        </div>
      </div>

      {/* All Product in Rooms */}
      <div className='flex flex-col gap-5 px-10'>
        <span className='text-2xl font-semibold '>Product in Rooms</span>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 h-full overflow-y-auto'>
          {product.length > 0 ? (
            product.map((product: Product) => (
              <Link
                href={`/product/collections/${product.id}`}
                key={product.id}
              >
                <div
                  key={product.id}
                  className='w-full h-[450px] flex flex-col border-2 p-4 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl'
                >
                  <div className='h-[250px] w-full overflow-hidden'>
                    <img
                      src={product.imageUrl[0]}
                      alt={product.name}
                      className='object-cover w-full h-full transition-transform duration-300 hover:scale-110'
                    />
                  </div>
                  <span className='text-2xl font-semibold mt-4 overflow-hidden text-ellipsis whitespace-nowrap'>
                    {product.name}
                  </span>
                  <p className='text-gray-500 line-clamp-2'>
                    {product.description}
                  </p>
                  <p className='text-xl font-semibold'>
                    $ {new Intl.NumberFormat('id-ID').format(product.price)} .00
                  </p>
                  <p className='text-sm text-gray-400'>
                    Available colors: {product.colors.join(', ')}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className='text-center col-span-full'>
              No products match your filter. Please adjust your criteria and try
              again.
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Page;
