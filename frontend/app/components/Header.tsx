import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-navy z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-teal text-2xl font-bold">
          <div className="w-10 h-10 bg-teal text-navy flex items-center justify-center rounded-full">
            TM
          </div>
        </div>
        <ul className="flex space-x-4">
          <li><Link href="#about" className="text-teal hover:text-white transition-colors">About</Link></li>
          <li><Link href="#experience" className="text-teal hover:text-white transition-colors">Experience</Link></li>
          <li><Link href="#contact" className="text-teal hover:text-white transition-colors">Contact</Link></li>
        </ul>
        <button className="bg-transparent border border-teal text-teal px-4 py-2 rounded hover:bg-teal hover:text-navy transition-colors">
          Newsletter
        </button>
      </nav>
    </header>
  );
};

export default Header;