export interface Category {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}
export interface InteriorType {
  id: number;
  name: string;
  description: string;
  imageUrl: string[];
}
export interface Room {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  modelUrl: string;
  description: string;
  category: string;
  dimensions: string;
  idProduct: number[];
  stock: number;
  discount: number;
  ratings: number;
  tags: string[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  colors: string[];
  imageUrl: string[];
  modelUrl: string;
  description: string;
  category: string;
  brand: string;
  material: {
    name: string;
    stock: number;
  }[];
  dimensions: string;
  stock: number;
  discount: number;
  ratings: number;
  tags: string[];
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Furniture',
    description: 'Essential pieces to furnish and decorate your living spaces.',
    imageUrl: '/images/categories/furniture.jpg',
  },
  {
    id: 2,
    name: 'Lighting',
    description: 'Lighting solutions to brighten and enhance any room.',
    imageUrl: '/images/categories/lighting.jpg',
  },
  {
    id: 3,
    name: 'Decor',
    description: 'Decorative items to add personality and style to your home.',
    imageUrl: '/images/categories/decor.jpg',
  },
  {
    id: 4,
    name: 'Rugs',
    description: 'Stylish and functional rugs to complement your flooring.',
    imageUrl: '/images/categories/rugs.jpg',
  },
  {
    id: 5,
    name: 'Curtains',
    description: 'Curtains and drapes to enhance privacy and add elegance.',
    imageUrl: '/images/categories/curtains.jpg',
  },
  {
    id: 6,
    name: 'Storage',
    description:
      'Storage solutions to keep your home organized and clutter-free.',
    imageUrl: '/images/categories/storage.jpg',
  },
  {
    id: 7,
    name: 'Bedding',
    description: 'Comfortable and stylish bedding to create a cozy bedroom.',
    imageUrl: '/images/categories/bedding.jpg',
  },
  {
    id: 8,
    name: 'Wall Art',
    description: 'Artistic pieces to add visual interest to your walls.',
    imageUrl: '/images/categories/wall-art.jpg',
  },
  {
    id: 9,
    name: 'Outdoor',
    description: 'Furniture and accessories for outdoor living spaces.',
    imageUrl: '/images/categories/outdoor.jpg',
  },
  {
    id: 10,
    name: 'Office',
    description:
      'Furniture and decor to create a productive and stylish workspace.',
    imageUrl: '/images/categories/office.jpg',
  },
  {
    id: 11,
    name: 'Kitchen',
    description:
      'Items to enhance the functionality and style of your kitchen.',
    imageUrl: '/images/categories/kitchen.jpg',
  },
  {
    id: 12,
    name: 'Bathroom',
    description:
      'Products to improve the functionality and aesthetics of your bathroom.',
    imageUrl: '/images/categories/bathroom.jpg',
  },
  {
    id: 13,
    name: 'Kids',
    description: 'Furniture and decor designed for children’s spaces.',
    imageUrl: '/images/categories/kids.jpg',
  },
  {
    id: 14,
    name: 'Entryway',
    description:
      'Furniture and decor for the entryway to make a great first impression.',
    imageUrl: '/images/categories/entryway.jpg',
  },
  {
    id: 15,
    name: 'Custom',
    description:
      'Customizable furniture and decor to suit your personal style.',
    imageUrl: '/images/categories/custom.jpg',
  },
];
export const interiorTypes: InteriorType[] = [
  {
    id: 1,
    name: 'Modern',
    description:
      'Sleek and contemporary designs with clean lines and minimalistic features.',
    imageUrl: ['/images/Modern_1.jpg'],
  },
  {
    id: 2,
    name: 'Traditional',
    description:
      'Classic designs with rich woodwork, ornate details, and elegant furnishings.',

    imageUrl: ['/images/Tradisional_1.jpg'],
  },
  {
    id: 3,
    name: 'Industrial',
    description:
      'Urban and edgy with exposed brick, metal elements, and reclaimed materials.',

    imageUrl: ['/images/Industrialis_1.jpg'],
  },
  {
    id: 4,
    name: 'Scandinavian',
    description:
      'Bright and airy designs with simple, functional furniture and a neutral color palette.',

    imageUrl: ['/images/Skadinavian_2.jpg'],
  },
  {
    id: 5,
    name: 'Bohemian',
    description:
      'Eclectic and colorful with a mix of textures, patterns, and global influences.',

    imageUrl: ['/images/Bohemian_1.jpg'],
  },
  {
    id: 6,
    name: 'Mid-Century Modern',
    description:
      'Retro style featuring bold colors, geometric shapes, and iconic furniture pieces.',

    imageUrl: ['/images/Midcentury Modern_1.jpg'],
  },
  {
    id: 7,
    name: 'Farmhouse',
    description:
      'Rustic and charming with distressed furniture, natural materials, and a cozy atmosphere.',

    imageUrl: ['/images/Farmhouse_1.jpg'],
  },
  {
    id: 8,
    name: 'Minimalist',
    description:
      'Simple and uncluttered designs focusing on functionality and the use of space.',

    imageUrl: ['/images/Minimalis_1.jpg'],
  },
];
export const rooms: Room[] = [
  {
    id: 1,
    name: 'Master Bedroom',
    price: 1000,
    imageUrl: '/images/bedroom1.jpg',
    modelUrl: '/models/bedroom1.glb',
    // cordinatSSSSS
    description: 'A spacious master bedroom with a modern design.',
    category: 'Bedroom',
    dimensions: '500x400x300 cm',
    idProduct: [1, 2, 3], // Daftar ID produk terkait dengan room ini
    stock: 5,
    discount: 5,
    ratings: 4.8,
    tags: ['spacious', 'modern', 'luxury'],
  },
  {
    id: 2,
    name: 'Living Room',
    price: 850,
    imageUrl: '/images/livingroom1.jpg',
    modelUrl: '/models/livingroom1.glb',
    description: 'A cozy living room with elegant furniture.',
    category: 'Living Room',
    dimensions: '600x450x350 cm',
    idProduct: [2, 4, 5], // Daftar ID produk terkait dengan room ini
    stock: 7,
    discount: 5,
    ratings: 4.5,
    tags: ['cozy', 'elegant', 'comfortable'],
  },
];
export const products: Product[] = [
  {
    id: 1,
    name: 'Modern Chair',
    price: 150,
    colors: ['Red', 'Blue', 'Green'],
    imageUrl: ['/images/chair1.jpg', '/images/chair2.jpg'],
    modelUrl: '/models/chair1.glb',
    description: 'A modern chair with a comfortable design.',
    category: 'Furniture',
    brand: 'ModernCo',
    material: [
      { name: 'Wood', stock: 10 },
      { name: 'Leather', stock: 5 },
    ],
    dimensions: '75x50x45 cm',
    stock: 20,
    discount: 10,
    ratings: 4.5,
    tags: ['modern', 'comfort', 'minimalist'],
  },
  {
    id: 2,
    name: 'Wooden Table',
    price: 300,
    colors: ['Brown', 'Black'],
    imageUrl: ['/images/chair2.jpg'],
    modelUrl: '/models/table1.glb',
    description: 'A durable wooden table for any living room.',
    category: 'Furniture',
    brand: 'Craftsman',
    material: [
      { name: 'Oak Wood', stock: 12 },
      { name: 'Metal', stock: 7 },
    ],
    dimensions: '150x80x75 cm',
    stock: 15,
    discount: 5,
    ratings: 4.7,
    tags: ['wooden', 'classic', 'durable'],
  },
  {
    id: 3,
    name: 'Decorative Lamp',
    price: 75,
    colors: ['White', 'Yellow'],
    imageUrl: ['/images/lamp4.jpg'],
    modelUrl: '/models/lamp1.glb',
    description: 'A stylish decorative lamp to light up your space.',
    category: 'Lighting',
    brand: 'BrightLights',
    material: [
      { name: 'Glass', stock: 20 },
      { name: 'Metal', stock: 8 },
    ],
    dimensions: '30x30x50 cm',
    stock: 10,
    discount: 0,
    ratings: 4.3,
    tags: ['lighting', 'stylish', 'modern'],
  },
  {
    id: 4,
    name: 'Decorative Lamp',
    price: 75,
    colors: ['White', 'Yellow'],
    imageUrl: ['/images/lamp4.jpg'],
    modelUrl: '/models/lamp1.glb',
    description: 'A stylish decorative lamp to light up your space.',
    category: 'Lighting',
    brand: 'BrightLights',
    material: [
      { name: 'Glass', stock: 20 },
      { name: 'Metal', stock: 8 },
    ],
    dimensions: '30x30x50 cm',
    stock: 10,
    discount: 0,
    ratings: 4.3,
    tags: ['lighting', 'stylish', 'modern'],
  },
  {
    id: 5,
    name: 'Decorative Lamp',
    price: 75,
    colors: ['White', 'Yellow'],
    imageUrl: ['/images/lamp4.jpg'],
    modelUrl: '/models/lamp1.glb',
    description: 'A stylish decorative lamp to light up your space.',
    category: 'Lighting',
    brand: 'BrightLights',
    material: [
      { name: 'Glass', stock: 20 },
      { name: 'Metal', stock: 8 },
    ],
    dimensions: '30x30x50 cm',
    stock: 10,
    discount: 0,
    ratings: 4.3,
    tags: ['lighting', 'stylish', 'modern'],
  },
  {
    id: 6,
    name: 'Decorative Lamp',
    price: 75,
    colors: ['White', 'Yellow'],
    imageUrl: ['/images/lamp4.jpg'],
    modelUrl: '/models/lamp1.glb',
    description: 'A stylish decorative lamp to light up your space.',
    category: 'Lighting',
    brand: 'BrightLights',
    material: [
      { name: 'Glass', stock: 20 },
      { name: 'Metal', stock: 8 },
    ],
    dimensions: '30x30x50 cm',
    stock: 10,
    discount: 0,
    ratings: 4.3,
    tags: ['lighting', 'stylish', 'modern'],
  },
  {
    id: 7,
    name: 'Decorative Lamp',
    price: 75,
    colors: ['White', 'Yellow'],
    imageUrl: ['/images/lamp4.jpg'],
    modelUrl: '/models/lamp1.glb',
    description: 'A stylish decorative lamp to light up your space.',
    category: 'Lighting',
    brand: 'BrightLights',
    material: [
      { name: 'Glass', stock: 20 },
      { name: 'Metal', stock: 8 },
    ],
    dimensions: '30x30x50 cm',
    stock: 10,
    discount: 0,
    ratings: 4.3,
    tags: ['lighting', 'stylish', 'modern'],
  },
  {
    id: 8,
    name: 'Decorative Lamp',
    price: 75,
    colors: ['White', 'Yellow'],
    imageUrl: ['/images/lamp4.jpg'],
    modelUrl: '/models/lamp1.glb',
    description: 'A stylish decorative lamp to light up your space.',
    category: 'Lighting',
    brand: 'BrightLights',
    material: [
      { name: 'Glass', stock: 20 },
      { name: 'Metal', stock: 8 },
    ],
    dimensions: '30x30x50 cm',
    stock: 10,
    discount: 0,
    ratings: 4.3,
    tags: ['lighting', 'stylish', 'modern'],
  },
  {
    id: 9,
    name: 'Decorative Lamp',
    price: 75,
    colors: ['White', 'Yellow'],
    imageUrl: ['/images/lamp2.jpg'],
    modelUrl: '/models/lamp1.glb',
    description: 'A stylish decorative lamp to light up your space.',
    category: 'Lighting',
    brand: 'BrightLights',
    material: [
      { name: 'Glass', stock: 20 },
      { name: 'Metal', stock: 8 },
    ],
    dimensions: '30x30x50 cm',
    stock: 10,
    discount: 0,
    ratings: 4.3,
    tags: ['lighting', 'stylish', 'modern'],
  },
];
