import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
const AdminView = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <MainContent />
        </div>
      </div>
    </div>
  );
};
export default AdminView;
