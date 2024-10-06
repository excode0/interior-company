// Definisikan tipe untuk bioData
type BioData = {
  id: string;
  name: string;
  address: string;
  description: string;
  phone: string;
  socialMedia: string[];
  iconUrl: string;
};

type CategoryProduct = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};
type StyleProduct = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};
type MaterialProduct = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  colors: string[];
  imageUrl: string[];
  modelUrl: string;
  description: string;
  category: string[];
  interiorType: string[];
  brand: string;
  materials: string[];
  dimensions: string;
  stock: number;
  discount: number;
  ratings: number;
  tags: string[];
};
type Portofolio = {
  id: string;
  name: string;
  price: number;
  imageUrl: string[];
  modelUrl: string;
  description: string;
  category: string[];
  interiorType: string[];
  dimensions: string;
  idProduct: string[];
  stock: number;
  discount: number;
  ratings: number;
  tags: string[];
  videoUrl: string;
};
