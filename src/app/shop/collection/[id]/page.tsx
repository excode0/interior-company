import Footer from '@/components/footer';
import Header from '@/components/header';
import {
  fetchBioData,
  fetchCategoryProduct,
  fetchProductById,
  fetchStyleProduct,
} from '@/services/api';
import React from 'react';
import Body from './component/body';

interface Params {
  id: string;
}

const page = async ({ params }: { params: Params }) => {
  const { id } = params;
  const fetchedProductDetails: Product | null = await fetchProductById(id);
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
        isFixed={false}
      />
      <div className='main-content min-h-screen flex flex-col bg-background text-text overflow-hidden'>
        <Body
          productDetails={fetchedProductDetails ? [fetchedProductDetails] : []}
        />
        <Footer bioData={bioData} />
      </div>
    </>
  );
};

export default page;
