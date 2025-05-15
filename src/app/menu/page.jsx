import Link from 'next/link';
import React from 'react';

const Menu = () => {
  return (
    <div className="mt-[180px] max-w-5xl mx-auto px-6 mb-100">
      <h2 className="text-5xl font-extrabold text-fuchsia-950 mb-12 text-center">
        Our Menu
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        <Link href="/breakfast" aria-label="Breakfast menu">
          <div className="cursor-pointer rounded-xl bg-gradient-to-tr from-amber-300 via-amber-400 to-amber-500 p-12 shadow-lg hover:scale-105 hover:shadow-xl transform transition duration-300">
            <h3 className="text-4xl font-bold text-fuchsia-950 mb-4">Breakfast</h3>
            <p className="text-lg font-semibold text-fuchsia-950">
              Start your day with energy and flavor.
            </p>
          </div>
        </Link>

        <Link href="/lunch" aria-label="Lunch menu">
          <div className="cursor-pointer rounded-xl bg-gradient-to-tr from-fuchsia-300 via-fuchsia-400 to-fuchsia-500 p-12 shadow-lg hover:scale-105 hover:shadow-xl transform transition duration-300">
            <h3 className="text-4xl font-bold text-fuchsia-950 mb-4">Lunch</h3>
            <p className="text-lg font-semibold text-fuchsia-950">
              Delicious meals to keep you going.
            </p>
          </div>
        </Link>

        <Link href="/dinner" aria-label="Dinner menu">
          <div className="cursor-pointer rounded-xl bg-gradient-to-tr from-indigo-300 via-indigo-400 to-indigo-500 p-12 shadow-lg hover:scale-105 hover:shadow-xl transform transition duration-300">
            <h3 className="text-4xl font-bold text-white mb-4">Dinner</h3>
            <p className="text-lg font-semibold text-white">
              Relax with our exquisite dinner options.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
