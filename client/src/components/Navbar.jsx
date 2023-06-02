import React from 'react';
import Link from 'next/link';
import SearchCoinsContainer from './molecules/SearchCoinsContainer';
export default function Navbar () {
  return (
    <nav className="color-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* <img className="h-8" src="logo.svg" alt="Logo" /> */}
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-300 hover:bg-discord-blurple hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>

              <Link href="#" className="text-gray-300 hover:bg-discord-blurple hover:text-white px-3 py-2 rounded-md text-sm font-medium">Exchanges</Link>

              <Link href="#" className="text-gray-300 hover:bg-discord-blurple hover:text-white px-3 py-2 rounded-md text-sm font-medium">Nosotros</Link>
              <SearchCoinsContainer></SearchCoinsContainer>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
