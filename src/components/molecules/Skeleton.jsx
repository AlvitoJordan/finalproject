import React from "react";

const Skeleton = ({ className }) => {
  return (
    <div className={`flex justify-center ${className} w-full`}>
      <div className="lg:w-[400px] w-[350px] h-[550px] flex flex-col shadow-box_item bg-gray-300 p-6 rounded-2xl animate-pulse">
        <div className="h-20 bg-gray-200 mb-4" />
        <div className="w-full h-[190px] bg-gray-200 rounded-md mb-4" />
        <div className="h-2 bg-gray-200 mb-6" />
        <div className="bg-gray-200 h-20" />

        <div className="flex space-x-5 justify-end mt-6">
          <div className="h-10 bg-gray-200 w-[120px]" />
          <div className="h-10 bg-gray-200 w-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
