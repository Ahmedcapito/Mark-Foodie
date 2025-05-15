'use client'
import React from "react";
import Lottie from "lottie-react";
import emptyAnimation from "@/animations/animation";

const Title = () => {
  return (
    <div className="bg-gray-100 w-full py-20  h-75  mt-20 mb-30 text-center relative flex flex-col sm:flex-row items-center justify-center px-4 sm:px-10 lg:px-20">
      
      <div className="text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl font-black text-fuchsia-950 leading-tight">
          Find Your Next Favorite Dish
        </h1>
        <p className="font-bold text-amber-600 text-xs sm:text-base mt-2 max-w-md mx-auto sm:mx-0">
          Search recipes by name, ingredient, or cuisine — quick and easy
        </p>
      </div>

      {/* الأنيميشن */}
      <div className="w-40 bg-10 h-40 sm:w-72 sm:h-72 lg:w-96 lg:h-96 mt-8 sm:mt-0 sm:sticky sm:top-20 sm:ml-16 flex-shrink-0">
        <Lottie animationData={emptyAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Title;
