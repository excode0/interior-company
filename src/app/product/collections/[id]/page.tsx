'use client';
import {
  fetchCategoryById,
  fetchMaterialById,
  fetchProductById,
  fetchRecommendedProducts,
  fetchStyleById,
} from '@/services/api';
import React, { useEffect, useState } from 'react';
import MrLogo from '@/assets/icons/mrlogo.svg';
import Image from 'next/image';
import Link from 'next/link';
// Define product interface
interface Params {
  id: string;
}

const ProductDetailPage = ({ params }: { params: Params }) => {
  const { id } = params;

  // State for product, materials, and current image index
  const [product, setProduct] = useState<Product | null>(null);
  const [materialsProduct, setMaterialsProduct] = useState<MaterialProduct[]>(
    [],
  );
  const [categoryProduct, setCategoryProduct] = useState<CategoryProduct[]>([]);
  const [styleProduct, setStyleProduct] = useState<StyleProduct[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  // Fetch product data
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProduct: Product | null = await fetchProductById(id);
      if (!fetchedProduct) {
        setProduct(null);
        return;
      }
      setProduct(fetchedProduct);

      // Fetch materials used in the product
      const fetchedMaterials: MaterialProduct[] = await Promise.all(
        fetchedProduct.materials.map(async (materialId) => {
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

      // Fetch Category used in the product
      const fetchedCategory: MaterialProduct[] = await Promise.all(
        fetchedProduct.category.map(async (categoryId) => {
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

      // Fetch Style used in the product
      const fetchedStyle: StyleProduct[] = await Promise.all(
        fetchedProduct.interiorType.map(async (styleId) => {
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

      // Fetch recommended products
      // Ambil rekomendasi berdasarkan kategori produk
      if (fetchedProduct.category && fetchedProduct.category.length > 0) {
        console.log(
          'Category ID for Recommendations:',
          fetchedProduct.category[0],
        );

        const fetchedRecommendations = await fetchRecommendedProducts(
          fetchedProduct.category[0],
        );

        console.log('Fetched Recommendations:', fetchedRecommendations);

        if (fetchedRecommendations.length > 0) {
          setRecommendedProducts(fetchedRecommendations);
        } else {
          console.log('No recommendations found for this category.');
        }
      }
    };

    fetchData();
  }, [id]);

  // If product not found
  if (!product) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-background'>
        <p className='text-3xl font-semibold text-gray-500'>
          Product not found
        </p>
      </div>
    );
  }

  // Function to handle image selection
  const handleImageSelect = (index: number) => {
    // setCurrentImageIndex(index);
    if (index !== currentImageIndex) {
      setIsFading(true); // Start fading out

      // After fade-out animation, switch image and fade in
      setTimeout(() => {
        setCurrentImageIndex(index);
        setIsFading(false); // Start fading in
      }, 300); // Set to match the transition duration
    }
  };

  return (
    <div className='min-h-screen py-20 bg-background text-text'>
      <div className='container mx-auto p-8 bg-background rounded-lg'>
        <div className='w-[70%] p-2'>
          <span className='text-2xl font-semibold text-text mb-10'>
            {product.name}
          </span>
        </div>
        <div className='flex'>
          {/* Carousel Container */}
          <div className='relative flex flex-col items-center w-1/6 h-[80vh] overflow-hidden border-r border-secondary pr-4'>
            <div className='w-full grid grid-cols-2 gap-2 '>
              {product.imageUrl.map((item, index) => (
                <div
                  key={index}
                  className={`min-w-[10vh] cursor-pointer rounded-lg transition-transform transform hover:scale-110 ${
                    currentImageIndex === index ? 'border-2 border-primary' : ''
                  }`}
                  onClick={() => handleImageSelect(index)}
                >
                  <img
                    src={item}
                    alt={`Image ${index + 1}`}
                    className='w-full h-full object-cover rounded-lg shadow-lg'
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Main Image Display */}
          <div className='relative flex-1 p-5 flex justify-center items-center'>
            <img
              src={product.imageUrl[currentImageIndex]} // Display selected image
              alt={`Selected ${currentImageIndex + 1}`}
              className={`max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${
                isFading ? 'opacity-0' : 'opacity-100'
              } z-10`}
            />

            {/* Logo with corrected positioning */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'>
              <img
                src={'/icons/mrlogo.svg'}
                width='150'
                height='150'
                className='text-primary rounded-full'
              />
            </div>
          </div>

          {/* Detail Section */}
          <div className='p-5 w-1/3'>
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
              <button className='mt-4 px-6 py-2 bg-primary text-white  font-semibold rounded-lg shadow-md  transition duration-300'>
                Start Order Request
              </button>
              <button className='mt-4 px-6 py-2 border-2 border-text text-white rounded-lg shadow-md  transition duration-300'>
                Contact Supplier
              </button>
            </div>
          </div>
        </div>
        {/* Recommended Products Section */}
        <div className='mt-10'>
          <h2 className='text-2xl font-semibold mb-4'>Recommended Products</h2>
          {recommendedProducts.length > 0 ? (
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 h-full overflow-y-auto'>
              {recommendedProducts.map((recommendation) => (
                <Link
                  href={`/product/collections/${recommendation.id}`}
                  key={recommendation.id}
                >
                  <div
                    key={recommendation.id}
                    className='w-full h-[450px] flex flex-col border-2 p-4 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl'
                  >
                    <div className='h-[250px] w-full overflow-hidden'>
                      <img
                        src={recommendation.imageUrl[0]}
                        alt={recommendation.name}
                        className='object-cover w-full h-full transition-transform duration-300 hover:scale-110'
                      />
                    </div>
                    <span className='text-2xl font-semibold mt-4 overflow-hidden text-ellipsis whitespace-nowrap'>
                      {recommendation.name}
                    </span>
                    <p className='text-gray-500 line-clamp-2'>
                      {recommendation.description}
                    </p>
                    <p className='text-xl font-semibold'>
                      ${' '}
                      {new Intl.NumberFormat('id-ID').format(
                        recommendation.price,
                      )}{' '}
                      .00
                    </p>
                    <p className='text-sm text-gray-400'>
                      Available colors: {recommendation.colors.join(', ')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p>No recommendations available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
