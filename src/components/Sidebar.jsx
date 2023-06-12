import { useState } from 'react';
import ListCategory from './ListCategory';
import { GiHamburgerMenu } from 'react-icons/gi';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-3 mt-2 ml-3 rounded-md sm:hidden bg-gray-700 hover:opacity-80"
      >
        <GiHamburgerMenu className="text-white text-2xl" />
      </button>

      <ListCategory sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Sidebar;
