import React from "react";

const NotFound = () => {
  return (
    <div className="max-h-[100vh] bg-linear-to-r from-blue-500/30 via-sky-50 to-green-50">
      <div className="max-w-7xl mx-auto flex justify-center items-center flex-col gap-2 ">
        <h1 className="text-7xl text-teal-500 animate-pulse ">404 </h1>
        <h3 className="text-3xl text-gray-500">Page NotFound!</h3>
        <p className="text-sm text-gray-300">Please! Go Back or Reload page.</p>
      </div>
    </div>
  );
};

export default NotFound;
