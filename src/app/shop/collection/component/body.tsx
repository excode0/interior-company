'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface BodyProps {
  product: Product[];
  categoryProduct: CategoryProduct[];
  styleProduct: StyleProduct[];
  materialProduct: MaterialProduct[];
}

const Body = ({
  product,
  categoryProduct,
  styleProduct,
  materialProduct,
}: BodyProps) => {
  const [scrollNav, setScrollNav] = useState(false);

  // Multiple choice filters (arrays)
  const [filterCategory, setFilterCategory] = useState<string[]>([]);
  const [filterStyle, setFilterStyle] = useState<string[]>([]);
  const [filterMaterial, setFilterMaterial] = useState<string[]>([]);
  const [filterPrice, setFilterPrice] = useState('all');
  const [filterColor, setFilterColor] = useState('all');
  const [filterSearch, setFilterSearch] = useState('');
  const [iconMenuFilter, seticonMenuFilter] = useState({
    category: {
      isOpen: false,
    },
    style: {
      isOpen: false,
    },
    material: {
      isOpen: false,
    },
  });

  // Handle multiple choice filter changes
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilterCategory((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const handleStyleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilterStyle((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const handleMaterialChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilterMaterial((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterPrice(event.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterSearch(e.target.value); // Update search query state
  };
  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterColor(event.target.value);
  };

  // Filter the products based on selected criteria
  const filteredProducts = product.filter((product) => {
    const searchMatch =
      filterSearch === '' ||
      product.name.toLowerCase().includes(filterSearch.toLowerCase());

    const categoryMatch =
      filterCategory.length === 0 ||
      (Array.isArray(product.category) &&
        product.category.some((cat) => filterCategory.includes(cat)));

    const styleMatch =
      filterStyle.length === 0 ||
      (Array.isArray(product.interiorType) &&
        product.interiorType.some((style) => filterStyle.includes(style)));

    const materialMatch =
      filterMaterial.length === 0 ||
      (product.materials &&
        Array.isArray(product.materials) &&
        product.materials.some((mat) => filterMaterial.includes(mat)));
    let priceMatch = true;
    if (filterPrice === 'low') priceMatch = product.price <= 500;
    else if (filterPrice === 'medium')
      priceMatch = product.price > 500 && product.price <= 1000;
    else if (filterPrice === 'high') priceMatch = product.price > 1000;
    const colorMatch =
      filterColor === 'all' || product.colors.includes(filterColor);

    return (
      searchMatch &&
      categoryMatch &&
      styleMatch &&
      materialMatch &&
      priceMatch &&
      colorMatch
    );
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrollNav(true);
      else setScrollNav(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className='w-full flex flex-col lg:flex-row gap-5'>
      {/* Sidebar for filters */}
      <motion.div className='md:w-[20%] p-6 bg-background sticky top-5 '>
        <h2 className='text-2xl font-semibold mb-6 text-textThird'>
          Filter Products
        </h2>
        <div className='mb-4'>
          <input
            type='text'
            placeholder='Search for products...'
            className='w-full bg-background p-3 border border-gray-300 rounded-lg focus:bg-backgroundSecond focus:outline-none focus:border-primary transition duration-200'
            onChange={handleSearchChange}
          />
        </div>
        {/* Category Filter */}
        <div className='mb-6 border-b-2 border-textThird'>
          <div className='flex justify-between'>
            <div>
              <span className='text-lg font-medium text-textThird mb-4 '>
                Category
              </span>
            </div>
            <div className='flex gap-5 items-center'>
              <i
                onClick={() => setFilterCategory([])}
                className='fa-regular fa-square-minus text-red-600'
              ></i>
              <i
                onClick={() =>
                  seticonMenuFilter((prevState) => ({
                    ...prevState,
                    category: {
                      ...prevState.category,
                      isOpen: !prevState.category.isOpen, // Toggle antara true/false
                    },
                  }))
                }
                className={`text-primary ${
                  iconMenuFilter.category.isOpen
                    ? 'fa-solid fa-angle-down'
                    : 'fa-solid fa-chevron-left'
                }`}
              ></i>
            </div>
          </div>
          {/* Wrapper with max-height and scroll */}
          <div
            className={`${
              iconMenuFilter.category.isOpen
                ? 'max-h-40 overflow-y-auto'
                : 'hidden'
            }`}
          >
            {categoryProduct.map((items, index) => (
              <label key={index} className='block mb-2'>
                <input
                  type='checkbox'
                  value={items.id}
                  checked={filterCategory.includes(items.id)}
                  onChange={handleCategoryChange}
                  className='mr-2'
                />
                <span className='text-textThird'>{items.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Style Filter */}
        <div className='mb-6 border-b-2 border-textThird'>
          <div className='flex justify-between'>
            <div>
              <span className='text-lg font-medium text-textThird mb-4 '>
                Style
              </span>
            </div>
            <div className='flex gap-5 items-center'>
              <i
                onClick={() => setFilterStyle([])}
                className='fa-regular fa-square-minus text-red-600'
              ></i>
              <i
                onClick={() =>
                  seticonMenuFilter((prevState) => ({
                    ...prevState,
                    style: {
                      ...prevState.style,
                      isOpen: !prevState.style.isOpen, // Toggle antara true/false
                    },
                  }))
                }
                className={`text-primary ${
                  iconMenuFilter.style.isOpen
                    ? 'fa-solid fa-angle-down'
                    : 'fa-solid fa-chevron-left'
                }`}
              ></i>
            </div>
          </div>
          {/* Wrapper with max-height and scroll */}
          <div
            className={`${
              iconMenuFilter.style.isOpen
                ? 'max-h-40 overflow-y-auto'
                : 'hidden'
            }`}
          >
            {styleProduct.map((items, index) => (
              <label key={index} className='block mb-2'>
                <input
                  type='checkbox'
                  value={items.id}
                  checked={filterStyle.includes(items.id)}
                  onChange={handleStyleChange}
                  className='mr-2'
                />
                <span className='text-textThird'>{items.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Material Filter */}
        <div className='mb-6 border-b-2 border-textThird'>
          <div className='flex justify-between'>
            <div>
              <span className='text-lg font-medium text-textThird mb-4 '>
                Material
              </span>
            </div>
            <div className='flex gap-5 items-center'>
              <i
                onClick={() => setFilterMaterial([])}
                className='fa-regular fa-square-minus text-red-600'
              ></i>
              <i
                onClick={() =>
                  seticonMenuFilter((prevState) => ({
                    ...prevState,
                    material: {
                      ...prevState.material,
                      isOpen: !prevState.material.isOpen, // Toggle antara true/false
                    },
                  }))
                }
                className={`text-primary ${
                  iconMenuFilter.material.isOpen
                    ? 'fa-solid fa-angle-down'
                    : 'fa-solid fa-chevron-left'
                }`}
              ></i>
            </div>
          </div>
          {/* Wrapper with max-height and scroll */}
          <div
            className={`${
              iconMenuFilter.material.isOpen
                ? 'max-h-40 overflow-y-auto'
                : 'hidden'
            }`}
          >
            {materialProduct.map((items, index) => (
              <label key={index} className='block mb-2'>
                <input
                  type='checkbox'
                  value={items.id}
                  checked={filterMaterial.includes(items.id)}
                  onChange={handleMaterialChange}
                  className='mr-2'
                />
                <span className='text-textThird'>{items.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className='mb-6'>
          <h3 className='text-lg font-medium text-textThird mb-4'>
            Price Range
          </h3>
          <select
            name='priceRange'
            id='priceRange'
            className='p-3 rounded-lg bg-background focus:bg-backgroundSecond border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-primary'
            onChange={handlePriceChange}
          >
            <option value='all'>All Price</option>
            <option value='low'>Rp 0 - Rp 500 juta</option>
            <option value='medium'>Rp 500 juta - Rp 1 miliar</option>
            <option value='high'>Rp 1 miliar ke atas</option>
          </select>
        </div>

        {/* Color Filter */}
        <div className='mb-6'>
          <h3 className='text-lg font-medium text-textThird mb-4'>Color</h3>
          <select
            name='color'
            id='color'
            className='p-3 rounded-lg bg-background focus:bg-backgroundSecond border border-gray-300 w-full focus:outline-none focus:ring-1 focus:ring-primary'
            onChange={handleColorChange}
          >
            <option value='all'>All Colors</option>
            <option value='red'>Red</option>
            <option value='blue'>Blue</option>
            <option value='green'>Green</option>
            <option value='black'>Black</option>
            <option value='white'>White</option>
          </select>
        </div>
      </motion.div>

      {/* Products Section */}
      <div className='w-full flex-grow bg-background p-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 h-full overflow-y-auto'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product: Product) => (
              <Link href={`/shop/collection/${product.id}`} key={product.id}>
                <div
                  key={product.id}
                  className='w-full h-[450px] flex flex-col border-2 border-text border-opacity-30 p-4 shadow-lg transition-shadow duration-300 hover:shadow-2xl'
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

export default Body;
