/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../api/api';

const SearchBar = ({ handleSearch, setAllProducts }) => {
  const [search, setSearch] = useState('');
  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    handleSearch(searchValue);
  };

  const searchProducts = () => {
    axios
      .get(API_URL + 'products?nama=' + search)
      .then((res) => {
        setAllProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      className="mb-5"
      onSubmit={(e) => {
        e.preventDefault();
        searchProducts();
      }}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 pl-10 text-sm text-white bg-gray-700 rounded-lg "
          placeholder="Cari Menu..."
          value={search}
          onChange={handleSearchChange}
          required
        />
      </div>
      <button type="submit" className="hidden">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
