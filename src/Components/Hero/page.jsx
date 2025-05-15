'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { sectionHero } from '@/data/data';
import { motion } from 'framer-motion';

function useTypingEffect(text, speed = 100) {
  const [displayedText, setDisplayedText] = React.useState('');
  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayedText;
}

const Hero = () => {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    setHero(sectionHero);
  }, []);

  // نادوا الـ hooks دايمًا بنفس الترتيب
  const title = useTypingEffect(hero[0]?.title || '', 80);
  const desc = useTypingEffect(hero[0]?.desc || '', 40);

  if (hero.length === 0) return null;

  return (
    <div className='mt-50 flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-60 gap-10'>
      <div className="text-center lg:text-left max-w-md">
        <h1 className='text-2xl sm:text-3xl font-black text-gray-100 pb-4 whitespace-pre-line'>{title}</h1>
        <p className='pb-4 font-bold text-amber-600 whitespace-pre-line'>{desc}</p>

        <Link href='/menu'>
          <button className='cursor-pointer font-extrabold text-lg sm:text-2xl bg-amber-100 hover:bg-amber-600 transition duration-300 ease-in-out rounded-lg px-5 py-3 text-fuchsia-950'>
            {hero[0].btn}
          </button>
        </Link>

        <nav>
          <ul className='flex flex-row sm:flex-row gap-4 sm:gap-10 mt-4 justify-center lg:justify-start'>
            <Link href="/breakfast" className='text-lg font-bold text-gray-100 hover:text-amber-500 transition duration-300 ease-in-out'>Breakfast</Link>
            <Link href="/dinner" className='text-lg font-bold text-gray-100 hover:text-amber-500 transition duration-300 ease-in-out'>Dinner</Link>
            <Link href="/iunch" className='text-lg font-bold text-gray-100 hover:text-amber-500 transition duration-300 ease-in-out'>Lunch</Link>
          </ul>
        </nav>
      </div>

      <motion.div
        className="border-4 border-amber-600 rotate-0 lg:rotate-12 rounded-4xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={hero[0].images} className='w-3xl max-w-xs sm:max-w-sm md:max-w-md' alt="Hero image" />
      </motion.div>
    </div>
  );
};

export default Hero;
