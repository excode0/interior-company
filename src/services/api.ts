// lib/firebase.js
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from './firebaseConfig';

// export const fetchBioData = async () => {
//   const bioCollection = collection(db, 'company'); // Pastikan 'bio' adalah nama koleksi di Firestore
//   const bioSnapshot = await getDocs(bioCollection);
//   const bioList = bioSnapshot.docs.map((doc) => doc.data());
//   return bioList;
// };
// Fungsi untuk mengambil data dari Firebase
// type BioData = {
//   id: string;
//   name: string;
//   icon: string;
// };
export const fetchBioData = async (): Promise<BioData[]> => {
  const bioData: BioData[] = [];
  const snapshot = await getDocs(collection(db, 'company')); // Gantilah 'bio' dengan nama koleksi Anda

  snapshot.forEach((doc) => {
    const data = doc.data();
    bioData.push({
      id: doc.id, // Menggunakan ID dokumen sebagai ID
      ...data,
    } as BioData);
  });

  return bioData;
};

export const fetchCategoryProduct = async (): Promise<CategoryProduct[]> => {
  const CategoryProduct: CategoryProduct[] = [];
  const snapshot = await getDocs(collection(db, 'category')); // Gantilah 'bio' dengan nama koleksi Anda

  snapshot.forEach((doc) => {
    const data = doc.data();
    CategoryProduct.push({
      id: doc.id,
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
    });
  });

  return CategoryProduct;
};

export async function fetchCategoryById(
  categoryId: string,
): Promise<CategoryProduct | null> {
  try {
    const docRef = doc(db, 'category', categoryId); // Akses ke dokumen material
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const categoryData = docSnap.data() as CategoryProduct;
      return {
        id: docSnap.id,
        name: categoryData.name,
        description: categoryData.description,
        imageUrl: categoryData.imageUrl,
      };
    } else {
      return null; // Jika data tidak ditemukan
    }
  } catch (error) {
    console.error('Failed to fetch material:', error);
    return null;
  }
}
export const fetchStyleProduct = async (): Promise<StyleProduct[]> => {
  const StyleProduct: StyleProduct[] = [];
  const snapshot = await getDocs(collection(db, 'style')); // Gantilah 'bio' dengan nama koleksi Anda

  snapshot.forEach((doc) => {
    const data = doc.data();
    StyleProduct.push({
      id: doc.id,
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
    });
  });

  return StyleProduct;
};
export async function fetchStyleById(
  styleId: string,
): Promise<CategoryProduct | null> {
  try {
    const docRef = doc(db, 'style', styleId); // Akses ke dokumen material
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const styleData = docSnap.data() as StyleProduct;
      return {
        id: docSnap.id,
        name: styleData.name,
        description: styleData.description,
        imageUrl: styleData.imageUrl,
      };
    } else {
      return null; // Jika data tidak ditemukan
    }
  } catch (error) {
    console.error('Failed to fetch material:', error);
    return null;
  }
}
export const fetchMaterialProduct = async (): Promise<MaterialProduct[]> => {
  const MaterialProduct: MaterialProduct[] = [];
  const snapshot = await getDocs(collection(db, 'material')); // Gantilah 'bio' dengan nama koleksi Anda

  snapshot.forEach((doc) => {
    const data = doc.data();
    MaterialProduct.push({
      id: doc.id,
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
    });
  });

  return MaterialProduct;
};
export async function fetchMaterialById(
  materialId: string,
): Promise<MaterialProduct | null> {
  try {
    const docRef = doc(db, 'material', materialId); // Akses ke dokumen material
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const materialData = docSnap.data() as MaterialProduct;
      return {
        id: docSnap.id,
        name: materialData.name,
        description: materialData.description,
        imageUrl: materialData.imageUrl,
      };
    } else {
      return null; // Jika data tidak ditemukan
    }
  } catch (error) {
    console.error('Failed to fetch material:', error);
    return null;
  }
}
export const fetchProduct = async (): Promise<Product[]> => {
  const products: Product[] = [];
  const snapshot = await getDocs(collection(db, 'products'));

  snapshot.forEach((doc) => {
    const data = doc.data();

    // Spreading the data object into the Product structure and adding `id` separately
    products.push({
      id: doc.id,
      ...data, // Spreads all other fields from the Firestore document into the Product object
    } as Product); // Ensures it conforms to the Product interface
  });

  return products;
};
export async function fetchProductById(id: string): Promise<Product | null> {
  try {
    const docRef = doc(db, 'products', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as Omit<Product, 'id'>; // Jangan memasukkan `id` di sini
      return { id: docSnap.id, ...data }; // Gabungkan `id` secara manual dengan data lainnya
    } else {
      console.error('No such product found!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching product from Firebase:', error);
    return null;
  }
}
export const fetchRecommendedProducts = async (
  categoryId: string,
): Promise<Product[]> => {
  try {
    const productsRef = collection(db, 'products');
    const q = query(
      productsRef,
      where('category', 'array-contains', categoryId),
    ); // Menyesuaikan dengan struktur Firestore Anda
    const querySnapshot = await getDocs(q);

    const products: Product[] = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() } as Product);
    });

    return products;
  } catch (error) {
    console.error('Error fetching recommended products:', error);
    return [];
  }
};

export const fetchPortofolio = async (): Promise<Portofolio[]> => {
  const portofolio: Portofolio[] = [];
  const snapshot = await getDocs(collection(db, 'rooms'));

  snapshot.forEach((doc) => {
    const data = doc.data();

    // Spreading the data object into the Product structure and adding `id` separately
    portofolio.push({
      id: doc.id,
      ...data, // Spreads all other fields from the Firestore document into the Product object
    } as Portofolio); // Ensures it conforms to the Product interface
  });

  return portofolio;
};
export async function fetchPortofolioById(
  id: string,
): Promise<Portofolio | null> {
  try {
    const docRef = doc(db, 'rooms', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as Omit<Portofolio, 'id'>; // Dont insert id
      return { id: docSnap.id, ...data }; // Combine Id
    } else {
      console.error('No such product found!');
      return null;
    }
  } catch (error) {
    console.error('Error fetching product from Firebase:', error);
    return null;
  }
}
export const fetchRecommendedRooms = async (
  categoryId: string,
): Promise<Portofolio[]> => {
  try {
    const productsRef = collection(db, 'rooms');
    const q = query(
      productsRef,
      where('category', 'array-contains', categoryId),
    ); // Menyesuaikan dengan struktur Firestore Anda
    const querySnapshot = await getDocs(q);

    const rooms: Portofolio[] = [];
    querySnapshot.forEach((doc) => {
      rooms.push({ id: doc.id, ...doc.data() } as Portofolio);
    });

    return rooms;
  } catch (error) {
    console.error('Error fetching recommended products:', error);
    return [];
  }
};
