import React from "react";
import Lottie from "lottie-react";
import emptyAnimation from "@/animations/animation";

const Title = () => {
  return (
    <>
      <div className="bg-gray-100 w-full  py-8 mt-20 mb-15 text-center relative flex flex-col sm:flex-row items-center justify-center">
        <div className=" max-w-xl px-4 text-center sm:text-left">
          <h1 className="text-2xl sm:text-5xl font-black text-fuchsia-950">
            Find Your Next Favorite Dish
          </h1>
          <p className="font-bold text-amber-600 text-xs sm:text-base mt-2">
            Search recipes by name, ingredient, or cuisine — quick and easy
          </p>
        </div>

        <div className="w-48 h-48 sm:w-96 sm:h-96 mt-6 sm:mt-0 sm:sticky sm:top-20 sm:ml-16">
          <Lottie animationData={emptyAnimation} loop={true} />
        </div>
      </div>
    </>
  );
};

export default Title;
