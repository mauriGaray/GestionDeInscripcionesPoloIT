import React from "react";

const Navbar = () => {
  return (
    <header className="w-full p-4 border-b dark:border-gray-800 flex justify-between items-center bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div>
        <button className="mr-4">Notifications</button>
        <button>Profile</button>
      </div>
    </header>
  );
};

export default Navbar;
