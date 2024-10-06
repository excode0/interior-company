import { fetchBioData, fetchPortofolio } from '@/services/api';
import React from 'react';
import Body from './component/body';

const page = async () => {
  const bioData: BioData[] = await fetchBioData();
  const portofolio: Portofolio[] = await fetchPortofolio();
  return <Body portofolio={portofolio} bioData={bioData} />;
};

export default page;
