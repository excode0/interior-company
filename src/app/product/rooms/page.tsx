import { fetchPortofolio, fetchProduct } from '@/services/api';
import React from 'react';
import Body from './body';

const page = async () => {
  const rooms: Portofolio[] = await fetchPortofolio();
  return <Body rooms={rooms} />;
};

export default page;
