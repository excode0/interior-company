import Link from 'next/link';
import React from 'react';
interface ProductListProps {
  productList: Product[];
}
const ProductList = ({ productList }: ProductListProps) => {
  return (
    <div className='w-full flex flex-col md:flex-col lg:flex-row p-10'>
      {/* Display product */}
      <div className='flex-grow bg-background'>
        <h2 className='text-2xl font-bold mb-5'>Filtered Results:</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 h-full overflow-y-auto'>
          {productList.length > 0 ? (
            productList.map((product: Product) => (
              <Link
                href={`/product/collections/${product.id}`}
                key={product.id}
              >
                <div
                  key={product.id}
                  className='w-full h-[450px] flex flex-col border-2 p-4 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-2xl'
                >
                  <div className='h-[250px] w-full overflow-hidden'>
                    <img
                      src={product.imageUrl[0]}
                      alt={product.name}
                      className='object-cover w-full h-full transition-transform duration-300 hover:scale-110'
                    />
                  </div>
                  <span className='text-2xl font-semibold mt-4 overflow-hidden text-ellipsis whitespace-nowrap'>
                    {product.name}
                  </span>
                  <p className='text-gray-500 line-clamp-2'>
                    {product.description}
                  </p>
                  <p className='text-xl font-semibold'>
                    $ {new Intl.NumberFormat('id-ID').format(product.price)} .00
                  </p>
                  <p className='text-sm text-gray-400'>
                    Available colors: {product.colors.join(', ')}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className='text-center col-span-full'>
              No products match your filter. Please adjust your criteria and try
              again.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
