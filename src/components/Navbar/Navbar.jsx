import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = ['👾 Home', '🕹 About', '🎮 Projects', '📟 Contact'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">MEGH</div>
        <div
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="23" height="23" viewBox="0 0 23 23" className='svg'>
            <motion.path
              strokeWidth="3"
              stroke="yellow"
              strokeLinecap="round"
              d="M 2 6 L 21 6" // This creates the top line
              initial={false}
              animate={
                isOpen ? { d: 'M 3 16.5 L 20 3' } : { d: 'M 2 6 L 21 6' }
              }
            />
            <motion.path
              strokeWidth="3"
              stroke="yellow"
              strokeLinecap="round"
              d="M 2 12 L 21 12" // This creates the middle line
              initial={false}
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.path
              strokeWidth="3"
              stroke="yellow"
              strokeLinecap="round"
              d="M 2 18 L 21 18" // This creates the bottom line
              initial={false}
              animate={
                isOpen ? { d: 'M 3 3 L 20 16.5' } : { d: 'M 2 18 L 21 18' }
              }
            />
          </svg>
        </div>
      </div>
      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
        <ul className="sidebar-menu">
          {items.map((section, idx) => (
            <li key={idx}>
              <a
                href={`#${section}`}
                className="sidebar-item"
                onClick={e => {
                  e.preventDefault();
                  const sectionId = section.replace(/[\s👾🕹🎮📟]/g, '');
                  document
                    .getElementById(sectionId)
                    .scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
