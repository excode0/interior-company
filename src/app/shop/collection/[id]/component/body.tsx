'use client';
import {
  fetchCategoryById,
  fetchMaterialById,
  fetchRecommendedProducts,
  fetchStyleById,
} from '@/services/api';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface BodyProps {
  productDetails: Product[];
}

const Body = ({ productDetails }: BodyProps) => {
  if (productDetails.length === 0) {
    return <p>No product found.</p>;
  }

  const [materialsProduct, setMaterialsProduct] = useState<MaterialProduct[]>(
    [],
  );
  const [categoryProduct, setCategoryProduct] = useState<CategoryProduct[]>([]);
  const [styleProduct, setStyleProduct] = useState<StyleProduct[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  const product = productDetails[0];

  useEffect(() => {
    const fetchData = async () => {
      const fetchedMaterials: MaterialProduct[] = await Promise.all(
        product.materials.map(async (materialId) => {
          const material = await fetchMaterialById(materialId);
          return (
            material || {
              id: materialId,
              name: 'Unknown material',
              description: '-',
              imageUrl: '',
            }
          );
        }),
      );
      setMaterialsProduct(fetchedMaterials);

      const fetchedCategory: CategoryProduct[] = await Promise.all(
        product.category.map(async (categoryId) => {
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
        product.interiorType.map(async (styleId) => {
          const style = await fetchStyleById(styleId);
          return (
            style || {
              id: styleId,
              name: 'Unknown Style',
              description: '-',
              imageUrl: '',
            }
          );
        }),
      );
      setStyleProduct(fetchedStyle);

      if (product.category && product.category.length > 0) {
        const fetchedRecommendations = await fetchRecommendedProducts(
          product.category[0],
        );
        setRecommendedProducts(fetchedRecommendations);
      }
    };

    fetchData();
  }, [product]);

  const handleImageSelect = (index: number) => {
    if (index !== currentImageIndex) {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex(index);
        setIsFading(false);
      }, 300);
    }
  };

  return (
    <div className='min-h-screen py-10 bg-background text-text'>
      <div className='container mx-auto p-4 lg:p-8 bg-background rounded-lg'>
        <div className='w-full lg:w-[70%] mb-6'>
          <span className='text-xl md:text-2xl font-semibold text-text mb-4'>
            {product.name}
          </span>
        </div>
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Carousel Container */}
          <div className='relative flex flex-row lg:flex-col items-center w-full lg:w-1/12 lg:h-[80vh] overflow-x-auto lg:overflow-y-auto border-r border-secondary pr-4'>
            <div className='w-full flex flex-row lg:grid lg:grid-cols-1 gap-2'>
              {product.imageUrl.map((item, index) => (
                <div
                  key={index}
                  className={`cursor-pointer rounded-lg  ${
                    currentImageIndex === index ? 'border-2 border-primary' : ''
                  }`}
                  onClick={() => handleImageSelect(index)}
                  style={{ minWidth: '100px' }} // memastikan elemen punya lebar minimal agar bisa di-scroll horizontal
                >
                  <img
                    src={item}
                    alt={`Image ${index + 1}`}
                    className='w-full aspect-square object-cover shadow-lg '
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Main Image Display */}
          <div className='relative w-full md:w-1/2 flex-1 p-5 flex justify-center items-center'>
            <img
              src={product.imageUrl[currentImageIndex]}
              alt={`Selected ${currentImageIndex + 1}`}
              className={`max-w-full max-h-[40vh] md:max-h-[100vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${
                isFading ? 'opacity-0' : 'opacity-100'
              } z-10`}
            />
            {/* Logo */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'>
              <img
                src={'/icons/mrlogo.svg'}
                width='150'
                height='150'
                className='text-primary rounded-full opacity-50'
              />
            </div>
          </div>

          {/* Detail Section */}
          <div className='p-5 w-full lg:w-1/2'>
            <h2 className='text-2xl font-semibold mb-4'>Details</h2>
            <p className='mb-4 text-gray-400'>{product.description}</p>

            {/* Materials */}
            <div className='mb-4'>
              <h3 className='text-xl font-bold mb-2'>Materials</h3>
              <div className='flex flex-wrap gap-2'>
                {materialsProduct.map((material) => (
                  <span
                    key={material.id}
                    className='bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-medium'
                  >
                    {material.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Category */}
            <div className='mb-4'>
              <h3 className='text-xl font-bold mb-2'>Category</h3>
              <div className='flex flex-wrap gap-2'>
                {categoryProduct.map((category) => (
                  <span
                    key={category.id}
                    className='bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-medium'
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Style */}
            <div className='mb-4'>
              <h3 className='text-xl font-bold mb-2'>Style</h3>
              <div className='flex flex-wrap gap-2'>
                {styleProduct.map((style) => (
                  <span
                    key={style.id}
                    className='bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-sm font-medium'
                  >
                    {style.name}
                  </span>
                ))}
              </div>
            </div>

            <div className='mt-4'>
              <h3 className='text-xl font-semibold'>Price</h3>
              <p className='text-lg text-green-500'>${product.price}</p>
            </div>
            <div className='flex gap-2'>
              <button className='mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow-md transition duration-300'>
                Start Order Request
              </button>
              <button className='mt-4 px-6 py-2 border-2 border-text text-white rounded-lg shadow-md transition duration-300'>
                Contact Supplier
              </button>
            </div>
          </div>
        </div>

        {/* Recommended Products Section */}
        <div className='mt-10'>
          <h2 className='text-2xl font-semibold mb-4'>Recommended Products</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 h-full overflow-y-auto'>
            {recommendedProducts.length > 0 ? (
              recommendedProducts.map((product: Product) => (
                <Link href={`/shop/collection/${product.id}`} key={product.id}>
                  <div
                    key={product.id}
                    className='w-full h-[450px] flex flex-col border-2 p-4 shadow-lg transition-shadow duration-300 hover:shadow-2xl'
                  >
                    <div className='h-[250px] w-full overflow-hidden'>
                      <img
                        src={product.imageUrl[0]}
                        alt={product.name}
                        className='object-cover w-full h-full transition-transform duration-300 hover:scale-110'
                      />
                    </div>
                    <span className='text-xl font-bodyText mt-4 overflow-hidden text-ellipsis whitespace-nowrap uppercase'>
                      {product.name}
                    </span>
                    <p className='text-md text-gray-500 line-clamp-2'>
                      {product.description}
                    </p>
                    <p className='text-xl font-semibold'>
                      $ {new Intl.NumberFormat('id-ID').format(product.price)}{' '}
                      .00
                    </p>
                    <p className='text-sm text-gray-400'>
                      Available colors: {product.colors.join(', ')}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div className='text-center col-span-full'>
                No products match your filter. Please adjust your criteria and
                try again.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
