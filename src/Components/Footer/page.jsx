import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-6 sm:px-12  w-full"> 
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-2xl font-bold text-fuchsia-950">
          Mark Foodie
        </div>
        
        <nav className="flex gap-8 text-fuchsia-950 hover:text-amber-600 transition-colors">
          <Link href="/" className="hover:text-amber-600">Home</Link>
          <Link href="/menu" className="hover:text-amber-600">Menu</Link>
          <Link href="/contact" className="hover:text-amber-600">Contact</Link>
        </nav>

        <div className="text-sm text-fuchsia-950 select-none">
          &copy; {new Date().getFullYear()} MarkFoodie. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;