import {
  fetchCategoryProduct,
  fetchMaterialProduct,
  fetchProduct,
  fetchStyleProduct,
} from '@/services/api';
import React from 'react';
import Body from './body';

const page = async () => {
  const categoryProduct: CategoryProduct[] = await fetchCategoryProduct();
  const typeProduct: StyleProduct[] = await fetchStyleProduct();
  const materialProduct: MaterialProduct[] = await fetchMaterialProduct();
  const product: Product[] = await fetchProduct();
  return (
    <Body
      product={product}
      categoryProduct={categoryProduct}
      styleProduct={typeProduct}
      materialProduct={materialProduct}
    />
  );
};

export default page;
