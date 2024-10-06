'use client';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
interface NavProps {
  product: Product[];
  categoryProduct: CategoryProduct[];
  styleProduct: StyleProduct[];
  materialProduct: MaterialProduct[];
  onFilterChange: (filteredProducts: Product[]) => void;
}
const Navbar = ({
  product,
  categoryProduct,
  styleProduct,
  materialProduct,
  onFilterChange,
}: NavProps) => {
  const [scrollNav, setScrollNav] = useState(false);

  const [filterCategory, setFilterCategory] = useState('all'); // Property Category filter
  const [filterStyle, setFilterStyle] = useState('all'); // Property Style filter
  const [filterMaterial, setFilterMaterial] = useState('all'); // Property Material filter
  const [filterPrice, setFilterPrice] = useState('all'); // Price range filter
  const [filterColor, setFilterColor] = useState('all'); // Color filter

  // Handle filter changes
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFilterCategory(event.target.value);
  };
  const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterStyle(event.target.value);
  };
  const handleMaterialChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setFilterMaterial(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterPrice(event.target.value);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterColor(event.target.value);
  };
  // Filter the products array based on selected criteria
  // Filter produk berdasarkan filter yang dipilih
  useEffect(() => {
    const filteredProducts = product.filter((product) => {
      // Filter kategori
      const categoryMatch =
        filterCategory === 'all' || product.category.includes(filterCategory);
      // Filter style
      const styleMatch =
        filterStyle === 'all' || product.interiorType.includes(filterStyle);
      // Filter material
      const materialMatch =
        filterMaterial === 'all' ||
        (product.materials &&
          Array.isArray(product.materials) &&
          product.materials.includes(filterMaterial));

      // Filter harga
      let priceMatch = true;
      if (filterPrice === 'low') priceMatch = product.price <= 500;
      else if (filterPrice === 'medium')
        priceMatch = product.price > 500 && product.price <= 1000;
      else if (filterPrice === 'high') priceMatch = product.price > 1000;

      // Filter warna
      const colorMatch =
        filterColor === 'all' || product.colors.includes(filterColor);

      return (
        categoryMatch && styleMatch && materialMatch && priceMatch && colorMatch
      );
    });

    // Kirimkan produk yang sudah difilter ke Body melalui callback onFilterChange
    onFilterChange(filteredProducts);
  }, [
    filterCategory,
    filterStyle,
    filterMaterial,
    filterPrice,
    filterColor,
    product,
    onFilterChange, // Tambahkan dependensi ini
  ]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        setScrollNav(true);
        console.log('scroll berjalan');
      } else {
        setScrollNav(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <motion.div
      className='fixed w-full flex gap-5 p-6 bg-background rounded-lg z-10'
      animate={{
        top: scrollNav ? '10vh' : '30vh',
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <h2 className='text-xl font-bold mb-4'>Filter Product</h2>
      <div className='flex gap-4'>
        <select
          name='categoryInterior'
          id='categoryInterior'
          className='p-2 rounded-md bg-backgroundSecond border'
          onChange={handleCategoryChange}
        >
          <option value='all'>All Category</option>
          {categoryProduct.map((items, index) => (
            <option key={index} value={items.id}>
              {items.name}
            </option>
          ))}
        </select>
        <select
          name='styleInterior'
          id='styleInterior'
          className='p-2 rounded-md bg-backgroundSecond border'
          onChange={handleStyleChange}
        >
          <option value='all'>All Style</option>
          {styleProduct.map((items, index) => (
            <option key={index} value={items.id}>
              {items.name}
            </option>
          ))}
        </select>
        <select
          name='materialInterior'
          id='materialInterior'
          className='p-2 rounded-md bg-backgroundSecond border'
          onChange={handleMaterialChange}
        >
          <option value='all'>All Material</option>
          {materialProduct.map((items, index) => (
            <option key={index} value={items.id}>
              {items.name}
            </option>
          ))}
        </select>

        <select
          name='priceRange'
          id='priceRange'
          className='p-2 rounded-md bg-backgroundSecond border'
          onChange={handlePriceChange}
        >
          <option value='all'>All Price</option>
          <option value='low'>Rp 0 - Rp 500 juta</option>
          <option value='medium'>Rp 500 juta - Rp 1 miliar</option>
          <option value='high'>Rp 1 miliar ke atas</option>
        </select>

        <select
          name='color'
          id='color'
          className='p-2 rounded-md bg-backgroundSecond border'
          onChange={handleColorChange}
        >
          <option value='all'>All Color</option>
          <option value='red'>Red</option>
          <option value='blue'>Blue</option>
          <option value='green'>Green</option>
          <option value='black'>Black</option>
          <option value='white'>White</option>
        </select>
      </div>
    </motion.div>
  );
};

export default Navbar;
