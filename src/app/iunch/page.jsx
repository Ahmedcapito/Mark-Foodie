"use client";
import React, { useEffect, useState } from "react";
import { Iunch } from "@/data/data";
import { motion } from "framer-motion";

const iunch = () => {
  const [lunchApi, setLunchApi] = useState([]);

  useEffect(() => {
    setLunchApi(Iunch);
  }, []);

  return (
    <div className="min-h-screen w-full bg-fuchsia-950 pt-50 pb-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {lunchApi.map((res, index) => (
          <motion.div
            key={res.id}
            className="w-full bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={res.image}
              alt={res.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h5 className="text-lg text-fuchsia-950 font-black mb-2">{res.title}</h5>
              <p className="text-gray-600 text-sm mb-2">{res.desc}</p>
              <p className="text-amber-600 font-bold mb-4">{`${res.price} LE`}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default iunch;
