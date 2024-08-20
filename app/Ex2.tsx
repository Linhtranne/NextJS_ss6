'use client'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const SearchPage = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (router.query.search) {
      setSearchValue(router.query.search);
    }
  }, [router.query]);

  return (
    <div>
      <h1>Kết quả tìm kiếm: {searchValue}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const query = e.target.search.value;
          router.push(`/search?search=${encodeURIComponent(query)}`);
        }}
      >
        <input
          type="text"
          name="search"
          placeholder="Search..."
          defaultValue={searchValue}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchPage;
