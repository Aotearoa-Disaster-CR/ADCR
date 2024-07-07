import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray p-10 text-white flex justify-between items-center">
            <img className='h-32' src='/logo-green.png' />
            <nav className='flex flex-col text-neutral-50'>
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/about" className="hover:underline">About</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
                <Link to="/resources" className="hover:underline">Resources</Link>
            </nav>
        </footer>
    );
}

export default Footer;
