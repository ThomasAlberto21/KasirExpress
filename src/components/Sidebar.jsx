/* eslint-disable react/prop-types */
import { useState } from 'react';
import ListCategory from './ListCategory';
import { GiHamburgerMenu } from 'react-icons/gi';

const Sidebar = ({ changeCategory, categoriYangDipilih }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="sidebar">
      <button
        type="button"
        onClick={toggleSidebar}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        className="inline-flex items-center p-3 mt-2 ml-3 bg-gray-700 rounded-md sm:hidden hover:opacity-80"
      >
        <GiHamburgerMenu className="text-2xl text-white" />
      </button>

      <ListCategory
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        changeCategory={changeCategory}
        categoriYangDipilih={categoriYangDipilih}
      />
    </div>
  );
};

export default Sidebar;
