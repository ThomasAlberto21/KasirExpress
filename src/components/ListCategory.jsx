/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import { API_URL } from '../api/api';
import { FaUtensils, FaCoffee, FaCheese } from 'react-icons/fa';
import { BsXLg } from 'react-icons/bs';

const Icon = ({ nama }) => {
  if (nama === 'Makanan')
    return <FaUtensils Icon={FaUtensils} className="text-white mr-4 text-xl" />;
  if (nama === 'Minuman')
    return <FaCoffee Icon={FaCoffee} className="text-white mr-4 text-xl" />;
  if (nama === 'Cemilan')
    return <FaCheese Icon={FaCheese} className="text-white mr-4 text-xl" />;
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
    const { changeCategory } = this.props;

    return (
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-full lg:w-1/6 md:w-1/3 h-screen transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
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
              className="ms-auto px-3 py-2 text-sm rounded-md  sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700  dark:focus:ring-gray-600  float-right bg-white"
            >
              <BsXLg />
            </button>
          </div>

          {/* Links Navigations */}
          {categories &&
            categories.map((category) => (
              <ul className="space-y-2 font-medium mb-3" key={category.id}>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 "
                    onClick={() => changeCategory(category.nama)}
                  >
                    <span className="ml-3 flex justify-center items-center text-xl">
                      <Icon nama={category.nama} />
                      {category.nama}
                    </span>
                  </a>
                </li>
              </ul>
            ))}
        </div>
      </aside>
    );
  }
}