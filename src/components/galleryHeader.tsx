import { fetchPortofolio, fetchProduct } from '@/services/api';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useState } from 'react';
const GalleryHeader = ({
  selectedCollection,
  selectedCategory,
}: {
  selectedCollection: string | null;
  selectedCategory: string | null;
}) => {
  // Mengambil nilai scrollY progress
  const { scrollYProgress } = useScroll();

  // Transformasi untuk membuat elemen bergerak lebih lambat (parallax effect)
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]); // Latar belakang bergerak lebih lambat
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]); // Konten bergerak lebih cepat
  // Filter produk berdasarkan kategori yang dipilih
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // State untuk menyimpan produk yang difilter
  const [filteredPortofolio, setFilteredPortofolio] = useState<Portofolio[]>(
    [],
  );

  useEffect(() => {
    const fetchAndFilterProducts = async () => {
      if (selectedCollection === 'products') {
        const products: Product[] = await fetchProduct(); // Ambil data produk
        const filtered = selectedCategory
          ? products.filter((product) =>
              product.category.includes(selectedCategory!),
            )
          : products; // Filter berdasarkan kategori
        setFilteredProducts(filtered);
      } else if (selectedCollection === 'rooms') {
        const portofolio: Portofolio[] = await fetchPortofolio(); // Ambil data produk
        const filtered = selectedCategory
          ? portofolio.filter((product) =>
              product.interiorType.includes(selectedCategory!),
            )
          : portofolio; // Filter berdasarkan kategori
        setFilteredPortofolio(filtered); // Simpan produk yang difilter ke state
      }
    };

    fetchAndFilterProducts(); // Panggil fungsi fetch
  }, [selectedCollection, selectedCategory]); // Re-run efek ini jika collection atau kategori berubah

  return (
    <motion.div
      className='grid grid-cols-2 gap-5 p-2 overflow-y-auto max-h-[calc(100vh-4rem)]'
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Final animation state
      transition={{
        duration: 0.6,
        ease: 'easeInOut',
        staggerChildren: 0.1,
      }} // Transition settings
    >
      {selectedCollection === 'products'
        ? filteredProducts.slice(0, 5).map((items, index) => (
            <div key={index} className='w-full h-[50vh]'>
              <motion.img
                src={items.imageUrl[0]}
                alt={items.name}
                className='object-cover w-full h-full'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          ))
        : selectedCollection === 'rooms'
        ? filteredPortofolio.slice(0, 5).map((item, index) => (
            <div key={index} className='w-full h-[50vh]'>
              <motion.img
                src={item.imageUrl[0]}
                alt={item.name}
                className='object-cover w-full h-full'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
            </div>
          ))
        : null}
      <div className='bg-background w-full h-[50vh] flex justify-center items-center text-center p-5'>
        <span className='text-2xl'>LIHAT SELENGKAPNYA</span>
      </div>
    </motion.div>
  );
};

export default GalleryHeader;
