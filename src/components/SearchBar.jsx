/* eslint-disable react/prop-types */
import { useState } from 'react';
import axios from 'axios';
import { BiSearch } from 'react-icons/bi';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProducts();
  };

  return (
    <form className="mb-5" onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-2xl text-white pointer-events-none">
          <BiSearch />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-3 pl-10 text-sm text-white bg-gray-700 rounded-lg placeholder:text-white "
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
