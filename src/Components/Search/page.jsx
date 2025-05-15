'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dinner, Breakfast, Iunch } from "@/data/data"; 
import ImgMediaCard from "../showCard/page";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const allItems = [...Dinner, ...Breakfast, ...Iunch];

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    const filtered = allItems.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="mb-20 mt-12 px-4 sm:px-10 lg:px-20">
      <div className="flex justify-center items-center gap-4 max-w-md mx-auto">
        <input
          type="text"
          id="search"
          placeholder="Search"
          value={query}
          onChange={handleSearch}
          className="bg-gray-100 w-screen h-15 text-center rounded-md font-bold text-lg border-none outline-none placeholder-gray-400"
        />
        <button 
          type="submit"
          aria-label="Search button"
          className="p-2 bg-amber-600 rounded-full cursor-pointer hover:bg-amber-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="24px"
            height="24px"
            fill="#fff"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6 mt-16 sm:px-0">
        {results.length > 0 ? (
          results.map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              className="bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-bold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
              <span className="block mt-4 font-semibold text-amber-600">{item.price}</span>
            </motion.div>
          ))
        ) : query ? (
          <p className="text-center text-gray-700 text-xl col-span-full">
            No results found for "{query}".
          </p>
        ) : (
          <ImgMediaCard/>
        )}
      </div>
    </div>
  );
};

export default Search;
