/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BsXLg } from 'react-icons/bs';
import { FaUtensils, FaCoffee, FaCheese } from 'react-icons/fa';
import { API_URL } from '../api/api';

const IconCategory = ({ nama }) => {
  if (nama === 'Makanan')
    return <FaUtensils className="mr-4 text-xl text-white" />;
  if (nama === 'Minuman')
    return <FaCoffee className="mr-4 text-xl text-white" />;
  if (nama === 'Cemilan')
    return <FaCheese className="mr-4 text-xl text-white" />;
};

const ListCategory = ({
  sidebarOpen,
  toggleSidebar,
  changeCategory,
  categoriYangDipilih,
}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL + 'categories')
      .then((res) => {
        const categories = res.data;
        setCategories(categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <aside
      id="default-sidebar"
      className={`fixed top-0 left-0 z-40 w-full lg:w-1/6 md:w-1/3 h-screen transition-transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
        <div className="flex items-center justify-center mb-5">
          <h1 className="text-2xl font-bold text-white text-start">
            KasirExpress
          </h1>
          {/* Button X */}
          <button
            onClick={toggleSidebar}
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="float-right px-3 py-2 text-sm bg-white rounded-md ms-auto sm:hidden"
          >
            <BsXLg />
          </button>
        </div>

        {/* Links Navigations */}
        {categories &&
          categories.map((category) => (
            <ul
              className="mb-3 space-y-2 font-medium cursor-pointer"
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
                  <span className="flex items-center justify-center ml-3 text-xl text-white">
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
};

export default ListCategory;
