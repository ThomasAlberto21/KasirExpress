/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { API_URL } from '../api/api';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  handleSearchChange = (e) => {
    const search = e.target.value;
    this.setState({ search });
    this.props.handleSearch(search);
  };

  searchMenu = () => {
    axios
      .get(API_URL + 'products?nama=' + this.state.search)
      .then((res) => {
        this.props.setAllProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <form className="mb-5">
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
            className="block w-full p-3 pl-10 text-sm text-white rounded-lg bg-gray-700"
            placeholder="Cari Menu..."
            value={this.state.search}
            onChange={this.handleSearchChange}
            required
          />
        </div>
      </form>
    );
  }
}
