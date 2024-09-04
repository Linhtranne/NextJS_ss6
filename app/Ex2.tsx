'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    const searchQuery = searchParams.get('search');

    if (searchQuery) {
      setSearchValue(searchQuery);
    }
  }, [searchParams]);

  return (
    <div>
      <h1>Kết quả tìm kiếm: {searchValue}</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const query = e.currentTarget.search.value;
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
