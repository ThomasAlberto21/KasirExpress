/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { BsXLg } from 'react-icons/bs';
import { FaUtensils, FaCoffee, FaCheese } from 'react-icons/fa';
import { API_URL } from '../api/api';

const IconCategory = ({ nama }) => {
  if (nama === 'Makanan')
    return <FaUtensils className="text-white mr-4 text-xl" />;
  if (nama === 'Minuman')
    return <FaCoffee className="text-white mr-4 text-xl" />;
  if (nama === 'Cemilan')
    return <FaCheese className="text-white mr-4 text-xl" />;
};

export default class ListCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + 'categories')
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { categories } = this.state;
    const { sidebarOpen, toggleSidebar } = this.props;
    const { changeCategory, categoriYangDipilih } = this.props;

    return (
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-full lg:w-1/6 md:w-1/3 h-screen transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto  bg-gray-800">
          <div className="flex justify-center items-center mb-5">
            <h1 className="font-bold text-white text-start text-2xl">
              KasirExpress
            </h1>
            {/* Button X */}
            <button
              onClick={toggleSidebar}
              data-drawer-target="default-sidebar"
              data-drawer-toggle="default-sidebar"
              aria-controls="default-sidebar"
              type="button"
              className="ms-auto px-3 py-2 text-sm rounded-md sm:hidden float-right bg-white"
            >
              <BsXLg />
            </button>
          </div>

          {/* Links Navigations */}
          {categories &&
            categories.map((category) => (
              <ul
                className="space-y-2 font-medium mb-3 cursor-pointer"
                key={category.id}
              >
                <li
                  className={`${
                    categoriYangDipilih === category.nama
                      ? 'bg-blue-600 text-gray-700 rounded-md '
                      : ''
                  }`}
                  onClick={() => changeCategory(category.nama)}
                >
                  <div className="flex items-center p-3 rounded-md">
                    <span className="ml-3 flex justify-center items-center text-xl text-white">
                      <IconCategory nama={category.nama} />
                      {category.nama}
                    </span>
                  </div>
                </li>
              </ul>
            ))}
        </div>
      </aside>
    );
  }
}
