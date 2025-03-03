import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const items = ['🕹 About', '🎮 Projects', '📟 Contact'];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">MEGH</div>
        <div
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
              strokeWidth="3"
              stroke="yellow"
              strokeLinecap="round"
            />
            <motion.path
              strokeWidth="3"
              stroke="yellow"
              strokeLinecap="round"
            />
            <motion.path
              strokeWidth="3"
              stroke="yellow"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
        <ul className="sidebar-menu">
          {items.map((section, idx) => 
            <a href={`#${section}`} className="sidebar-item" key={idx}>
              {section}
            </a>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
