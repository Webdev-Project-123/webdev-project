import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import Filter from './Filter';
import PaginationBar from './PaginationBar';
import PaginationPage from './PaginationPage';

const productData = [
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'Chuyển sinh thành giếng nước, tôi trở thành bla bla bla bla blas',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  },
  {
    name: 'IDK',
    image: 'https://preview.redd.it/c6rlndlo41851.jpg?width=640&crop=smart&auto=webp&s=f28a8e163c0670c81a77b1c07e498d6b14a60e4d'
  }
]

const ProductPage = () => {
  const [products, setProducts] = useState(productData);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [productsPerPage] = useState(8);

  const currProducts = products.slice((currPage - 1) * productsPerPage, currPage * productsPerPage);

  const paginate = (pageNumber) => setCurrPage(pageNumber);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(1);
  }, [navigate])

  return <div className='bg-[#FCECDD]'>
    <Header />
    <div className='my-8 flex gap-4'>
      {/* Filter Bar | Left Content */}
      <Filter className='inline' />

      {/* Right Content */}
      <div className='mr-16 w-full'>
        {/* Product List */}
        <div className='w-full bg-white rounded-lg'>
          <PaginationPage products={currProducts} loading={loading} />
        </div>

        {/* Pagination Bar */}
        <PaginationBar productsPerPage={productsPerPage} numOfProducts={products.length} paginate={paginate} currPage={currPage} />
      </div>

    </div>
    <Footer />
  </div>;
};

export default ProductPage;
