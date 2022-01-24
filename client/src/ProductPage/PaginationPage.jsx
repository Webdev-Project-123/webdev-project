import React from 'react';
import Spinner from './Spinner'
import ProductThumb from '../Home/ProductThumb';

const PaginationPage = ({ products, loading }) => {
  if (loading)
    return <Spinner />
  return <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
    {products.map((product, index) =>
      <ProductThumb productData={product} key={index} />
    )}
  </div>
};

export default PaginationPage;
