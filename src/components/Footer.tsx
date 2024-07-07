import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray p-16 text-white flex justify-between items-center">
            <img className='h-32' src='/logo-green.png' />
            <nav>
                <ul className="flex flex-col ">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/about" className="hover:underline">About</Link></li>
                    <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                    <li><Link to="/resources" className="hover:underline">Resources</Link></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
