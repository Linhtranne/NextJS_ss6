'use client'
import { useRouter } from 'next/router';
import { useState } from 'react';

const Products = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    router.push({
      pathname: '/products',
      query: { name, category },
    });
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Tìm kiếm theo tên:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Tìm kiếm theo sản phẩm:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit">Tìm kiếm</button>
      </form>

      {}
      {router.query.name && router.query.category && (
        <div>
          <p>
            Tên: {router.query.name}
          </p>
          <p>
            Sản phẩm: {router.query.category}
          </p>
        </div>
      )}
    </div>
  );
};

export default Products;
