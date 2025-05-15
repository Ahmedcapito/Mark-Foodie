'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { showCard } from '@/data/data';
import { motion } from 'framer-motion';
export default function ImgMediaCard() {
  const [card, setCard] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setCard(showCard);
  }, []);

  const handleView = (title) => {
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
    router.push(`/${formattedTitle}`);
  };

  return (

      <div className="min-h-screen w-full bg-fuchsia-950 pt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center  ">
        {card.map((res, index) => (
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
                  <button
                onClick={() => handleView(res.title)}
                className="w-full bg-fuchsia-950 hover:bg-amber-600 transition duration-300 ease-in-out cursor-pointer p-3 font-black text-lg rounded-lg text-gray-100"
              >
                View
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
