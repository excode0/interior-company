import { fetchProduct } from '@/services/api';
import React from 'react';
import Body from './body';

const page = async () => {
  const product: Product[] = await fetchProduct();
  return <Body product={product} />;
};

export default page;
