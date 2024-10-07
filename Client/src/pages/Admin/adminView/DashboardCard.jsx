import React from "react";

const DashboardCard = ({ title, content }) => {
  return (
    <div className="p-4 border dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default DashboardCard;
