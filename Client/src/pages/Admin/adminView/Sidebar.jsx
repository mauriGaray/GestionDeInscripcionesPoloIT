import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } h-screen bg-customBlue text-white duration-300 flex flex-col`}>
        {/* Header del Sidebar */}
        <div className="flex items-center justify-between  h-14 p-2 hover:bg-blue-700 cursor-pointer">
          <span className={`${isOpen ? "block" : "hidden"} text-lg font-bold`}>
            Dashboard
          </span>
          <button
            className="p-2 rounded bg-customBlue hover:bg-blue-700 focus:outline-none"
            onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Elementos del Sidebar */}
        <nav className="mt-10">
          <ul>
            <li className="p-4 hover:bg-blue-700 cursor-pointer">
              <a href="#" className="flex items-center space-x-4">
                <span className="text-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7h18M3 12h18M3 17h18"></path>
                  </svg>
                </span>
                <span className={`${isOpen ? "block" : "hidden"}`}>Cursos</span>
              </a>
            </li>
            <li className="p-4 hover:bg-blue-700 cursor-pointer">
              <a href="#" className="flex items-center space-x-4">
                <span className="text-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6v12m16-12v12m-8-4v4m0-8v4"></path>
                  </svg>
                </span>
                <span className={`${isOpen ? "block" : "hidden"}`}>
                  Proyectos
                </span>
              </a>
            </li>
            <li className="p-4 hover:bg-blue-700 cursor-pointer">
              <a href="#" className="flex items-center space-x-4">
                <span className="text-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"></path>
                  </svg>
                </span>
                <span className={`${isOpen ? "block" : "hidden"}`}>
                  Mentores
                </span>
              </a>
            </li>
            <li className="p-4 hover:bg-blue-700 cursor-pointer">
              <a href="#" className="flex items-center space-x-4">
                <span className="text-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12H8m0 0h8m0 0V8m0 4v4"></path>
                  </svg>
                </span>
                <span className={`${isOpen ? "block" : "hidden"}`}>
                  Egresados
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
