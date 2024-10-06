import {
  fetchBioData,
  fetchCategoryProduct,
  fetchPortofolio,
  fetchProduct,
  fetchStyleProduct,
} from '@/services/api';
import React from 'react';
import Body from './component/body';
import Header from '@/components/header';
import Footer from '@/components/footer';

const page = async () => {
  const rooms: Portofolio[] = await fetchPortofolio();
  const bioData: BioData[] = await fetchBioData();
  const categoryProduct: CategoryProduct[] = await fetchCategoryProduct();
  const styleProduct: StyleProduct[] = await fetchStyleProduct();
  // Mengurutkan categoryProduct berdasarkan nama dalam urutan ascending
  const sortedCategoryProduct = categoryProduct.sort((a, b) => {
    if (a.name < b.name) return -1; // a lebih kecil dari b
    if (a.name > b.name) return 1; // a lebih besar dari b
    return 0; // sama
  });

  return (
    <>
      <Header
        bioData={bioData}
        categoryData={sortedCategoryProduct}
        styleData={styleProduct}
        isFixed={true}
      />
      <div className='main-content min-h-screen flex flex-col bg-background text-text overflow-hidden'>
        <Body rooms={rooms} />
        <Footer bioData={bioData} />
      </div>
    </>
  );
};

export default page;
