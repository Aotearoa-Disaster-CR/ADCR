import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-beige p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className=" font-bold text-lg">Aotearoa Disaster and Community Resources</h1>
        <img className='h-20' src='/logo-black.png' />
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/resources" className="hover:underline">Resources</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
