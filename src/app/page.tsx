import {
  fetchBioData,
  fetchCategoryProduct,
  fetchPortofolio,
  fetchProduct,
  fetchStyleProduct,
} from '@/services/api';
import Body from './body';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default async function Home() {
  const bioData: BioData[] = await fetchBioData();
  const categoryProduct: CategoryProduct[] = await fetchCategoryProduct();
  const styleProduct: StyleProduct[] = await fetchStyleProduct();
  // Mengurutkan categoryProduct berdasarkan nama dalam urutan ascending
  const sortedCategoryProduct = categoryProduct.sort((a, b) => {
    if (a.name < b.name) return -1; // a lebih kecil dari b
    if (a.name > b.name) return 1; // a lebih besar dari b
    return 0; // sama
  });

  const portofolio: Portofolio[] = await fetchPortofolio();
  const product: Product[] = await fetchProduct();
  return (
    <>
      <Header
        bioData={bioData}
        categoryData={sortedCategoryProduct}
        styleData={styleProduct}
        isFixed={true}
      />
      <div className='main-content min-h-screen flex flex-col bg-background text-text overflow-hidden'>
        <Body portofolio={portofolio} product={product} />
        <Footer bioData={bioData} />
      </div>
    </>
  );
}
