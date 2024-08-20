"use client"
import { useRouter } from 'next/router';
import { useState } from 'react';

const Posts = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push(`/posts?search=${encodeURIComponent(inputValue)}`);
  };

  return (
    <div>
      <h1>Tìm kiếm theo tên</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter search term"
        />
        <button type="submit">Tìm kiếm</button>
      </form>
    </div>
  );
};

export default Posts;
